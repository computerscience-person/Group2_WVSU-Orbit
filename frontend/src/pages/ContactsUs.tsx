import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
/* 

SAMPLE BACKEND

import { fetchOrganizationsAndEvents, Organization } from "../api/api";
import { useEffect, useState } from "react";

*/
const ContactsUs = () => {
  /* 
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  useEffect(() => {
    const loadOrganizations = async () => {
      const data = await fetchOrganizationsAndEvents();
      setOrganizations(data);
    };

    loadOrganizations();
  }, []);

 */
  return (
    <div className="bg-sunshine h-full flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-col justify-center items-center space-y-4 my-16 sm:my-24 mx-4 sm:mx-8">
        <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
          CONCERNS?
        </h1>
        <p className="font-content text-base sm:text-lg md:text-xl">
          If you have issues or concerns, feel free to reach us out!
        </p>
        <button className="bg-white font-content font-bold w-28 sm:w-32 h-10 rounded-2xl">
          Answer Form
        </button>
      </div>
      {/* 
      events and orgs code to display them
      <div className="my-16">
        {organizations.length > 0 ? (
          organizations.map((org) => (
            <div key={org.org_id} className="mb-8">
              <h2 className="font-leader text-xl sm:text-2xl">{org.orgName}</h2>
              <p>
                {org.isCollegeBased
                  ? "College-based Organization"
                  : "Community-based Organization"}
              </p>
              <ul>
                {org.events.length > 0 ? (
                  org.events.map((event) => (
                    <li key={event.event_id}>
                      <h3 className="font-content text-lg">
                        {event.eventTitle}
                      </h3>
                      <p>{event.venue}</p>
                      <p>
                        {event.month}/{event.day}/{event.year} -{" "}
                        {event.startTime} to {event.endTime}
                      </p>
                      <p>{event.notes}</p>
                    </li>
                  ))
                ) : (
                  <p>No upcoming events.</p>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>Loading organizations...</p>
        )}
      </div> */}

      {/* Contact Form Section */}
      <div className="bg-white flex justify-center w-full top-0 rounded-t-[20%] sm:rounded-t-[30%] lg:rounded-t-[400px]">
        <div className="bg-sunshine w-full sm:w-auto py-6 px-6 sm:px-8 h-auto justify-start rounded-[50px] space-y-4 sm:space-y-6 my-16 sm:my-36  sm:shadow-md md:shadow-lg">
          <div>
            <p className="font-leader text-sm sm:text-base">Name (Optional):</p>
            <input
              type="text"
              placeholder="e.g. Jeno Lee"
              className="mt-2 p-2 border rounded-lg w-full sm:w-80"
            />
          </div>

          <div>
            <p className="font-leader text-sm sm:text-base">Email:</p>
            <input
              type="text"
              placeholder="e.g. john.doe@gmail.com"
              className="mt-2 p-2 border rounded-lg w-full sm:w-80"
            />
          </div>

          <div>
            <p className="font-leader text-sm sm:text-base">Subject:</p>
            <input
              type="text"
              placeholder="e.g. Recommendation"
              className="mt-2 p-2 border rounded-lg w-full sm:w-80"
            />
          </div>

          <div>
            <p className="font-leader text-sm sm:text-base">Message:</p>
            <textarea
              className="mt-2 p-2 border rounded-lg w-full sm:w-80 h-32 sm:h-40 resize-none"
              placeholder="Enter your message here"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-white font-content font-bold w-28 sm:w-32 h-10 rounded-2xl">
              SEND
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactsUs;
