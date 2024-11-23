import sqlite3

# Establish a connection and create a cursor
conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# Events table
cursor.execute("""
    CREATE TABLE IF NOT EXISTS organizations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    orgName TEXT NOT NULL,
    isCollegeBased BOOLEAN NOT NULL
)
""")

# Organization table
cursor.execute(""" 
    CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    org_id INTEGER NOT NULL,
    eventTitle TEXT NOT NULL,
    venue TEXT NOT NULL,
    startTime TEXT,
    endTime TEXT,
    notes TEXT,
    FOREIGN KEY (org_id) REFERENCES organizations(id) ON DELETE CASCADE
)
""")
    

conn.commit()
conn.close()
print("Database initialized.")
