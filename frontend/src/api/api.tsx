// api.ts
import axios from "axios";

export interface Event {
  event_id: number;
  eventTitle: string;
  venue: string;
  month: number;
  day: number;
  year: number;
  startTime: string | null;
  endTime: string | null;
  notes: string | null;
}

export interface Organization {
  org_id: number;
  orgName: string;
  isCollegeBased: boolean;
  events: Event[];
}

export const fetchOrganizationsAndEvents = async (): Promise<
  Organization[]
> => {
  try {
    const response = await axios.get("http://localhost:8000/get-events");
    return response.data;
  } catch (error) {
    console.error("Error fetching organizations and events:", error);
    return [];
  }
};
