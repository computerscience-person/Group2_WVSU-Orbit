import React from "react";

interface AboutCoreValues {
  imageSrc: string;
  coreTitle: string;
  coreDesc: string;
}

const About_CoreValues: React.FC<AboutCoreValues> = ({
  imageSrc,
  coreTitle,
  coreDesc,
}) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      {/* Background image */}
      <div className="sm:w-[8rem] md:w-[15rem] lg:w-[15rem] sm:h-[8rem] md:h-[15rem] lg:h-[15rem] bg-tangerine rounded-full overflow-hidden flex justify-center items-center">
        <img
          src={imageSrc}
          alt="DevImage"
          className="sm:max-w-[5rem] md:max-w-[10rem] lg:max-w-[10rem] sm:max-h-[5rem] md:max-h-[10rem] lg:max-h-[10rem] object-cover"
        />
      </div>
      {/* Core title */}
      <p className="font-content font-bold text-base sm:text-md md:text-xl text-center">
        {coreTitle}
      </p>
      {/* Core description */}
      <p className="font-content text-base sm:text-md md:text-xl text-center">
        {coreDesc}
      </p>
    </div>
  );
};

export default About_CoreValues;
