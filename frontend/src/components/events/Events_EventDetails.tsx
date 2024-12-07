interface EventDetailsProps {
  eventName: string;
  eventPlace: string;
  orgName: string;
  orgLogo: string;
}

const Events_EventDetails: React.FC<EventDetailsProps> = ({
  eventName,
  eventPlace,
  orgName,
  orgLogo,
}) => {
  return (
    <div className="w-[30rem] flex flex-row mb-5">
      <div className=" flex flex-row gap-x-[1.5rem]">
        <img src={orgLogo} className="h-[5rem] rounded-full shadow-lg" />

        {/* ORG EVENT DETAILS */}
        <div className=" w-fit flex-wrap font-content flex flex-col break-words">
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
