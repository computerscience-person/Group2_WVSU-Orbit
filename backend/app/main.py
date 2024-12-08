# main.py (backend)
from typing import List
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware
import sqlite3
from app.models import EventItem, OrganizationItem, ConcernsItem
from pathlib import Path
from dotenv import load_dotenv
import os
from datetime import datetime

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
@app.get("/read-items")
def read_items():
    conn = connect_db()
    cursor = conn.cursor()

    # SQL query to fetch organizations and their associated events
    cursor.execute("""
        SELECT o.id AS org_id, o.orgName, o.isCollegeBased, o.orgDetails, o.logoUrl,
            e.id AS event_id, e.eventTitle, e.venue, e.month, e.day, e.year
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
                "orgDetails": row["orgDetails"],
                "logoUrl": row["logoUrl"],
                "events": []
            }
        if row["event_id"]:  # If there is an event associated with this organization
            orgs[org_id]["events"].append({
                "event_id": row["event_id"],
                "eventTitle": row["eventTitle"],
                "venue": row["venue"],
                "month": row["month"],
                "day": row["day"],
                "year": row["year"]
            })

    return list(orgs.values())

# Get all organizations with no events - For Organizations page
@app.get("/get_orgs/")
def get_organizations():
    """ 
    Returns all organization details without the events
    """
    conn = connect_db()
    conn.row_factory = sqlite3.Row  # Enable dictionary-like access to rows
    cursor = conn.cursor()

    try:
        # Fetch all organizations
        cursor.execute("""
            SELECT id AS org_id, orgName, isCollegeBased, orgDetails, logoUrl
            FROM organizations
        """)
        organizations = cursor.fetchall()
    finally:
        conn.close()

    # Format the results as a list of dictionaries
    orgs_list = [
        {
            "org_id": row["org_id"],
            "orgName": row["orgName"],
            "isCollegeBased": row["isCollegeBased"],
            "orgDetails": row["orgDetails"],
            "logoUrl": row["logoUrl"]
        }
        for row in organizations
    ]

    return orgs_list

from fastapi import HTTPException

@app.get("/get-org-by-id/")
def get_org_by_id(org_id: int):
    """ Returns an org and its entire details based on ID """
    conn = connect_db()
    conn.row_factory = sqlite3.Row  # Enable dictionary-like access to rows
    cursor = conn.cursor()

    try:
        cursor.execute("""
            SELECT id AS org_id, orgName, isCollegeBased, orgDetails, logoUrl
            FROM organizations
            WHERE id = ?
        """, (org_id,))
        org = cursor.fetchone()

        if not org:
            raise HTTPException(status_code=404, detail="Organization not found.")

        cursor.execute("""
            SELECT id AS event_id, eventTitle, venue, month, day, year
            FROM events
            WHERE org_id = ?
        """, (org_id,))
        events = cursor.fetchall()

    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()

    org_details = {
        "org_id": org["org_id"],
        "orgName": org["orgName"],
        "isCollegeBased": org["isCollegeBased"],
        "orgDetails": org["orgDetails"],
        "logoUrl": org["logoUrl"],
        "events": [
            {
                "event_id": event["event_id"],
                "eventTitle": event["eventTitle"],
                "venue": event["venue"],
                "month": event["month"],
                "day": event["day"],
                "year": event["year"]
            }
            for event in events
        ]
    }

    return org_details


@app.get("/orgid-recent-events")
def get_orgid_recent_events(org_id: int):
    """ 
    Get an organization's details and its 6 most recent events by org_id.

    Args:
        org_id (int): The ID of the organization whose details and recent events are being retrieved.

    Returns:
        list: A list of dictionaries, each containing event details along with the organization's details.
    """
    conn = connect_db()
    conn.row_factory = sqlite3.Row  # Enable dictionary-like access to rows
    cursor = conn.cursor()

    try:
        # Query to fetch the organization's details
        cursor.execute(
            """
            SELECT id AS org_id, orgName, isCollegeBased, orgDetails, logoUrl
            FROM organizations
            WHERE id = ?
            """,
            (org_id,)
        )
        org_details = cursor.fetchone()

        if not org_details:
            raise HTTPException(status_code=404, detail="Organization not found.")

        # Query to fetch the 6 most recent events for the given org_id
        cursor.execute(
            """
            SELECT id AS event_id, eventTitle, venue, month, day, year
            FROM events
            WHERE org_id = ?
            ORDER BY year DESC, month DESC, day DESC
            LIMIT 6
            """,
            (org_id,)
        )
        recent_events = cursor.fetchall()

    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()

    # Format the response to include event details along with the organization details in each event
    formatted_response = [
        {
            "event_id": event["event_id"],
            "eventTitle": event["eventTitle"],
            "venue": event["venue"],
            "month": event["month"],
            "day": event["day"],
            "year": event["year"],
            "orgName": org_details["orgName"],
            "organization": {
                "org_id": org_details["org_id"],
                "orgName": org_details["orgName"],
                "isCollegeBased": org_details["isCollegeBased"],
                "orgDetails": org_details["orgDetails"],
                "logoUrl": org_details["logoUrl"],
            },
        }
        for event in recent_events
    ]

    return formatted_response


@app.get("/get-future-events-by-id/")
def get_orgid_future_events(org_id: int):
    """
    Get an organization's details and its future events by org_id.

    Args:
        org_id (int): The ID of the organization whose details and future events are being retrieved.

    Returns:
        dict: A dictionary containing the organization's details and a list of its future events.
    """
    conn = connect_db()
    conn.row_factory = sqlite3.Row  # Enable dictionary-like access to rows
    cursor = conn.cursor()

    try:
        # Query to fetch the organization's details
        cursor.execute(
            """
            SELECT id AS org_id, orgName, isCollegeBased, orgDetails, logoUrl
            FROM organizations
            WHERE id = ?
            """,
            (org_id,)
        )
        org_details = cursor.fetchone()

        if not org_details:
            raise HTTPException(status_code=404, detail="Organization not found.")

        # Get the current date
        today = datetime.today()

        # Query to fetch the organization's future events
        cursor.execute(
            """
            SELECT id AS event_id, eventTitle, venue, month, day, year
            FROM events
            WHERE org_id = ? AND (year > ? OR (year = ? AND (month > ? OR (month = ? AND day >= ?))))
            ORDER BY year, month, day
            """,
            (org_id, today.year, today.year, today.month, today.month, today.day)
        )
        future_events = cursor.fetchall()

    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()

    # Format the organization's details with its future events
    org_with_future_events = {
        "org_id": org_details["org_id"],
        "orgName": org_details["orgName"],
        "isCollegeBased": org_details["isCollegeBased"],
        "orgDetails": org_details["orgDetails"],
        "logoUrl": org_details["logoUrl"],
        "future_events": [
            {
                "event_id": event["event_id"],
                "eventTitle": event["eventTitle"],
                "venue": event["venue"],
                "month": event["month"],
                "day": event["day"],
                "year": event["year"]
            }
            for event in future_events
        ]
    }

    return org_with_future_events


# Creating organizations - FOR DOCS ONLY
@app.post("/create-organization/")
def create_organization(org_item: OrganizationItem):
    conn = connect_db()
    cursor = conn.cursor()
    
    try:
        # Insert organization data into DB table
        cursor.execute(""" 
                    INSERT INTO organizations (orgName, isCollegeBased, orgDetails, logoUrl) VALUES (?, ?, ?, ?)
                    """, (org_item.orgName, org_item.isCollegeBased, org_item.orgDetails, org_item.logoUrl))
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
            INSERT INTO events (org_id, eventTitle, venue, month, day, year) 
            VALUES (?,?,?,?,?,?)
        """, (
            event_item.org_id,
            event_item.eventTitle, 
            event_item.venue,
            event_item.month,
            event_item.day,
            event_item.year
        ))
        conn.commit()
        
    except sqlite3.Error as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()
    
    return {"message": "Event added successfully"}


