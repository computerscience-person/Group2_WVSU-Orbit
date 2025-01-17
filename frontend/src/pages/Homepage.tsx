import React, { useEffect, useState } from "react";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";
import { Link } from "react-router-dom";
import Events_EventDetails from "../components/events/Events_EventDetails.tsx";
import wvsuLogo from "../assets/logos/wvsu_logo.png";
import cictLogo from "../assets/logos/wvsu_cict.png";
import { fetchFutureEvents, Event } from "../api/api";
import { useLocation } from "react-router-dom";
import "../styles.css";

const Homepage = () => {
  const [width, setWidth] = useState(globalThis.innerWidth);
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    const updateDims = () => {
      setWidth(globalThis.innerWidth);
    };
    globalThis.addEventListener("resize", updateDims);
    return () => globalThis.removeEventListener("resize", updateDims);
  }, []);
  const rotCenter = width / 2;

  useEffect(() => {
    const fetchFutureEventsDetails = async () => {
      const newDate = new Date();
      const date = newDate.getDate();
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();
      const fetchedFutureEvents = await fetchFutureEvents(date, month, year);
      setEvents(fetchedFutureEvents);
    };
    fetchFutureEventsDetails();
  }, []);

  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Add the `enter` animation
    return () => setIsVisible(false); // Clean up for `exit` animation
  }, [location]);

  return (
    <>
    <div className={`page-wrapper ${isVisible ? "enter" : "exit"}`}>
      {/* greeter screen */}
      <div className="h-[150vh] bg-sorbet bg-[url(/src/assets/students-jumping-college.jpg)] bg-blend-soft-light bg-cover bg-no-repeat flex flex-wrap flex-col justify-center items-center">
        <div className="w-full bg-transparent">
          <Nav />
        </div>
        <div className="w-[60vw] flex flex-col grow gap-4 justify-center text-center">
          <h1 className="text-6xl font-leader uppercase">
            Welcome To Your One-Stop Org Hub
          </h1>
          <p className="mx-16 text-lg font-content">
            Explore and engage with the vibrant community of West Visayas State
            University's organizations{" "}
            <strong>
              <em>all in one orbit</em>
            </strong>
            .
          </p>
        </div>
        <div className="w-full bg-gradient-to-b from-transparent to-sorbet">
          <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
            <svg className="fill-pool">
              <rect
                x="-10"
                y="75"
                width="115%"
                height="50"
                transform={`rotate(2, ${rotCenter + 10}, 100)`}
              />
            </svg>
            <svg className="fill-sunshine">
              <rect
                x="-10"
                y="75"
                width="115%"
                height="50"
                transform={`rotate(-2, ${rotCenter + 10}, 100)`}
              />
            </svg>
          </svg>
        </div>
      </div>
      {/* cute divider thing */}
      {/* pitch them up*/}
      <div className="bg-sorbet flex flex-wrap flex-col content-center justify-center pb-8">
        <div className="w-[70vw] flex flex-col justify-center text-center pb-10">
          <h2 className="text-6xl font-leader pb-12">Explore the Orbit.</h2>
          <p className="text-lg font-content">
            WVSU Orbit is your ultimate platform to discover, connect, and
            engage with student organizations and events at West Visayas State
            University, providing a user-friendly directory and up-to-date
            calendar to help you find your community, stay involved, and make
            the most of your college experience.
          </p>
          <p className="text-lg font-content">
            <strong>See types of organizations below.</strong>
          </p>
        </div>

        <div className="w-[70vw] py-2 flex flex-row justify-center space-x-8 pb-8">
          <div className="w-[50%] flex justify-end items-center">
            <img src={wvsuLogo} className="h-[18rem]" />
          </div>
          <div className="w-[50%] py-10 flex flex-wrap flex-column">
            <h3 className="w-full text-4xl font-leader pb-4">
              University-Based
            </h3>
            <p className="font-content text-lg">
              Explore a variety of university-wide organizations that offer
              exciting events, leadership opportunities, and ways to make a
              difference at WVSU
            </p>
            <Link to="/orgs" className="font-content text-lg py-2">
              <strong>
                <em>See More</em>
              </strong>
            </Link>
          </div>
        </div>

        <div className="w-[70vw] py-2 flex flex-row justify-center space-x-8 pb-8">
          <div className="w-[50%] flex flex-wrap flex-column">
            <h3 className="w-full text-4xl text-right font-leader pb-4">
              College-Based
            </h3>
            <p className="text-right font-content text-lg">
              Discover college-based organizations that provide a supportive
              space for professional growth, academic collaboration, and
              personal development.
            </p>
            <Link to="/orgs" className="w-full text-right font-content py-2">
              <strong>
                <em>See More</em>
              </strong>
            </Link>
          </div>

          <div className="w-[50%]">
            <img src={cictLogo} className="h-[18rem]" />
          </div>
        </div>
      </div>
      <div className="p-12 flex flex-wrap flex-col content-center justify-center">
        <div className="flex flex-wrap flex-col content-center justify-center">
          <h2 className="text-6xl text-center font-leader">What's Next?</h2>
          <p className="p-8 text-xl font-content text-center">
            Worry not! We've always got you covered at the Orbit.
          </p>
        </div>
        <div>
          {events.length === 0 ? (
            <p className="text-center font-content text-lg pb-8">
              WVSU is quiet right now. No events found.
            </p>
          ) : (
            events.map((event, idx) => (
              <Link
                to={`/orgpage/${event.organization.org_id}`} // Pass org_id as part of the route
                key={idx}
              >
                <Events_EventDetails
                  key={idx}
                  eventName={event.eventTitle}
                  eventPlace={event.venue}
                  orgName={event.organization.orgName}
                  orgLogo={event.organization.logoUrl}
                  day={event.day}
                  month={event.month}
                />
              </Link>
            ))
          )}
        </div>
        <div>
          <Link to="/events" className="font-content text-lg py-2">
            <em>See more at the events page.</em>
          </Link>
        </div>
      </div>
      <div className="bg-sorbet">
        <Footer />
      </div>
      </div>
    </>
  );
};

export default Homepage;
