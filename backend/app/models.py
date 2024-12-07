from typing import Optional, List
from pydantic import BaseModel, EmailStr

class EventItem(BaseModel):
    org_id: int
    eventTitle: str
    venue: str
    month: int
    day: int
    year: int

class OrganizationItem(BaseModel):
    orgName: str
    isCollegeBased: bool
    orgDetails: str
    logoUrl: str

class ConcernsItem(BaseModel):
    name: str | None 
    email: EmailStr
    subject: str
    message: str
