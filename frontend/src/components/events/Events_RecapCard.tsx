import React from "react";
import img1 from "../../assets/photos/cyb_pastevent_1.jpg";
import img2 from "../../assets/photos/cyb_pastevent_2.jpg";
import img3 from "../../assets/photos/cyb_pastevent_3.jpg";
import img4 from "../../assets/photos/cyb1.jpg";
import img5 from "../../assets/photos/cyb2.jpg";
import img6 from "../../assets/photos/cyb3.jpg";
import img7 from "../../assets/photos/cyb4.jpg";
import img8 from "../../assets/photos/cyb5.jpg";
import img9 from "../../assets/photos/cyb6.jpg";
import img10 from "../../assets/photos/cyb7.jpg";
import img11 from "../../assets/photos/cyb8.jpg";
import img12 from "../../assets/photos/cyb9.jpg";
import img13 from "../../assets/photos/cyb10.jpg";
import img14 from "../../assets/photos/cyb11.jpg";
import img15 from "../../assets/photos/cyb12.jpg";


const eventImages = [img1, img2, img3, img4, img5, img6, img7, img8,
   img9, img10, img11, img12, img13, img14, img15];

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
  // Select a random background image
  const backgroundImage =
    eventImages[Math.floor(Math.random() * eventImages.length)];
  
  const formattedUrl =
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

  return (
    <div
      className="w-4/12 rounded-3xl p-10 pt-5 flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
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