@app.get("/recent-events/")
def get_recent_events():
    conn = connect_db()
    cursor = conn.cursor()

    try:
        # Fetch the 6 most recent events globally
        cursor.execute("""
          SELECT e.id AS event_id, e.eventTitle, e.venue, 
                   e.month, e.day, e.year, 
                   o.id AS org_id, o.orgName, o.isCollegeBased, 
                   o.orgDetails, o.logoUrl
            FROM events e
            JOIN organizations o ON e.org_id = o.id
            ORDER BY e.year DESC, e.month DESC, e.day DESC
            LIMIT 6
        """)
        events = cursor.fetchall()
    finally:
        conn.close()

    # Organize the results into a list of dictionaries
    recent_events = [
        {
            "event_id": row["event_id"],
            "eventTitle": row["eventTitle"],
            "venue": row["venue"],
            "month": row["month"],
            "day": row["day"],
            "year": row["year"],
            "orgName": row["orgName"],
            "organization": {
                    "org_id": row["org_id"],
                    "orgName": row["orgName"],
                    "isCollegeBased": row["isCollegeBased"],
                    "orgDetails": row["orgDetails"],
                    "logoUrl": row["logoUrl"]
                }
        }
        for row in events
    ]

    return recent_events

@app.get("/get_date_event/")
def get_event_date(day: int, month: int, year: int):
    """
    Returns all available events for the specified date.
    
    Args:
        day (int): The day of the event.
        month (int): The month of the event.
        year (int): The year of the event.
    
    Returns:
        List of dictionaries containing events for the specified date.
    """
    conn = connect_db()
    cursor = conn.cursor()

    try:
        # Query to find events on the specific date
        cursor.execute(
            """
            SELECT e.id AS event_id, e.eventTitle, e.venue, 
            o.id AS org_id, o.orgName, o.isCollegeBased, o.orgDetails, o.logoUrl
            FROM events e
            INNER JOIN organizations o ON e.org_id = o.id
            WHERE e.day = ? AND e.month = ? AND e.year = ?
            """,
            (day, month, year),
        )

        results = cursor.fetchall()
        events = [
            {
                "event_id": row["event_id"],
                "eventTitle": row["eventTitle"],
                "venue": row["venue"],
                "organization": {
                    "org_id": row["org_id"],
                    "orgName": row["orgName"],
                    "isCollegeBased": row["isCollegeBased"],
                    "orgDetails": row["orgDetails"],
                    "logoUrl": row["logoUrl"]
                },
            }
            for row in results
        ]

        return {"events": events}

    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()
        
