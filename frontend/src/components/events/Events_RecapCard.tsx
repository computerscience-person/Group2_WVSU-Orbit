import React from "react";

interface RecapCardProps {
  orgName: string;
  eventName: string;
  url: string;
  bgColor: string;
}

const Events_RecapCard: React.FC<RecapCardProps> = ({
  orgName,
  eventName,
  url,
  bgColor,
}) => {
  const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;

  return (
    <div
      className={`${bgColor} font-content w-4/12 rounded-3xl p-10 pt-64 flex flex-col`}
    >
      <div className="flex-grow"></div>
      <div className="flex flex-col">
        <h1 className="text-lg sm:text-lg md:text-2xl break-words">
          {orgName}
        </h1>
        <p className="font-bold text-lg sm:text-lg md:text-2xl break-words">
          {eventName}
        </p>
      </div>
      <div className="mt-5">
        <div className="bg-white shadow-lg w-full rounded-full h-12 px-4 flex items-center justify-between">
          <a
            href={formattedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold"
          >
            Read Here
          </a>
          <a
            href={formattedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl text-blue-500"
          >
            →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events_RecapCard;
