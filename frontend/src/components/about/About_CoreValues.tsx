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
    <div className="flex flex-col justify-center items-center w-[15rem] h-[20rem] space-y-5">
      {/* Background image */}
      <div className="max-h-[15rem]">
        <img
          src={imageSrc}
          alt="DevImage"
          className="bg-gray-400 rounded-full h-full py-[2rem]"
        />
      </div>
      {/* Core title */}
      <p className="font-content font-bold text-base sm:text-lg md:text-xl text-center">
        {coreTitle}
      </p>
      {/* Core description */}
      <p className="font-content text-base sm:text-lg md:text-xl text-center">
        {coreDesc}
      </p>
    </div>
  );
};

export default About_CoreValues;
