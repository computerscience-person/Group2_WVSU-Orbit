import React from "npm:react";
import About_CoreValues from "../components/about/About_CoreValues.tsx";
import About_DevsDisplay from "../components/about/About_DevsDisplay.tsx";

import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";

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
    <>
      {/* LAYER 1 */}
      <div className="white flex flex-col min-h-screen overflow-hidden">
        <Nav />
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 sm:w-[120vw] sm:h-[85vh] md:w-[120vw] md:h-[100vh]  lg:w-[120vw] lg:h-[100vh] bg-[#FF6C1F] rounded-[50%_50%] top-[-50vh] -z-10"></div>
        </div>
        <div className="flex flex-col items-center space-y-4 my-8 sm:my-16 md:mx-8 lg:mx-8">
          {/* ABOUT WVSU ORBIT */}
          <h1 className="font-leader text-3xl sm:text-5xl md:text-7xl lg:text-7xl">
            ABOUT WVSU ORBIT
          </h1>
          <p className="font-content text-base sm:text-sm sm:mx-20 sm:my-24 sm:pt-60 md:text-xl md:pt-72 md:mx-64 lg:text-xl lg:pt-72 lg:mx-64 text-center">
            WVSU Orbit kckvkvnsknvskvnksvs t kckvkvnsknvskvnksvst
            kckvkvnsknvskvnksvst kckvkvnsknvskvnksvst kckvkvnsknvLorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
      </div>
      {/* LAYER 2 */}
      <div className="white flex flex-col min-h-screen overflow-hidden items-center">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 sm:w-[120vw] sm:h-[85vh] md:w-[120vw] md:h-[100vh]  lg:w-[120vw] lg:h-[100vh] bg-tangerine rounded-[50%_50%] top-[0vh] -z-10"></div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 sm:w-[100vw] sm:h-[85vh] md:w-[110vw] md:h-[80vh] lg:w-[110vw] lg:h-[80vh] bg-tangerine top-[30vh] -z-10"></div>
        </div>
        {/* Mission */}
        <div className="relative sm:h-48 sm:w-80 md:h-52 md:w-96 lg:h-52 lg:w-96 text-center sm:mt-24 md:mt-28 lg:mt-28 sm:mr-80 md:mr-96 lg:mr-96 sm:mb-9">
          <h1 className="font-leader text-3xl sm:text-4xl md:text-6xl lg:text-6xl">
            Mission
          </h1>
          <p className="font-content text-base my-7 sm:text-sm md:text-base lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
        </div>

        {/* Vision */}
        <div className="relative sm:h-48 sm:w-80 md:h-52 md:w-96 lg:w-96 text-center sm:mt-24 md:mt-28 lg:mt-28 sm:ml-80 md:ml-96 lg:ml-96 sm:mb-9">
          <h1 className="font-leader text-3xl sm:text-4xl md:text-6xl lg:text-6xl">
            Vision
          </h1>
          <p className="font-content text-base my-7 sm:text-sm md:text-base lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}
      <div className="bg-white flex flex-col min-h-screen overflow-hidden items-center">
        <h1 className="font-leader text-3xl sm:text-4xl md:text-6xl lg:text-6xl sm:mt-10 md:mt-12 lg:mt-12">
          Core Values
        </h1>
        <div className="flex flex-row flex-wrap justify-center sm:mt-16 md:mt-10 lg:mt-10 sm:gap-32 md:gap-14 lg:gap-14 sm:mb-16">
          {coreValuesComponents.map((components, index) => (
            <About_CoreValues
              key={index}
              imageSrc={components.imageSrc}
              coreTitle={components.coreTitle}
              coreDesc={components.coreDesc}
            />
          ))}
        </div>
      </div>

      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}
      <div className="overflow-hidden">
        {/* LAYER 4 */}
        <div className="flex flex-col min-h-screen overflow-hidden items-center bg-tangerine">
          <p className="font-leader text-3xl sm:text-4xl md:text-6xl lg:text-6xl  sm:mt-10 md:mt-12 lg:mt-12">
            Team Behind WVSU Orbit
          </p>
          <div className="flex flex-wrap justify-center items-center sm:gap-32 md:gap-32 lg:gap-32 sm:pt-20 md:pt-32 lg:pt-32 sm:mb-10 md:mb-20 lg:mb-20 md:mx-24">
            {devDisplayComponents.map((components, index) => (
              <About_DevsDisplay
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
      <Footer />
    </>
  );
};

export default AboutUs;
