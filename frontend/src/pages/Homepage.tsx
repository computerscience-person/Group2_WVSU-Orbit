import React from "npm:react"
import Nav from "../components/Nav.tsx"
const Homepage = () => (
  <>
    <Nav />
    {/* greeter screen */}
    <div className="h-[90vh] flex flex-wrap content-center justify-center">
      <div 
        className="max-h-[60dvh] w-[60vw] flex flex-col gap-4 justify-center border-4 border-green-400 text-center"
      >
        <h1 className="text-6xl font-leader uppercase">
          Welcome To Your One-Stop Org Hub
        </h1>
        <p className="mx-16 text-lg font-content">
          Explore and engage with the vibrant community of West Visayas State University's
          organizations <strong><em>all in one orbit</em></strong>.
        </p>
      </div>
    </div>
    <div>
      <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
        <svg className="fill-tangerine">
          <rect x="0" y="75" width="100%" height="50" transform="rotate(2, 500, 100)" />
        </svg>
        <svg className="fill-pool">
          <rect x="0" y="75" width="100%" height="50" transform="rotate(-2, 500, 100)" />
        </svg>
      </svg>
    </div>
  </>
);

export default Homepage;
