import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Events_EventDetails from "../components/events/Events_EventDetails";
import Events_Carousel from "../components/events/Events_Carousel";
import { fetchEventsByDate, Event } from "../api/api"; // Adjust the import path for the API function
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import "../styles.css";

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    setFirstDayOfMonth(firstDay.getDay());
    setDaysInMonth(daysInMonth);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    // Fetch events when selected date changes
    const fetchEvents = async () => {
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1; // month is 0-indexed, so add 1
      const year = selectedDate.getFullYear();
      const fetchedEvents = await fetchEventsByDate(day, month, year); // Use the fetch function
      setEvents(fetchedEvents); // Set the events in state
    };

    fetchEvents();
  }, [selectedDate]); // Trigger this effect whenever the selected date changes

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDays = () => {
    const days = [];
    const today = new Date(); // Get today's date
    const isCurrentMonth =
      today.getMonth() === currentMonth && today.getFullYear() === currentYear;

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = isCurrentMonth && day === today.getDate(); // Check if the day is today
      const isSelected =
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear;

      days.push(
        <div
          key={day}
          className={`text-center cursor-pointer text-xs sm:text-sm md:text-base ${
            isToday ? "bg-sunshine rounded-full" : ""
          } ${isSelected ? "bg-tangerine font-bold rounded-full" : ""}`}
          onClick={() =>
            setSelectedDate(new Date(currentYear, currentMonth, day))
          }
        >
          {day}
        </div>
      );
    }

    return days;
  };

  // Get values from selectedDate
  const dayOfWeek = selectedDate.toLocaleString("en-US", { weekday: "long" });
  const dayNumber = selectedDate.getDate();

  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true); // Add the `enter` animation
    return () => setIsVisible(false); // Clean up for `exit` animation
  }, [location]);


  return (
    <div className={`page-wrapper ${isVisible ? "enter" : "exit"}`}>
    <div className="bg-pool flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-col justify-center items-center space-y-4 my-8 sm:my-16 mx-4 sm:mx-8">
        {/* Stay in the orbit */}
        <div className="flex flex-col items-center">
          <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
            STAY IN THE ORBIT.
          </h1>
          <p className="font-content text-base sm:text-lg md:text-xl">
            Click on any date in the calendar to get started.
          </p>
        </div>

        <div className="w-full flex flex-row justify-center gap-x-[5rem] py-10">
          {/* CALENDAR COMPONENT */}
          <div className="font-leader flex-none w-[400px]">
            {/* Previous - Current Month - Next */}
            <div className="flex items-center justify-between font-bold text-xs sm:text-sm md:text-base">
              {/* Left arrow */}
              <button
                onClick={handlePreviousMonth}
                className="font-bold text-xs sm:text-sm md:text-base"
              >
                ←
              </button>
              <h2
                id="currentMonth"
                className="font-bold text-xl sm:text-3xl md:text-5xl px-6"
              >
                {monthNames[currentMonth]}
              </h2>
              {/* Right arrow */}
              <button
                onClick={handleNextMonth}
                className="font-bold text-xs sm:text-sm md:text-base"
              >
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 p-4" id="calendar">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center font-semibold">
                  {day}
                </div>
              ))}
              {renderDays()}
            </div>
          </div>

          {/* EVENT DETAILS SECTION */}
          <div className="flex-none w-[500px]">
            <h2 className="font-leader text-xl sm:text-3xl md:text-5xl mb-4">
              {dayNumber}, {dayOfWeek}
            </h2>

            {/* Display fetched events dynamically */}
            <div>
              {events.length > 0 ? (
                events.map((event, index) => (
                  <Link
                    to={`/orgpage/${event.organization.org_id}`} // Pass org_id as part of the route
                  >
                    <Events_EventDetails
                      eventName={event.eventTitle}
                      eventPlace={event.venue}
                      orgName={event.organization.orgName}
                      orgLogo={event.organization.logoUrl}
                    />
                  </Link>
                ))
              ) : (
                <p className="font-content text-base sm:text-lg md:text-xl">
                  No events for this date.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ORBIT RECAP */}
      <div className="bg-white py-12 flex flex-col">
        <div className="flex flex-col items-center px-56">
          <h1 className="font-leader text-xl sm:text-3xl md:text-5xl mb-4">
            ORBIT RECAP
          </h1>
          <p className="font-content text-base sm:text-lg md:text-xl text-center">
            Dive into the memorable moments, achievements, and stories from past
            WVSU events. Relive the excitement and see how WVSU organizations
            continue to make an impact.
          </p>
        </div>
        {/* Carousel */}
        <Events_Carousel />
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default Events;
