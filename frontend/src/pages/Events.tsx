import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Events_EventDetails from "../components/events/Events_EventDetails";
import Events_Carousel from "../components/events/Events_Carousel"; // Adjust the path if necessary

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    const isCurrentMonth = today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear;

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = isCurrentMonth && day === today.getDate(); // Check if the day is today
      const isSelected = selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear;

      days.push(
        <div
          key={day}
          className={`text-center cursor-pointer text-xs sm:text-sm md:text-base ${
            isToday ? "bg-sunshine rounded-full" : ""
          } ${isSelected ? "bg-tangerine font-bold rounded-full" : ""}`}
          onClick={() =>
            setSelectedDate(new Date(currentYear, currentMonth, day))}
        >
          {day}
        </div>,
      );
    }

    return days;
  };

  // Get values from selectedDate
  const dayOfWeek = selectedDate.toLocaleString("en-US", { weekday: "long" });
  const dayNumber = selectedDate.getDate();

  // Sample data for event details
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
  ];

  // Sample data for recap cards
  const cards = [
    {
      orgName: "Tech Enthusiasts",
      eventName: "Innovative Tech Talk 2024",
      url: "https://techconference.com",
      bgColor: "bg-pool",
    },
    {
      orgName: "Creative Minds",
      eventName: "Artistic Creations Expo",
      url: "https://artgallery.com",
      bgColor: "bg-palmleaf",
    },
    {
      orgName: "Youth Leaders",
      eventName: "Leadership Summit 2024",
      url: "https://leadershipsummit.com",
      bgColor: "bg-tangerine",
    },
    {
      orgName: "Health Advocates",
      eventName: "Wellness Workshop Series",
      url: "https://wellnessworkshop.com",
      bgColor: "bg-sorbet",
    },
  ];

  return (
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

        <div className="w-full flex flex-row justify-between px-40 py-10">
          {/* CALENDAR COMPONENT */}
          <div className="font-leader ">
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

          <div>
            <h2 className="font-leader text-xl sm:text-3xl md:text-5xl mb-4">
              {dayNumber}, {dayOfWeek}
            </h2>

            {eventDetails.map((detail, index) => (
              <Events_EventDetails
                key={index}
                eventName={detail.eventName}
                eventPlace={detail.eventPlace}
                eventTime={detail.eventTime}
              />
            ))}
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
        <Events_Carousel cards={cards} />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
