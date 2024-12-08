export interface WhatsAheadCardProps {
  eventName: string;
  month: number;
  day: number;
  year: number;
  location: string;
}

// Helper function to format the date
const formatDate = (month: number, day: number, year: number): string => {
  const date = new Date(year, month - 1, day);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options); // Use the default locale
};

const Organizations_WhatsAheadCard: React.FC<WhatsAheadCardProps> = ({
  eventName,
  month,
  day,
  year,
  location,
}) => {
  return (
    <div className="bg-sorbet h-[65vh] px-[3rem] gap-y-[1.5rem] rounded-3xl flex justify-center flex-col text-center">
      <h1 className="font-content font-extrabold text-3xl sm:text-5xl md:text-6xl">
        {eventName || "Future Event Name"}
      </h1>
      <div className="flex justify-between">
        <p className="font-content text-base sm:text-lg md:text-xl">
          {formatDate(month, day, year) || "March 31, 2025"}
        </p>
        <p className="font-content text-base sm:text-lg md:text-xl">
          {location || "WVSU-BINHI"}
        </p>
      </div>
    </div>
  );
};

export default Organizations_WhatsAheadCard;
