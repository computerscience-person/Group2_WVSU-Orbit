import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Extract URL parameters
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Events_Carousel from "../components/events/Events_Carousel";
import Organizations_WhatsAheadCarousel from "../components/organizations/Organizations_WhatsAheadCarousel";
import { fetchOrgById, Organization } from "../api/api";

const OrgPage: React.FC = () => {
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [recap, setRecap] = useState(true); // Toggle state for recap or what's ahead
  const { org_id } = useParams<{ org_id: number }>(); // Extract org_id from URL
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // USE THIS IF ORG ID IS NOW PASSABLE
  useEffect(() => {
    const fetchOrganizationDetails = async () => {
      if (!org_id || isNaN(org_id)) {
        console.error("Invalid org_id:", org_id);
        return;
      }

      try {
        const orgDetails = await fetchOrgById(org_id);
        if (!orgDetails) {
          console.error("Organization details not found.");
          return;
        }
        setOrganization(orgDetails);
      } catch (error) {
        console.error("Failed to fetch organization details:", error);
      }
    };

    fetchOrganizationDetails();
  }, [org_id]);

  return (
    <div className="bg-sorbet flex flex-col min-h-screen">
      <Nav />
      <div className="h-[110vh] w-full px-[6.5rem] py-[1rem]">
        {organization ? (
          <div className="h-full justify-center items-center">
            <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl text-center">
              WELCOME TO {organization.orgName}
            </h1>
            <div className="flex flex-row justify-center space-x-[4rem] py-[3rem]">
              <div className="flex justify-center items-center">
                <img
                  src={organization.logoUrl}
                  className="max-h-[30rem] rounded-full max-w-[85vh] shadow-xl"
                  alt={`${organization.orgName} Logo`}
                />
              </div>
              <div className="flex flex-col max-w-[85vh] max-h-[30rem] text-center justify-center space-y-[1rem]">
                <h2 className="font-leader text-xl sm:text-3xl md:text-5xl">
                  About {organization.orgName}
                </h2>
                <p className="font-content text-base sm:text-lg md:text-xl">
                  {organization.orgDetails}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
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

      {/* EVENTS SECTION */}
      <div className="bg-white h-[125vh] px-[2rem] py-[1rem]">
        {recap ? (
          <div className="flex flex-col p-[1.5rem] space-y-[1rem]">
            <div className="px-5 justify-center items-center text-center space-y-[1rem]">
              <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
                EVENTS RECAP
              </h1>
              <p className="font-content text-base sm:text-lg md:text-xl">
                Dive into the memorable moments, achievements, and stories from{" "}
                {organization?.orgName || "[org name]"} events. Relive the
                excitement and see how they continue to make an impact.
              </p>
            </div>
            <div className="h-[90vh] flex flex-row space-x-[2rem]">
              <Events_Carousel orgId={org_id} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col p-[2rem] space-y-[1rem]">
            <div className="px-5 justify-center items-center text-center space-y-[1rem]">
              <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl">
                WHAT'S AHEAD
              </h1>
              <p className="font-content text-base sm:text-lg md:text-xl">
                Gear up for the next chapter of{" "}
                {organization?.orgName || "[org name]"}! Don’t miss out on
                exciting events and initiatives coming your way.
              </p>
            </div>
            <div className="h-[70vh] flex flex-row justify-center">
              <Organizations_WhatsAheadCarousel org_id={org_id} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrgPage;
