import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendarComponent from "../components/CalendarComponent";
import Events_EventDetails from "../components/events/Events_EventDetails";

const Events = () => {
  // Get Date
  const today = new Date();
  // Get the day of the week (e.g., "Monday")
  const dayOfWeek = today.toLocaleString("en-US", { weekday: "long" });
  // Get the day number (e.g., 16 for the 16th of the month)
  const dayNumber = today.getDate();

  return (
    <div className="bg-pool flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-col justify-center items-center space-y-4 my-16 sm:my-24 mx-4 sm:mx-8">
        <div className="flex flex-col items-center ">
          <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
            STAY IN THE ORBIT.
          </h1>
          <p className="font-content text-base sm:text-lg md:text-xl">
            Click on any date in the calendar to get started.
          </p>
        </div>

        <div className="w-full flex flex-row justify-between px-28 py-10">
          <div className="">
            <CalendarComponent />
          </div>

          <div>
            <h2 className="font-leader text-xl sm:text-3xl md:text-5xl mb-4">
              {dayNumber}, {dayOfWeek}
            </h2>

            <Events_EventDetails
              eventName="ORG NAME | Event Name Title Makeit Long"
              eventPlace="Thirf Floor, BINHI Building"
              eventTime="1:00 PM to 5:00 PM"
            />

            <Events_EventDetails
              eventName="ORG NAME | Event Name Title Makeit Long"
              eventPlace="Thirf Floor, BINHI Building"
              eventTime="1:00 PM to 5:00 PM"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
