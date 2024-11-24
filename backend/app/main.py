# main.py (backend)
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware
import sqlite3
from app.models import EventItem, OrganizationItem
from pathlib import Path
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))
SECRET_KEY = os.getenv("SECRET_KEY")

app = FastAPI()

# Allow CORS from specific origins (e.g., localhost for your frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Change this if frontend is running elsewhere
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# SQLite database setup
DATABASE = Path(__file__).parent / "database.db"

# Connect DB
def connect_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON") # Turning on foreign keys
    return conn

@app.get("/")
async def root():
    return {"message": "Hello There!"}

# Get all items - DISPLAY PURPOSES ONLY in DOCS
@app.get("/get-events")
def read_items():
    conn = connect_db()
    cursor = conn.cursor()

    # SQL query to fetch organizations and their associated events
    cursor.execute("""
        SELECT o.id AS org_id, o.orgName, o.isCollegeBased, 
            e.id AS event_id, e.eventTitle, e.venue, e.startTime, e.endTime, e.notes,
            e.month, e.day, e.year
        FROM organizations o
        LEFT JOIN events e ON o.id = e.org_id
    """)

    events = cursor.fetchall()
    conn.close()

    # Organize the result so each organization has a list of its events
    orgs = {}
    for row in events:
        org_id = row["org_id"]
        if org_id not in orgs:
            orgs[org_id] = {
                "org_id": org_id,
                "orgName": row["orgName"],
                "isCollegeBased": row["isCollegeBased"],
                "events": []
            }
        if row["event_id"]:  # If there is an event associated with this organization
            orgs[org_id]["events"].append({
                "event_id": row["event_id"],
                "eventTitle": row["eventTitle"],
                "venue": row["venue"],
                "month": row["month"],
                "day": row["day"],
                "year": row["year"],
                "startTime": row["startTime"],
                "endTime": row["endTime"],
                "notes": row["notes"]
            })

    return list(orgs.values())

# Creating organizations - FOR DOCS ONLY
@app.post("/create-organization/")
def create_organization(org_item: OrganizationItem):
    conn = connect_db()
    cursor = conn.cursor()
    
    try:
        # Insert organization data into DB table
        cursor.execute(""" 
                    INSERT INTO organizations (orgName, isCollegeBased) VALUES (?, ?)
                    """, (org_item.orgName, org_item.isCollegeBased))
        conn.commit()
        
    except sqlite3.Error as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()
        
    return {"message": "Organization added successfully."}

# Create a event - FOR DOCS ONLY
@app.post("/create-event/")
def create_event(event_item: EventItem):
    conn = connect_db()
    cursor = conn.cursor()
    
    try:
        # Check if the organization exists
        cursor.execute("SELECT id FROM organizations WHERE id = ?", (event_item.org_id,))
        if cursor.fetchone() is None:
            raise HTTPException(status_code=404, detail="Organization not found.")
        
        # Insert the event into the events table
        cursor.execute(""" 
            INSERT INTO events (org_id, eventTitle, venue, month, day, year, startTime, endTime, notes) 
            VALUES (?,?,?,?,?,?,?,?,?)
        """, (
            event_item.org_id, 
            event_item.eventTitle, 
            event_item.venue,
            event_item.month,
            event_item.day,
            event_item.year, 
            event_item.startTime, 
            event_item.endTime, 
            event_item.notes
        ))
        conn.commit()
        
    except sqlite3.Error as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()
    
    return {"message": "Event added successfully"}

# Get the event and print out in `tsx` code.
@app.get("/get-events")
def get_organizations_and_events():
    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT o.id AS org_id, o.orgName, o.isCollegeBased, 
            e.id AS event_id, e.eventTitle, e.venue, e.startTime, e.endTime, e.notes,
            e.month, e.day, e.year
        FROM organizations o
        LEFT JOIN events e ON o.id = e.org_id
    """)

    events = cursor.fetchall()
    conn.close()

    orgs = {}
    for row in events:
        org_id = row["org_id"]
        if org_id not in orgs:
            orgs[org_id] = {
                "org_id": org_id,
                "orgName": row["orgName"],
                "isCollegeBased": row["isCollegeBased"],
                "events": []
            }
        if row["event_id"]:  
            orgs[org_id]["events"].append({
                "event_id": row["event_id"],
                "eventTitle": row["eventTitle"],
                "venue": row["venue"],
                "month": row["month"],
                "day": row["day"],
                "year": row["year"],
                "startTime": row["startTime"],
                "endTime": row["endTime"],
                "notes": row["notes"]
            })

    return list(orgs.values())

