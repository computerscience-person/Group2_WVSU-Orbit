import sqlite3

# Establish a connection and create a cursor
conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# Organizations table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS organizations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    orgName TEXT NOT NULL,
    isCollegeBased BOOLEAN NOT NULL
)""" )
# events table
cursor.execute(""" 
    CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    org_id INTEGER NOT NULL,
    eventTitle TEXT NOT NULL,
    venue TEXT NOT NULL,
    notes TEXT,
    month INTEGER NOT NULL,
    day INTEGER NOT NULL,
    year INTEGER NOT NULL,
    startTime INTEGER,
    endTime INTEGER,
    FOREIGN KEY (org_id) REFERENCES organizations(id) ON DELETE CASCADE
)
""" )
    
conn.commit()
conn.close()
print("Database initialized.")
