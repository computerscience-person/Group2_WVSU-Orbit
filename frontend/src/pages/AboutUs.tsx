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
        <div className="font-leader z-10 text-center absolute left-1/2 -translate-x-1/2 top-[15%] text-[80px] whitespace-nowrap">
          ABOUT WVSU ORBIT
        </div>
        <div className="font-content z-10 text-center absolute left-1/2 -translate-x-1/2 top-[70%] text-[28px]">
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
          <div className="font-leader z-10 text-center absolute right-2/3 translate-x-14 top-[35%] text-[50px] whitespace-nowrap">
            Mission
          </div>
          {/* MISSION STATEMENT */}
          <div className="font-content z-10 text-center absolute right-2/3 translate-x-48 top-[45%] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </div>
          {/* VISION */}
          <div className="font-leader z-10 text-center absolute left-2/3 translate-x--14 top-[65%] text-[50px] whitespace-nowrap">
            Vision
          </div>
          {/* VISION STATEMENT */}
          <div className="font-content z-10 text-center absolute left-2/3 top-[75%] text-[20px] transform -translate-x-1/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </div>
        </div>
      </div>
      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}
      <div className="overflow-hidden">
        {/* LAYER 3 */}
        <div className="h-screen bg-white relative">
          <p className="font-leader z-10 text-center absolute left-1/2 -translate-x-1/2 top-[10%] text-[80px] whitespace-nowrap">
            Core Values
          </p>
          <div className="flex flex-row justify-center gap-20 absolute top-[30%] left-1/3 -translate-x-1/4">
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
        <div className="h-[200vh] bg-[#FF6C1F] relative">
          <p className="font-leader z-10 text-center absolute left-1/2 -translate-x-1/2 top-[10%] text-[80px] whitespace-nowrap">
            Team Behind WVSU Orbit
          </p>
          <div className="flex flex-wrap justify-center gap-32 absolute top-[30%] left-1/3 -translate-x-1/4">
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
