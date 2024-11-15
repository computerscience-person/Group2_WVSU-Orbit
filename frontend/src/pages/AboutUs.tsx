import React from "npm:react";

const AboutUs = () => {
  return (
    // CREATING A PARENT DIV TO ACCOMMODATE THE MULTIPLE LAYERS
    <div className="overflow-hidden">
      {/* LAYER 1 */}
      <div className="h-screen bg-white relative">
        {/* OVAL */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[150%] h-[100vh] bg-[#FF6C1F] rounded-[80%_80%] top-[-50vh]"></div>
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

      {/* LAYER 2 */}
      <div className="h-screen bg-white">Layer 2 (Full Screen Height)</div>
    </div>
  );
};

export default AboutUs;
