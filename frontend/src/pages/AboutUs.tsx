import About_CoreValues from "../components/about/About_CoreValues.tsx";
import About_DevsDisplay from "../components/about/About_DevsDisplay.tsx";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";
import sampleImage from "../assets/coreValues/saturn.png";
import missionImg from "../assets/icons/mision_image.webp";
import visionImg from "../assets/icons/vision_image.png";

import Manuel_aboutPic from "../assets/photos/about_manns.png";
import Oliver_aboutPic from "../assets/photos/about_ollie.png";
import Angelika_aboutPic from "../assets/photos/about_aika.png";
import Reycel_aboutPic from "../assets/photos/about_reycel.png";
import Els_aboutPic from "../assets/photos/about_els.png";
import Cristopher_aboutPic from "../assets/photos/about_cris.png";

const threeDevs1 = [
  {
    imageSrc: Manuel_aboutPic,
    devName: "John Manuel Carado",
    bgColor: "bg-pool",
    devRole: "Project Manager",
  },
  {
    imageSrc: Oliver_aboutPic,
    devName: "Oliver Ladores",
    bgColor: "bg-sorbet",
    devRole: "Lead Developer",
  },
  {
    imageSrc: Angelika_aboutPic,
    devName: "Angelika Marie Nava",
    bgColor: "bg-palmleaf",
    devRole: "UI/UX Designer",
  },
];

const threeDevs2 = [
  {
    imageSrc: Reycel_aboutPic,
    devName: "Reycel Sarmiento",
    bgColor: "bg-palmleaf",
    devRole: "UI/UX Designer",
  },
  {
    imageSrc: Els_aboutPic,
    devName: "Els Dave Constantino",
    bgColor: "bg-sorbet",
    devRole: "Fullstack Developer",
  },
  {
    imageSrc: Cristopher_aboutPic,
    devName: "Cristopher Ian Artacho",
    bgColor: "bg-pool",
    devRole: "Front-end Developer",
  },
];

const coreValuesComponents = [
  {
    imageSrc: sampleImage,
    coreTitle: "CONNECTION",
    coreDesc:
      "Encouraging students to engage and form meaningful relationships within the campus community.",
  },
  {
    imageSrc: sampleImage,
    coreTitle: "INCLUSIVITY",
    coreDesc:
      "Building a space where diverse ideas, cultures, and voices are respected, embraced, and celebrated.",
  },
  {
    imageSrc: sampleImage,
    coreTitle: "EMPOWERMENT",
    coreDesc:
      "Empowering students to shape their college experience through involvement and leadership.",
  },
];

const AboutUs = () => {
  return (
    <>
      {/* LAYER 1 */}
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Nav />

        <div className="relative left-1/2 -translate-x-1/2 sm:w-[120vw] sm:h-[85vh] md:w-[120vw] md:h-[100vh]  lg:w-[120vw] lg:h-[100vh] bg-[#FF6C1F] rounded-[50%_50%] top-[-50vh] -z-10 mb-[-90vh] "></div>
        <div className="flex justify-center py-20">
          <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
            ABOUT WVSU ORBIT
          </h1>
        </div>
        <div className="flex flex-col items-center px-80 pt-48 pb-24">
          {/* ABOUT WVSU ORBIT */}
          <p className="font-content text-base sm:text-lg md:text-xl  text-center">
            WVSU Orbit is a centralized platform that enables students at West
            Visayas State University to explore, connect, and engage with campus
            organizations. Whether you're discovering new clubs, attending
            events, or getting involved in activities, WVSU Orbit makes it
            simple to stay connected with the vibrant campus community. With an
            easy-to-use directory and an up-to-date event calendar, the platform
            helps students find their place, stay informed, and make the most of
            their college experience at WVSU.
          </p>
        </div>
      </div>
      {/* LAYER 2 */}
      <div className="flex flex-col min-h-screen overflow-hidden items-center">
        {/* ARC DIV */}
        <div className="relative ">
          <div className="absolute left-1/2 -translate-x-1/2 sm:w-[120vw] sm:h-[85vh] md:w-[120vw] md:h-[100vh]  lg:w-[120vw] lg:h-[100vh] bg-tangerine rounded-[50%_50%] top-[0vh] -z-10"></div>
        </div>
        {/* SHARP CUT FROM ARC */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 sm:w-[100vw] sm:h-[85vh] md:w-[110vw] md:h-[80vh] lg:w-[110vw] lg:h-[80vh] bg-tangerine top-[30vh] -z-10"></div>
        </div>
        {/* Mission and Vision*/}
        <div className=" w-full py-[5rem] space-y-24">
          {/* MISSION DIV */}
          <div className="h-[35vh] flex flex-row justify-center items-center space-x-[5rem]">
            {/* MISSION DIV TEXT */}
            <div className="w-[65vh] flex flex-col space-y-4 max-h-full justify-center items-center text-center">
              <h1 className="font-leader sm:text-2xl md:text-3xl lg:text-4xl">
                Mission
              </h1>
              <p className="font-content text-base sm:text-lg md:text-xl">
                WVSU Orbit aims to create a centralized platform where students
                can explore, connect, and engage with student organizations and
                events. By fostering inclusivity, collaboration, and personal
                growth, we seek to enrich the student experience at WVSU and
                help build a dynamic and thriving campus community
              </p>
            </div>
            <img src={visionImg} className="max-h-full" />
          </div>

          {/* VISION */}

          <div className="h-[35vh] flex flex-row justify-center items-center space-x-[5rem]">
            <img src={missionImg} className="max-h-full" />
            {/* VISION DIV TEXT */}
            <div className="w-[65vh] flex flex-col space-y-4 max-h-full justify-center items-center text-center">
              <h1 className="font-leader sm:text-2xl md:text-3xl lg:text-4xl">
                Vision
              </h1>
              <p className="font-content text-base sm:text-lg md:text-xl">
                To be the leading platform at West Visayas State University that
                fosters a connected, engaged, and empowered student body,
                creating a dynamic campus community where every student can
                explore, grow, and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}
      <div className="bg-white min-h-screen flex flex-col py-[8vh] px-[5rem]">
        <h1 className="font-leader sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Core Values
        </h1>
        <div className="py-[5rem] flex flex-row justify-center items-center space-x-[8rem] mt-16">
          {coreValuesComponents.map((coreVal) => (
            <About_CoreValues
              coreDesc={coreVal.coreDesc}
              coreTitle={coreVal.coreTitle}
              imageSrc={coreVal.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}

      {/* LAYER 4 */}
      <div className=" bg-tangerine flex flex-col py-[8vh] px-[5rem]">
        <h1 className="font-leader sm:text-2xl md:text-3xl lg:text-4xl text-center pb-[2rem]">
          Team Behind WVSU Orbit
        </h1>

        {/* FIRST THREE */}
        <div className="flex flex-row justify-center space-x-[5rem]">
          {threeDevs1.map((dev) => (
            <About_DevsDisplay
              bgColor={dev.bgColor}
              devRole={dev.devRole}
              devName={dev.devName}
              imageSrc={dev.imageSrc}
            />
          ))}
        </div>

        {/* SECOND THREE */}
        <div className="flex flex-row justify-center space-x-[5rem]">
          {threeDevs2.map((dev) => (
            <About_DevsDisplay
              bgColor={dev.bgColor}
              devRole={dev.devRole}
              devName={dev.devName}
              imageSrc={dev.imageSrc}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
