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
    <div className="flex flex-col justify-center items-center w-[15rem] h-[20rem]">
      {/* Background image */}
      <div className={`${bgColor} rounded-lg max-h-[15rem]`}>
        <img src={imageSrc} alt="DevImage" className=" h-full py-[2rem]" />
      </div>
      {/* Core title */}
      <p className="font-content font-bold text-base sm:text-lg md:text-xl text-center">
        {devName}
      </p>
      {/* Core description */}
      <p className="font-content text-base sm:text-lg md:text-xl text-center">
        {devRole}
      </p>
    </div>
  );
};

export default About_DevsDisplay;
