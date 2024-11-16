interface EventDetailsProps {
  eventName: string;
  eventTime: string;
  eventPlace: string;
}

const Events_EventDetails: React.FC<EventDetailsProps> = ({
  eventName,
  eventTime,
  eventPlace,
}) => {
  return (
    <div className="flex flex-row space-x-5 items-center mb-5">
      <p className="font-content">ORG LOGO</p>

      {/* ORG EVENT DETAILS */}
      <div className="font-content">
        <p className="font-bold text-xs sm:text-sm md:text-base">{eventName}</p>
        <p className="text-xs sm:text-sm md:text-base">{eventTime}</p>
        <p className="text-xs sm:text-sm md:text-base">{eventPlace}</p>
      </div>
    </div>
  );
};

export default Events_EventDetails;
