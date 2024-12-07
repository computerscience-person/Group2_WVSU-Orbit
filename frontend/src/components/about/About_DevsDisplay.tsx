import React from "react";

interface DevsDisplayValues {
  imageSrc: string;
  bgColor: string;
  devName: string;
  devRole: string;
}

const About_DevsDisplay: React.FC<DevsDisplayValues> = ({
  imageSrc,
  devName,
  bgColor,
  devRole,
}) => {
  return (
    <div className="flex flex-col justify-center items-center sm:w[8rem] md:w-[13rem] lg:w-[13rem] sm:h-[15rem] md:h-[20rem] lg:h-[20rem] whitespace-nowrap relative">
      {/* Background image */}
      <div
        className={`${bgColor} rounded-lg sm:max-h-[10rem] md:max-h-[13rem] lg:max-h-[13rem] absolute inset-0 z-0 mt-11`}
      ></div>
      <img
        src={imageSrc}
        alt="DevImage"
        className="sm:mt-[1.2rem] md:mt-[0rem]  sm:h-[12rem] md:h-[15rem] lg:h-[15rem] z-10 relative"
      />
      {/* Core title */}
      <p className="font-content font-bold text-base sm:text-md md:text-xl text-center z-10 relative">
        {devName}
      </p>
      {/* Core description */}
      <p className="font-content text-base sm:text-sm md:text-xl text-center z-10 relative">
        {devRole}
      </p>
    </div>
  );
};

export default About_DevsDisplay;
