import Nav from "../components/Nav";
import UniversityCarousel from "../components/organizations/UniversityCarousel";
import CollegeCarousel from "../components/organizations/CollegeCarousel";
import Footer from "../components/Footer";
<<<<<<< HEAD
import lakas from "../assets/logos/lakas_youth_organization.jpg";
import usa from "../assets/logos/usa_logo.jpg";
import spark from "../assets/logos/spark_hub_logo.jpg";
import theatre from "../assets/logos/wvsu_Little _theater.jpg";
import esport from "../assets/logos/west_esports.jpg";
import dost from "../assets/logos/wvsu- assocition of DOST scholars.jpg";
import cyborg from "../assets/logos/cyborg_logo.jpg";
import cictSC from "../assets/logos/wvsu_cict.png";
import alima from "../assets/logos/alima_logo.png";
import link from "../assets/logos/link.exe_logo.jpg";
import cictUSA from "../assets/logos/cict-usa.jpg";
import icon from "../assets/logos/icon_publication_logo.jpg";
import Organizations_LogoPlaceholder from "../components/organizations/Organizations_LogoPlaceholder";
=======
import lakas from '../assets/logos/lakas_youth_organization.jpg'
import usa from '../assets/logos/usa_logo.jpg'
import spark from '../assets/logos/spark_hub_logo.jpg'
import theatre from '../assets/logos/wvsu_Little _theater.jpg'
import esport from '../assets/logos/west_esports.jpg'
import dost from '../assets/logos/wvsu- assocition of DOST scholars.jpg'
import cyborg from '../assets/logos/cyborg_logo.jpg'
import cictSC from '../assets/logos/wvsu_cict.png'
import alima from '../assets/logos/alima_logo.png'
import link from '../assets/logos/link.exe_logo.jpg'
import cictUSA from '../assets/logos/cict-usa.jpg'
import icon from '../assets/logos/icon_publication_logo.jpg'
>>>>>>> 4676d22 (added logos on org page)

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
<<<<<<< HEAD

=======
      
>>>>>>> 4676d22 (added logos on org page)
      <div className="py-7">
        <h1 className="text-center justify-start font-leader sm:text-2xl md:text-3xl lg:text-4xl">
          University-Based Organizations
        </h1>
<<<<<<< HEAD
        <div className="flex flex-wrap justify-center gap-y-[1.5rem] py-10 px-[10rem]">
          <Organizations_LogoPlaceholder
            orgName="LAKAS Youth Organization"
            logoImg={lakas}
          />
          <Organizations_LogoPlaceholder
            orgName="University Students' Alliance"
            logoImg={usa}
          />

          <Organizations_LogoPlaceholder orgName="SPARK Hub" logoImg={spark} />

          <Organizations_LogoPlaceholder
            orgName="WVSU Little Theater"
            logoImg={theatre}
          />

          <Organizations_LogoPlaceholder
            orgName="West Esports"
            logoImg={esport}
          />
          <Organizations_LogoPlaceholder
            orgName="WVSU - Association of DOST Scholars"
            logoImg={dost}
          />
=======
        <div className="py-20 px-14">
          <div className="flex flex-row justify-center gap-36 pb-20">
          <div>
          <img src={lakas} alt="2" style={{width: 300, height: 300, borderRadius: 300/ 2}} />
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2">
            LAKAS Youth <br></br>Organization
          </h1>
          </div>
          <div>
          <img src={usa} alt="1" style={{width: 300, height: 300, borderRadius: 300/ 2}} />
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2">
            University <br></br>Students’ Alliance
          </h1>
          </div>
          <div>
          <img src={spark} alt="3" style={{width: 300, height: 300, borderRadius: 300/ 2}} />
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2"> 
            Spark HUB
          </h1>
          </div>
          </div>
          <div className="flex flex-row justify-center gap-36">
          <div>
          <img src={theatre} alt="4" style={{width: 300, height: 300, borderRadius: 300/ 2}}/>
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2"> 
            WVSU Little <br></br> Theater
          </h1>
          </div>
          <div>
          <img src={esport} alt="5" style={{width: 300, height: 300, borderRadius: 300/ 2}}/>
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2"> 
            West Esports
          </h1>
          </div>
          <div>
          <img src={dost} alt="6" style={{width: 300, height: 300, borderRadius: 300/ 2}}/>
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2"> 
          WVSU - Association <br></br> of DOST Scholars
          </h1>
          </div>
          </div>
>>>>>>> 4676d22 (added logos on org page)
        </div>
      </div>
      {/* block 3 */}
      <div className="py-7 bg-palmleaf">
        <h1 className="text-center justify-start font-leader sm:text-2xl md:text-3xl lg:text-4xl">
          College-Based Organizations
        </h1>
<<<<<<< HEAD
        <div className="flex flex-wrap justify-center gap-y-[1.5rem] py-10 px-[10rem]">
          <Organizations_LogoPlaceholder
            orgName="Cyb Robotics Organization"
            logoImg={cyborg}
          />
          <Organizations_LogoPlaceholder
            orgName="CICT Student Council"
            logoImg={cictSC}
          />

          <Organizations_LogoPlaceholder
            orgName="Alima Artist Group"
            logoImg={alima}
          />

          <Organizations_LogoPlaceholder orgName="LINK.exe" logoImg={link} />

          <Organizations_LogoPlaceholder
            orgName="CICT - University Student Alliance"
            logoImg={cictUSA}
          />
          <Organizations_LogoPlaceholder
            orgName="ICON Publication"
            logoImg={icon}
          />
=======
        <div className="py-20 px-14">
          <div className="flex flex-row justify-center gap-36 pb-20">
          <div>
          <img src={cyborg} alt="1" style={{width: 300, height: 300, borderRadius: 300/ 2}} />
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2">
            Cyb Robotics <br />Organization
          </h1>
          </div>
          <div>
          <img src={cictSC} alt="2" style={{width: 300, height: 300, borderRadius: 300/ 2}} />
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2">
            CICT Student <br></br>Council
          </h1>
          </div>
          <div>
          <img src={alima} alt="" style={{width: 300, height: 300, borderRadius: 300/ 2}} />
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2"> 
            Alima Artist <br />Group
          </h1>
          </div>
          </div>
          <div className="flex flex-row justify-center gap-36">
          <div>
          <img src={link} alt="" style={{width: 300, height: 300, borderRadius: 300/ 2}}/>
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2"> 
            LINK.exe
          </h1>
          </div>
          <div>
          <img src={cictUSA} alt="" style={{width: 300, height: 300, borderRadius: 300/ 2}}/>
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2"> 
            CICT - University <br />Students’ Alliance
          </h1>
          </div>
          <div>
          <img src={icon} alt="" style={{width: 300, height: 300, borderRadius: 300/ 2}}/>
          <h1 className="font-content font-bold text-base sm:text-lg md:text-2xl text-center py-2"> 
            Icon <br></br> Publication
          </h1>
          </div>
          </div>
          <p className="font-content text-center italic text-base sm:text-lg md:text-3xl pt-20">
            Stay tuned! More organizations from other colleges will be added soon.
            </p>
>>>>>>> 4676d22 (added logos on org page)
        </div>
        <p className="font-content italic text-center text-base sm:text-lg md:text-2xl pt-[2rem]">
          Stay tuned! More organizations from other colleges will be added soon.
        </p>
      </div>

      <Footer />
    </div>
  );
};
export default Organizations;
