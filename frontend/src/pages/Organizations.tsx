import Nav from "../components/Nav";
import UniversityCarousel from "../components/organizations/UniversityCarousel";
import CollegeCarousel from "../components/organizations/CollegeCarousel";
import Footer from "../components/Footer";

const Organizations = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-center min-h-full bg-palmleaf">
        <Nav />
        <div className="px-14 py-52">
          <div className="mx-64">
            <h1 className="font-leader text-3xl sm:text-5xl md:text-6xl mb-4">
              WVSU <br />
              ORGANIZATIONS
            </h1>
            <p className="font-content text-base sm:text-lg md:text-xl">
              Come and delve into the galaxy of celestial organizations, and
              find the one destined for you.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* UNIVERSITY CAROUSEL */}
      <div className="py-7">
        <h1 className="text-center justify-start font-leader sm:text-2xl md:text-3xl lg:text-4xl">
          University-Based Organizations
        </h1>
        {/* CAROUSEL */}
        <div className="px-20 py-16">
          <UniversityCarousel />{" "}
        </div>
      </div>
      {/* block 3 */}
      <div className="py-7 bg-palmleaf">
        <h1 className="text-center justify-start font-leader sm:text-2xl md:text-3xl lg:text-4xl">
          College-Based Organizations
        </h1>
        {/* CAROUSEL */}
        <div className="px-20 py-16">
          <CollegeCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Organizations;
