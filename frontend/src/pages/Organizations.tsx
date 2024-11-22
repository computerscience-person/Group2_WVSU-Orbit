import React from "react";
import Nav from "../components/Nav";
import Swiper from "../components/University_Based_Carousel.tsx";

const Organizations = () => {
return (
  <div className="flex flex-col w-full">
    {/* nav bar */}
    <div>
      <Nav />
    </div>
    {/* block 1 */}
    <div className="text-center min-h-full" style={ {backgroundColor: "#AEA433"}}>
        <div className="mx-14 my-72 ">
          <div>
            <h1 className="font-extrabold text-6xl"> WVSU <br></br>ORGANIZATIONS</h1>
          </div>
          <div className= "mt-2">
            <p>Come and delve into the galaxy of celestial organizations, and find the one destined for you. </p>
          </div>
      </div>
    </div>
    {/* block 2 */}
    <div className="text-center justify-start mt-4 mb-96">
      <div>
        <h1 className="font-extrabold text-4xl">University-Based Organizations</h1>
      </div>
      <div>
      {/* <Swiper/> */}
      </div>
    </div>
    {/* block 3 */}
    <div style={ {backgroundColor: "#AEA433"}}>
      <div className="text-center justify-start mt-4 mb-96" >
        <div>
          <h1 className="font-extrabold text-4xl">College-Based Organizations</h1>
        </div>
      </div>
    </div>
    {/* footer */}
  </div>
);
};

export default Organizations;