from typing import Optional, List
from pydantic import BaseModel, EmailStr

class EventItem(BaseModel):
    org_id: int
    eventTitle: str
    venue: str
    month: int
    day: int
    year: int
    startTime: Optional[str] = None
    endTime: Optional[str] = None
    notes: Optional[str] = None

class OrganizationItem(BaseModel):
    orgName: str
    isCollegeBased: bool

class ConcernsItem(BaseModel):
    name: str | None 
    email: EmailStr
    subject: str
    message: str
