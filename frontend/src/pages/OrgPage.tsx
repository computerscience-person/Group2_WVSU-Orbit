import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CybLogo from "../assets/logos/cyborg_logo.jpg";
import Events_RecapCard from "../components/events/Events_RecapCard";
import { useEffect, useState } from "react";

interface OrgInfo {
  orgName: string;
  orgLogoUrl: string;
  orgDetails: string;
  /* ADD OTHER PROPS THAT INCLUDES PAST 3 RECENT EVENTS */
}

const OrgPage: React.FC<OrgInfo> = ({ orgName, orgLogoUrl, orgDetails }) => {
  const [recap, setRecap] = useState(true);
  return (
    <div className="bg-sorbet flex flex-col min-h-screen">
      <Nav />
      {/* FIRST LAYER */}
      <div className="h-[110vh] w-full px-[6.5rem] py-[1rem]">
        <div className=" h-full justify-center items-center">
          <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl text-center">
            WELCOME TO CURRENT ORGANIZATION
          </h1>
          <div className=" flex flex-row justify-center space-x-[4rem] py-[3rem]">
            <div className=" flex justify-center items-center">
              {/* TODO: REPLACE WITH `orgLogoUrl` */}
              <img
                src={CybLogo}
                className="max-h-[30rem] rounded-full max-w-[85vh] shadow-xl"
              />
            </div>
            <div className=" flex flex-col max-w-[85vh] max-h-[30rem] text-center justify-center space-y-[1rem]">
              {/* TODO: Replace CURRENT ORG with the PASSED ORG INFO */}
              <h2 className="font-leader text-xl sm:text-3xl md:text-5xl">
                About CURRENT ORG
              </h2>
              <p className="font-content text-base sm:text-lg md:text-xl">
                CYB:ORG is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* BUTTONS */}
      <div className="bg-zinc-500 h-[15vh] flex flex-row text-center">
        <div className="bg-pool h-full w-[50%] flex justify-center items-center">
          <button
            className={`font-leader text-xl sm:text-3xl md:text-5xl ${
              recap ? "underline" : ""
            }`}
            onClick={() => setRecap(true)}
          >
            EVENTS RECAP
          </button>
        </div>
        <div className="bg-sunshine h-full w-[50%] flex justify-center items-center">
          <button
            className={`font-leader text-xl sm:text-3xl md:text-5xl ${
              !recap ? "underline" : ""
            }`}
            onClick={() => setRecap(false)}
          >
            WHAT'S AHEAD
          </button>
        </div>
      </div>
      {/* EVENTS RECAP */}

      <div className="bg-white h-[125vh] px-[4rem] py-[1rem]">
        {recap ? (
          <div className="flex flex-col p-[2rem] space-y-[1rem]">
            <div className="px-5 justify-center items-center text-center space-y-[1rem]">
              <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
                EVENTS RECAP
              </h1>
              <p className="font-content text-base sm:text-lg md:text-xl">
                Dive into the memorable moments, achievements, and stories from
                past [org name] events. Relive the excitement and see how [org
                name] continues to make an impact.
              </p>
            </div>
            {/* CAROUSEL IS CURRENTLY A PLACEHOLDER, CREATE ACTUAL CAROUSEL IN FUTURE */}
            <div className="h-[80vh] flex flex-row p-[2rem] space-x-[2rem]">
              <Events_RecapCard
                orgName="CYB:ORG"
                eventName="Cybergence"
                url="facebook.com"
                bgColor="bg-pool"
              />
              <Events_RecapCard
                orgName="CYB:ORG"
                eventName="Cybergence"
                url="facebook.com"
                bgColor="bg-pool"
              />
              <Events_RecapCard
                orgName="CYB:ORG"
                eventName="Cybergence"
                url="facebook.com"
                bgColor="bg-pool"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col p-[2rem] space-y-[1rem]">
            <div className="px-5 justify-center items-center text-center space-y-[1rem]">
              <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
                WHAT'S AHEAD
              </h1>
              <p className="font-content text-base sm:text-lg md:text-xl">
                Gear up for the next chapter of [org name]! Don’t miss out on
                the exciting events and initiatives coming your way—where ideas
                spark, passions ignite, and legacies begin.
              </p>
            </div>
            {/* CAROUSEL IS CURRENTLY A PLACEHOLDER, CREATE ACTUAL CAROUSEL IN FUTURE */}
            <div className="h-[80vh] flex flex-row p-[2rem] justify-center">
              <div className="bg-sorbet w-[135vh] h-full rounded-3xl p-[5rem] flex justify-center flex-col text-center">
                <h1 className="font-content font-extrabold text-3xl sm:text-5xl md:text-6xl ">
                  EVENT NAME OVER HERE HAHAHAH AAASASS
                </h1>
                <div className="flex justify-between p-[1.5rem]">
                  <p className="font-content text-base sm:text-lg md:text-xl">
                    March 31, 2025
                  </p>
                  <p className="font-content text-base sm:text-lg md:text-xl">
                    WVSU-BINHI
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrgPage;
