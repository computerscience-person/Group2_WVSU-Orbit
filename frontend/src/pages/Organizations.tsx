import Nav from "../components/Nav";
import Organizations_LogoPlaceholder from "../components/organizations/Organizations_LogoPlaceholder";
import Footer from "../components/Footer";

// Import organization logos
import lakas from "../assets/logos/lakas_youth_organization.jpg";
import usa from "../assets/logos/usa_logo.jpg";
import spark from "../assets/logos/spark_hub_logo.jpg";
import theatre from "../assets/logos/wvsu_Little _theater.jpg";
import esport from "../assets/logos/west_esports.jpg";
import dost from "../assets/logos/wvsu- assocition of DOST scholars.jpg";
import cyborg from "../assets/logos/cyborg_logo.jpg";
import cictSC from "../assets/logos/wvsu_cict.png";
import alima from "../assets/logos/alima_logo.png";
import link from "../assets/logos/link-exe_logo.jpg";
import cictUSA from "../assets/logos/cict-usa.jpg";
import icon from "../assets/logos/icon_publication_logo.jpg";

const Organizations = () => {
  const universityOrgs = [
    { name: "LAKAS Youth Organization", logo: lakas },
    { name: "University Students' Alliance", logo: usa },
    { name: "SPARK Hub", logo: spark },
    { name: "WVSU Little Theater", logo: theatre },
    { name: "West Esports", logo: esport },
    { name: "WVSU - Association of DOST Scholars", logo: dost },
  ];

  const collegeOrgs = [
    { name: "Cyborg", logo: cyborg },
    { name: "CICT Student Council", logo: cictSC },
    { name: "ALIMA", logo: alima },
    { name: "Link.exe", logo: link },
    { name: "CICT-USA", logo: cictUSA },
    { name: "ICON Publication", logo: icon },
  ];

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

      <div className="py-7">
        <h1 className="text-center font-leader sm:text-2xl md:text-3xl lg:text-4xl">
          University-Based Organizations
        </h1>
        <div className="flex flex-wrap justify-center gap-y-6 py-10 px-16">
          {universityOrgs.map((org, index) => (
            <button>
              <Organizations_LogoPlaceholder
                key={index}
                orgName={org.name}
                logoImg={org.logo}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-palmleaf py-7 text-center">
        <h1 className="text-center font-leader sm:text-2xl md:text-3xl lg:text-4xl">
          College-Based Organizations
        </h1>
        <div className="flex flex-wrap justify-center gap-y-6 py-10 px-16">
          {collegeOrgs.map((org, index) => (
            <button>
              <Organizations_LogoPlaceholder
                key={index}
                orgName={org.name}
                logoImg={org.logo}
              />
            </button>
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
