import React from "react";
import eventimg from "../../assets/photos/cyb_pastevent_2.jpg"

interface RecapCardProps {
  orgName: string;
  eventName: string;
  url: string;
  bgColor: string;
  logoUrl: string;
}

const Events_RecapCard: React.FC<RecapCardProps> = ({
  orgName,
  eventName,
  url,
  bgColor,
  logoUrl,
}) => {
  const formattedUrl =
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

  return (
    <div
      className="w-4/12 rounded-3xl p-10 pt-5 flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${eventimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Color Overlay */}
      <div
        className={`absolute inset-0 ${bgColor} opacity-30`}
        style={{ zIndex: 1 }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <img
          src={logoUrl}
          className="h-[5rem] w-[5rem] rounded-full shadow-lg"
          alt={`${orgName} logo`}
        />
        <div className="flex-grow"></div>
        <div className="h-72 flex flex-col justify-end">
          <h1 className="text-lg sm:text-lg md:text-2xl text-white break-words">
            {orgName}
          </h1>
          <p className="font-bold text-lg sm:text-lg md:text-2xl text-white break-words">
            {eventName}
          </p>
        </div>
        <div className="mt-5">
          {/* Read Here Link */}
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
    </div>
  );
};

export default Events_RecapCard;
