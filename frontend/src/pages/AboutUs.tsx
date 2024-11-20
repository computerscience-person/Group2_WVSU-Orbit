import React from "npm:react";
import CoreValues from "../components/CoreValues";
import DevsDisplay from "../components/DevsDisplay";

import sampleImage from "../assets/coreValues/saturn.png";

const devDisplayComponents = [
  {
    imageSrc: sampleImage,
    devName: "DevName",
    bgColor: "#CFE4F4",
    devRole: "Developer Role",
  },
  {
    imageSrc: sampleImage,
    devName: "DevName",
    bgColor: "#CFE4F4",
    devRole: "Developer Role",
  },
  {
    imageSrc: sampleImage,
    devName: "DevName",
    bgColor: "#CFE4F4",
    devRole: "Developer Role",
  },
  {
    imageSrc: sampleImage,
    devName: "DevName",
    bgColor: "#CFE4F4",
    devRole: "Developer Role",
  },
  {
    imageSrc: sampleImage,
    devName: "DevName",
    bgColor: "#CFE4F4",
    devRole: "Developer Role",
  },
  {
    imageSrc: sampleImage,
    devName: "DevName",
    bgColor: "#CFE4F4",
    devRole: "Developer Role",
  },
];

const coreValuesComponents = [
  {
    imageSrc: sampleImage,
    coreTitle: "PEACE",
    coreDesc: "Peace is the key to happiness. Peace2x.",
  },
  {
    imageSrc: sampleImage,
    coreTitle: "PEACE",
    coreDesc: "Peace is the key to happiness. Peace2x.",
  },
  {
    imageSrc: sampleImage,
    coreTitle: "PEACE",
    coreDesc: "Peace is the key to happiness. Peace2x.",
  },
];

const AboutUs = () => {
  return (
    // CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS
    <div className="overflow-hidden">
      {/* LAYER 1 */}
      <div className="h-screen bg-white relative">
        {/* OVAL */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[150%] h-[100vh] bg-[#FF6C1F] rounded-[80%_80%] top-[-50%]"></div>
        {/* ABOUT WVSU TEXT */}
        <div className="font-leader z-2 text-center flex flex-wrap justify-center absolute items-center text-[80px] w-full mt-[20vh] pl-[30vh] pr-[30vh]">
          ABOUT WVSU ORBIT
        </div>
        <div className="font-content text-center flex flex-wrap justify-center items-center pt-[70vh] text-[28px] pl-[40vh] pr-[40vh]">
          WVSU Orbit kckvkvnsknvskvnksvs t kckvkvnsknvskvnksvst
          kckvkvnsknvskvnksvst kckvkvnsknvskvnksvst kckvkvnsknvLorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
      </div>

      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}
      <div className="min-h-screen overflow-hidden">
        {/* LAYER 2 */}
        <div className="h-[150vh] bg-white relative">
          {/* OVAL */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[150%] h-[100vh] bg-[#FF6C1F] rounded-[80%_80%] top-[20%]"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[250%] h-[500%] bg-[#FF6C1F] top-[70%]"></div>
          {/* MISSION */}
          <div className="font-leader z-2 text-center flex flex-wrap justify-center absolute items-center text-[50px] w-full mt-[63vh] pl-[20vh] pr-[120vh]">
            Mission
          </div>
          {/* MISSION STATEMENT */}
          <p className="font-content z-2 text-center flex flex-wrap justify-center absolute items-center pt-[0vh] text-[20px] w-full mt-[75vh] pl-[20vh] pr-[120vh]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
          {/* VISION */}
          <div className="font-leader z-2 text-center flex flex-wrap justify-center absolute items-center text-[50px] w-full mt-[98vh] pl-[120vh] pr-[20vh]">
            Vision
          </div>
          {/* VISION STATEMENT */}
          <p className="font-content z-2 text-center flex flex-wrap justify-center absolute items-center pt-[35vh] text-[20px] w-full mt-[75vh] pl-[120vh] pr-[20vh]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}
      <div className="overflow-hidden">
        {/* LAYER 3 */}
        <div className="h-[120vh] bg-white relative">
          <p className="font-leader z-2 text-center flex flex-wrap justify-center items-center pt-[10vh] text-[80px] whitespace-nowrap">
            Core Values
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center pt-[10vh]">
            {coreValuesComponents.map((components, index) => (
              <CoreValues
                key={index}
                imageSrc={components.imageSrc}
                coreTitle={components.coreTitle}
                coreDesc={components.coreDesc}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}
      <div className="overflow-hidden">
        {/* LAYER 4 */}
        <div className="h-[210vh] bg-[#FF6C1F] relative">
          <p className="font-leader z-2 text-center flex flex-wrap justify-center items-center pt-[10vh] text-[80px] whitespace-nowrap">
            Team Behind WVSU Orbit
          </p>
          <div className="flex flex-wrap justify-center items-center gap-[30vh] min-h-screen pt-[30vh]">
            {devDisplayComponents.map((components, index) => (
              <DevsDisplay
                key={index}
                imageSrc={components.imageSrc}
                devName={components.devName}
                bgColor={components.bgColor}
                devRole={components.devRole}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
