import Nav from "../components/Nav";
import Organizations_LogoPlaceholder from "../components/organizations/Organizations_LogoPlaceholder";
import Footer from "../components/Footer";
import { fetchOrganizations, Organization } from "../api/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Corrected import of Link
import OrgPage from "./pages/OrgPage.tsx";

const Organizations = () => {
  const [collegeOrgs, setCollegeOrgs] = useState<Organization[]>([]);
  const [universityOrgs, setUniversityOrgs] = useState<Organization[]>([]);

  useEffect(() => {
    const fetchAndSortOrganizations = async () => {
      const fetchedOrganizations = await fetchOrganizations();

      // Separate college-based and university-based organizations
      const collegeBased = fetchedOrganizations.filter(
        (org) => org.isCollegeBased
      );
      const universityBased = fetchedOrganizations.filter(
        (org) => !org.isCollegeBased
      );

      setCollegeOrgs(collegeBased);
      setUniversityOrgs(universityBased);
    };

    fetchAndSortOrganizations();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="text-center min-h-full bg-palmleaf">
        <Nav />
        <div className="px-14 py-52">
          <div className="mx-64">
            <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl mb-4">
              WVSU <br /> ORGANIZATIONS
            </h1>
            <p className="font-content text-base sm:text-lg md:text-xl">
              Come and delve into the galaxy of celestial organizations, and
              find the one destined for you.
            </p>
          </div>
        </div>
      </div>

      {/* University-Based Organizations Section */}
      <div className="py-7">
        <h1 className="text-center font-leader sm:text-2xl md:text-3xl lg:text-4xl">
          University-Based Organizations
        </h1>
        <div className="flex flex-wrap justify-center gap-y-6 py-10 px-16">
          {universityOrgs.map((org, index) => (
            <Link
              to={`/orgpage/${org.org_id}`} // Pass org_id as part of the route
              key={index}
            >
              <Organizations_LogoPlaceholder
                orgName={org.orgName}
                logoImg={org.logoUrl}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* College-Based Organizations Section */}
      <div className="bg-palmleaf py-7 text-center">
        <h1 className="text-center font-leader sm:text-2xl md:text-3xl lg:text-4xl">
          College-Based Organizations
        </h1>
        <div className="flex flex-wrap justify-center gap-y-6 py-10 px-16">
          {collegeOrgs.map((org, index) => (
            <Link
              to={`/orgpage/${org.org_id}`} // Pass org_id as part of the route
              key={index}
            >
              <Organizations_LogoPlaceholder
                orgName={org.orgName}
                logoImg={org.logoUrl}
              />
            </Link>
          ))}
        </div>
        <p className="font-content italic text-base sm:text-lg md:text-xl py-[1.5rem]">
          Stay tuned! More organizations from other colleges will be added soon.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Organizations;
