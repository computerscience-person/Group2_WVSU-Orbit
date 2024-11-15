import React from "npm:react"
import Nav from "../components/Nav.tsx"
const Homepage = () => (
  <>
    <Nav />
    {/* greeter screen */}
    <div className="h-screen flex flex-wrap content-center">
      <div className="max-h-[40dvh] w-screen px-52 border-4 border-green-400">
        <h1 className="text-6xl text-center font-leader uppercase">
          Welcome To Your One-Stop Org Hub
        </h1>
        <p>

        </p>
      </div>
    </div>
  </>
);

export default Homepage;
