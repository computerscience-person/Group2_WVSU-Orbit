interface EventDetailsProps {
  eventName: string;
  eventPlace: string;
  orgName: string;
}

const Events_EventDetails: React.FC<EventDetailsProps> = ({
  eventName,
  eventPlace,
  orgName,
}) => {
  return (
    <div className="w-[400px] flex flex-row space-x-5 items-start mb-5">
      {/* ORG EVENT DETAILS */}
      <div className="font-content flex flex-col">
        <p className="font-bold text-xs sm:text-sm md:text-base truncate">
          {eventName}
        </p>
        <p className="font-bold text-xs sm:text-sm md:text-base truncate">
          {orgName}
        </p>
        <p className="text-xs sm:text-sm md:text-base">{eventPlace}</p>
      </div>
    </div>
  );
};

export default Events_EventDetails;
