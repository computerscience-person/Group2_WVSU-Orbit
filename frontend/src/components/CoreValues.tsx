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
        className=" sm:w-40 md:w-60 lg:w-60 sm:h-40 md:h-60 lg:h-60 md:mt-16 lg:mt-16 flex justify-center items-center rounded-lg"
        style={{}}
      >
        <img src={imageSrc} alt="DevImage" />
      </div>
      {/* Core title */}
      <p className="font-content sm:text-2xl md:text-3xl lg:text-3xl sm:mt-8 md:mt-10 lg:mt-10 text-center">
        {coreTitle}
      </p>
      {/* Core description */}
      <p className="font-content sm:text-1xl md:text-2xl lg:text-2xl mt-4 text-center">
        {coreDesc}
      </p>
    </div>
  );
};

export default CoreValues;
