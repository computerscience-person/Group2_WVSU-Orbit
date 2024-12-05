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
    <div className="flex flex-col justify-center items-center w-[13rem] h-[20rem] whitespace-nowrap relative">
      {/* Background image */}
      <div
        className={`${bgColor} rounded-lg max-h-[13rem] absolute inset-0 z-0 mt-11`}
      ></div>
      <img src={imageSrc} alt="DevImage" className="h-[15rem] z-10 relative" />
      {/* Core title */}
      <p className="font-content font-bold text-base sm:text-lg md:text-xl text-center z-10 relative">
        {devName}
      </p>
      {/* Core description */}
      <p className="font-content text-base sm:text-lg md:text-xl text-center z-10 relative">
        {devRole}
      </p>
    </div>
  );
};

export default About_DevsDisplay;
