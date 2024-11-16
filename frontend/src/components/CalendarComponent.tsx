/* 
Source code:
https://www.creative-tim.com/twcomponents/component/calendar-1
*/

import React, { useState, useEffect } from "react";

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);

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
    const isCurrentMonth =
      today.getMonth() === currentMonth && today.getFullYear() === currentYear;

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = isCurrentMonth && day === today.getDate(); // Check if the day is today
      days.push(
        <div
          key={day}
          className={`text-center cursor-pointer text-xs sm:text-sm md:text-base ${
            isToday ? "bg-sunshine rounded-full" : ""
          }`}
          onClick={() =>
            alert(
              `Selected Date: ${day} ${monthNames[currentMonth]} ${currentYear}`
            )
          }
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="font-leader">
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
  );
};

export default CalendarComponent;
