import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendarComponent from "../components/CalendarComponent";
import Events_EventDetails from "../components/events/Events_EventDetails";
import Events_Carousel from "../components/events/Events_Carousel"; // Adjust the path if necessary

const Events = () => {
  // Get Date
  const today = new Date();
  // Get the day of the week (e.g., "Monday")
  const dayOfWeek = today.toLocaleString("en-US", { weekday: "long" });
  // Get the day number (e.g., 16 for the 16th of the month)
  const dayNumber = today.getDate();

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
          <div>
            <CalendarComponent />
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
