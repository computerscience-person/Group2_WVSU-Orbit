import React from "react";

interface AboutCoreValues {
  imageSrc: string;
  coreTitle: string;
  coreDesc: string;
}

const CoreValues: React.FC<AboutCoreValues> = ({
  imageSrc,
  coreTitle,
  coreDesc,
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Background image */}
      <div
        className="w-56 h-64 mx-auto mt-8 flex-shrink-0 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
      </div>
      {/* Core title */}
      <p className="font-content text-[28px] mt-4 text-center">{coreTitle}</p>
      {/* Core description */}
      <p className="font-content text-[20px] mt-2 text-center text-gray-600">
        {coreDesc}
      </p>
    </div>
  );
};

export default CoreValues;
