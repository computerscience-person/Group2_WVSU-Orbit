interface EventDetailsProps {
  eventName: string;
  eventPlace: string;
  orgName: string;
  orgLogo: string;
  day?: number;
  month?: number;
  year?: number;
}

// Helper function to convert month number to month name
const getMonthName = (month: number): string => {
  const months = [
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
  return months[month - 1]; // month is 1-based, so subtract 1 to access the correct month
};

const Events_EventDetails: React.FC<EventDetailsProps> = ({
  eventName,
  eventPlace,
  orgName,
  orgLogo,
  day,
  month,
  year,
}) => {
  return (
    <div className=" w-[40rem] h-[7rem] flex flex-row mb-5 items-center">
      <div className=" flex flex-row gap-x-[1.5rem] justify-center items-center">
        <div className=" font-leader flex flex-col items-center justify-center">
          {/* Check if day, month exist before rendering */}
          {month && (
            <p className="text-xs sm:text-sm md:text-base">
              {getMonthName(month)}
            </p>
          )}
          {day && <p className="sm:text-5xl md:text-6xl lg:text-7xl">{day}</p>}
        </div>

        <img src={orgLogo} className="h-[5rem] rounded-full shadow-lg" />

        {/* ORG EVENT DETAILS */}
        <div className="w-fit flex-wrap font-content flex flex-col break-words">
          <p className="font-bold text-xs sm:text-sm md:text-base break-words">
            {eventName}
          </p>
          <p className="font-bold text-xs sm:text-sm md:text-base break-words">
            by {orgName}
          </p>
          <p className="text-xs sm:text-sm md:text-base break-words">
            at {eventPlace}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events_EventDetails;
