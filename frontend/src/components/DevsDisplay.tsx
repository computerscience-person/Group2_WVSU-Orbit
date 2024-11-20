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
        className="w-[35vh] h-[45vh] mx-auto mt-[-6vh] flex justify-center items-center rounded-lg"
        style={{ backgroundColor: bgColor }}
      >
        <img src={imageSrc} alt="DevImage" />
      </div>
      {/* Core title */}
      <p className="font-content text-[28px] mt-4 text-center">{devName}</p>
      {/* Core description */}
      <p className="font-content text-[20px] mt-2 text-center text-gray-600">
        {devRole}
      </p>
    </div>
  );
};

export default DevsDisplay;
