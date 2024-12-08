// api.ts
import axios from "axios";

export interface Organization {
  org_id: number;
  orgName: string;
  isCollegeBased: boolean;
  orgDetails: string;
  logoUrl: string;
  events: Event[];
}

export interface Event {
  organization: Organization;
  event_id: number;
  eventTitle: string;
  venue: string;
  month: number;
  day: number;
  year: number;
  orgName: string;
}

export interface Concerns {
  concerns_id: number;
  name: string | null;
  email: string;
  subject: string;
  message: string;
}

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
    const response = await axios.post(
      "http://localhost:8000/create-concerns/",
      {
        name,
        email,
        subject,
        message,
      }
    );
    return response.data.message; // Return the success message
  } catch (error) {
    console.error("Error posting concerns", error);
    throw error;
  }
};

export const fetchOrganizations = async (): Promise<Organization[]> => {
  try {
    const response = await axios.get("http://localhost:8000/get_orgs/");
    return response.data; // Return the list of organizations
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return [];
  }
};

export const fetchOrgById = async (
  orgId: number
): Promise<Organization | null> => {
  try {
    const response = await axios.get("http://localhost:8000/get-org-by-id/", {
      params: { org_id: orgId }, // Use orgId here as the variable holding the ID
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching organization by ID: ", error);
    return null;
  }
};

export const fetchSixRecentEventsOrgId = async (
  orgId: number
): Promise<Organization | null> => {
  try {
    const response = await axios.get(
      "http://localhost:8000/orgid-recent-events", // Ensure this matches backend route
      {
        params: { org_id: orgId }, // Ensure param name matches backend
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // Log specific HTTP error details
      console.error(
        `Error ${error.response.status}:`,
        error.response.data.detail || error.response.data
      );
    } else {
      console.error("Network or other error: ", error.message);
    }
    return null;
  }
};

export const fetchFutureEventsOrgId = async (
  orgId: number
): Promise<Organization | null> => {
  try {
    const response = await axios.get(
      "http://localhost:8000/get-future-events-by-id/", // Ensure this matches backend route
      {
        params: { org_id: orgId }, // Ensure param name matches backend
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // Log specific HTTP error details
      console.error(
        `Error ${error.response.status}:`,
        error.response.data.detail || error.response.data
      );
    } else {
      console.error("Network or other error: ", error.message);
    }
    return null;
  }
};