@app.get("/get_future_events/")
def get_future_events(day: int, month: int, year: int):
    """
    Returns the next three nearest events after the specified date.

    Args:
        day (int): The day of the starting date.
        month (int): The month of the starting date.
        year (int): The year of the starting date.

    Returns:
        A dictionary with the next three nearest events.
    """
    conn = connect_db()
    conn.row_factory = sqlite3.Row  # Enable dictionary-like access to rows
    cursor = conn.cursor()

    try:
        # Query to find the next three nearest events after the specified date
        cursor.execute(
            """
            SELECT e.id AS event_id, e.eventTitle, e.venue, e.month, e.day, e.year, o.id AS org_id, 
            o.orgName, o.isCollegeBased, o.orgDetails, o.logoUrl
            FROM events e
            INNER JOIN organizations o ON e.org_id = o.id
            WHERE (e.year > ?)
               OR (e.year = ? AND e.month > ?)
               OR (e.year = ? AND e.month = ? AND e.day > ?)
            ORDER BY e.year, e.month, e.day
            LIMIT 3
            """,
            (year, year, month, year, month, day),
        )

        results = cursor.fetchall()
        future_events = [
            {
                "event_id": row["event_id"],
                "eventTitle": row["eventTitle"],
                "venue": row["venue"],
                "month": row["month"],
                "day": row["day"],
                "year": row["year"],
                "organization": {
                    "org_id": row["org_id"],
                    "orgName": row["orgName"],
                    "isCollegeBased": row["isCollegeBased"],
                    "orgDetails": row["orgDetails"],
                    "logoUrl": row["logoUrl"]
                },
            }
            for row in results
        ]

        return {"events": future_events}

    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()

@app.get("/read-concerns")
def read_concerns():
    """
    Returns all concerns for documentation purposes.
    """
    conn = connect_db()
    try:
        cursor = conn.cursor()

        # SQL query to fetch concerns
        cursor.execute("""
            SELECT c.id AS concerns_id, c.name, c.email, c.subject, c.message
            FROM concerns c
        """)

        concerns = cursor.fetchall()

        # Process the rows into a list of dictionaries
        result = [
            {
                "concerns_id": row["concerns_id"],
                "name": row["name"],
                "email": row["email"],
                "subject": row["subject"],
                "message": row["message"],
            }
            for row in concerns
        ]

        return {"concerns": result}

    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()

# Creating organizations - FOR DOCS ONLY
@app.post("/create-concerns/")
def create_concerns(concerns_item: ConcernsItem):
    print("Received data:", concerns_item)
    conn = connect_db()
    cursor = conn.cursor()
    
    try:
        # Insert organization data into DB table
        cursor.execute(""" 
                    INSERT INTO concerns (name, email, subject, message) VALUES (?, ?, ?, ?)
                    """, (concerns_item.name, concerns_item.email, concerns_item.subject, concerns_item.message))
        conn.commit()
    except sqlite3.Error as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()
        
    return {"message": "Concern added successfully."}
