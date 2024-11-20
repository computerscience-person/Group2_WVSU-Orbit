import React from "react";

interface DevsDisplayValues {
  imageSrc: string;
  bgColor: string;
  devName: string;
  devRole: string;
}

const DevsDisplay: React.FC<DevsDisplayValues> = ({
  imageSrc,
  devName,
  bgColor,
  devRole,
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Background image */}
      <div
        className=" sm:w-40 md:w-60 lg:w-60 sm:h-60 md:h-80 lg:h-80 mx-auto flex justify-center items-center rounded-lg"
        style={{ backgroundColor: bgColor }}
      >
        <img src={imageSrc} alt="DevImage" />
      </div>
      {/* Core title */}
      <p className="font-content sm:text-2xl md:text-3xl lg:text-3xl sm:mt-8 md:mt-8 lg:mt-8 text-center">
        {devName}
      </p>
      {/* Core description */}
      <p className="font-content sm:text-1xl md:text-2xl lg:text-2xl mt-4 text-center">
        {devRole}
      </p>
    </div>
  );
};

export default DevsDisplay;
