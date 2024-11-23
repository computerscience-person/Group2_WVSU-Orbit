from typing import Optional, List
from pydantic import BaseModel

class EventItem(BaseModel):
    org_id: int
    eventTitle: str
    venue: str
    startTime: Optional[str] = None
    endTime: Optional[str] = None
    notes: Optional[str] = None

class OrganizationItem(BaseModel):
    orgName: str
    isCollegeBased: bool