// api.ts
import axios from "axios";

export interface Event {
  organization: any;
  event_id: number;
  eventTitle: string;
  venue: string;
  month: number;
  day: number;
  year: number;
  startTime: string | null;
  endTime: string | null;
  notes: string | null;
  orgName: string;
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

export const fetchRecentEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get("http://localhost:8000/recent-events/");
    return response.data;
  } catch (error) {
    console.error("Error fetching recent events: ", error);
    return [];
  }
};

// Fetch events by date
export const fetchEventsByDate = async (
  day: number,
  month: number,
  year: number
): Promise<Event[]> => {
  try {
    const response = await axios.get(`http://localhost:8000/get_date_event/`, {
      params: {
        day: day,
        month: month,
        year: year,
      },
    });
    return response.data.events; // Adjust to return only the events array
  } catch (error) {
    console.error("Error fetching events by date: ", error);
    return [];
  }
};
