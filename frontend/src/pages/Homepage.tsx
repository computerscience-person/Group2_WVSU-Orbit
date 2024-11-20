import React, { useState, useEffect } from "react"
import Nav from "../components/Nav.tsx"
import Footer from "../components/Footer.tsx";
import { Link } from "react-router-dom"
import Events_EventDetails from "../components/events/Events_EventDetails.tsx";
const Homepage = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const updateDims = () => {
      setWidth(window.innerWidth) 
    }
    window.addEventListener("resize", updateDims)
    return () => window.removeEventListener("resize", updateDims)
  }, [])
  const rotCenter = width/2
  const eventDetails = [
    {
      eventName: "Tech Enthusiasts | Innovative Tech Talk 2024",
      eventPlace: "Third Floor, BINHI Building",
      eventTime: "1:00 PM to 5:00 PM",
    },
    {
      eventName: "Youth Leaders | Leadership Summit 2024",
      eventPlace: "Auditorium, Main Building",
      eventTime: "10:00 AM to 3:00 PM",
    },
  ]
  return (
    <>
      <Nav />
      {/* greeter screen */}
      <div className="h-[75vh] bg-sorbet flex flex-wrap flex-col content-center justify-center">
        <div 
          className="max-h-[60dvh] w-[60vw] flex flex-col gap-4 justify-center text-center"
        >
          <h1 className="text-6xl font-leader uppercase">
            Welcome To Your One-Stop Org Hub
          </h1>
          <p className="mx-16 text-lg font-content">
            Explore and engage with the vibrant community of West Visayas State University's
            organizations <strong><em>all in one orbit</em></strong>.
          </p>
        </div>
      </div>
      {/* cute divider thing */}
      <div className="bg-sorbet">
        <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
          <svg className="fill-pool">
            <rect x="-10" y="75" width="115%" height="50" transform={`rotate(2, ${rotCenter + 10}, 100)`} />
          </svg>
          <svg className="fill-tangerine">
            <rect x="-10" y="75" width="115%" height="50" transform={`rotate(-2, ${rotCenter + 10}, 100)`} />
          </svg>
        </svg>
      </div>
      {/* pitch them up*/}
      <div className="bg-sorbet flex flex-wrap flex-col content-center justify-center">
        <div className="w-[70vw] flex flex-col justify-center text-center pb-12">
          <h2 className="text-6xl font-leader pb-12">
            Explore the Orbit.
          </h2>
          <p className="text-lg font-content">
            WVSU-Orbit is a Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. 
          </p>
          <p className="text-lg font-content">
            <strong>
              See types of organizations below.
            </strong>
          </p>
        </div>
        <div className="w-[70vw] flex flex-row justify-center">
          <div className="w-[50%]">
            {/* TODO: Insert WVSU Logo HERE */}
          </div>
          <div className="w-[50%] py-2 flex flex-wrap flex-column">
            <h3 className="w-full text-4xl font-leader pb-4">
              University-Based
            </h3>
            <p className="font-content text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <Link to="/orgs" className="font-content text-lg py-2">
              <strong><em>See More</em></strong>
            </Link>
          </div>
        </div>
        <div className="w-[70vw] py-2 flex flex-row justify-center">
          <div className="w-[50%] flex flex-wrap flex-column">
            <h3 className="w-full text-4xl text-right font-leader pb-4">
              College-Based
            </h3>
            <p className="text-right font-content text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <Link to="/orgs" className="w-full text-right font-content py-2">
              <strong><em>See More</em></strong>
            </Link>
          </div>
          <div className="w-[50%]">
            {/* TODO: Insert WVSU Logo HERE */}
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
          {eventDetails.map((detail, idx) => (
            <Events_EventDetails 
              key={idx}
              eventName={detail.eventName}
              eventPlace={detail.eventPlace}
              eventTime={detail.eventTime}
            />)
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
    </>
  );
};

export default Homepage;
