// api.ts
import axios from "axios";

export interface Organization {
  org_id: number;
  orgName: string;
  isCollegeBased: boolean;
  events: Event[];
}

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

export interface Concerns {
  concerns_id: number;
  name: string | null;
  email: string;
  subject: string;
  message: string;
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

export const fetchFutureEvents = async (
  day: number,
  month: number,
  year: number
): Promise<Event[]> => {
  try {
    // Call the `/get_future_events/` endpoint with query parameters
    const response = await axios.get(
      "http://localhost:8000/get_future_events/",
      {
        params: { day: day, month: month, year: year },
      }
    );
    return response.data.events; // API returns a list of Event objects
  } catch (error) {
    console.error("Error fetching future events: ", error);
    return [];
  }
};

export const postConcerns = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<string> => {
  try {
    const response = await axios.post("http://localhost:8000/create-concerns/", {
      name,
      email,
      subject,
      message,
    });
    return response.data.message; // Return the success message
  } catch (error) {
    console.error("Error posting concerns", error);
    throw error;
  }
};
