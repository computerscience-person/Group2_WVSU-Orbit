import React from "npm:react";

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
        <div className="font-content z-10 text-center absolute left-1/2 -translate-x-1/2 top-[50%] text-[28px]">
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
          <div className="font-leader z-10 text-center absolute right-2/3 translate-x-14 top-[40%] text-[50px] whitespace-nowrap">
            Mission
          </div>
          {/* MISSION STATEMENT */}
          <div className="font-content z-10 text-center absolute right-2/3 translate-x-48 top-[50%] text-[20px]">
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
          <div className="font-content z-10 text-center absolute right-[70%] translate-x--148 top-[75%] text-[20px]">
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
          {/* OVAL */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[150%] h-[100vh] bg-[#FF6C1F] rounded-[80%_80%] top-[20%]"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
