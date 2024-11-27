import About_CoreValues from "../components/about/About_CoreValues.tsx";
import About_DevsDisplay from "../components/about/About_DevsDisplay.tsx";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";
import sampleImage from "../assets/coreValues/saturn.png";
import missionImg from "../assets/icons/mision_image.webp";
import visionImg from "../assets/icons/vision_image.png";

const threeDevs1 = [
  {
    imageSrc: sampleImage,
    devName: "John Manuel Carado",
    bgColor: "bg-pool",
    devRole: "Project Manager",
  },
  {
    imageSrc: sampleImage,
    devName: "Oliver Ladores",
    bgColor: "bg-sorbet",
    devRole: "Lead Developer",
  },
  {
    imageSrc: sampleImage,
    devName: "Angelika Marie Nava",
    bgColor: "bg-pool",
    devRole: "UI/UX Designer",
  },
];

const threeDevs2 = [
  {
    imageSrc: sampleImage,
    devName: "Reycel Sarmiento",
    bgColor: "bg-sorbet",
    devRole: "UI/UX Designer",
  },
  {
    imageSrc: sampleImage,
    devName: "Els Dave Constantino",
    bgColor: "bg-pool",
    devRole: "Fullstack Developer",
  },
  {
    imageSrc: sampleImage,
    devName: "Cristopher Ian Artacho",
    bgColor: "bg-sorbet",
    devRole: "Front-end Developer",
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
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Nav />
        <div className="absolute left-1/2 -translate-x-1/2 sm:w-[120vw] sm:h-[85vh] md:w-[120vw] md:h-[100vh]  lg:w-[120vw] lg:h-[100vh] bg-[#FF6C1F] rounded-[50%_50%] top-[-50vh] -z-10"></div>
        <div className="flex justify-center py-20">
          <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
            ABOUT WVSU ORBIT
          </h1>
        </div>
        <div className="flex flex-col items-center px-44 pt-48 pb-24">
          {/* ABOUT WVSU ORBIT */}
          <p className="font-content text-base sm:text-lg md:text-xl  text-center">
            WVSU Orbit kckvkvnsknvskvnksvs t kckvkvnsknvskvnksvst
            kckvkvnsknvskvnksvst kckvkvnsknvskvnksvst kckvkvnsknvLorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS */}
      <div className="bg-white flex flex-col py-[8vh] px-[5rem]">
        <h1 className="font-leader sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Core Values
        </h1>
        <div className="py-[5rem] flex flex-row justify-center items-center space-x-[8rem]">
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
      <div className="bg-tangerine flex flex-col py-[8vh] px-[5rem]">
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
