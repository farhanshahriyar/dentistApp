import { Link } from "react-router-dom";
import { BiSolidChevronRight } from "react-icons/bi";
// import heroImg01 from '../assets/images/hero-img01.png';
// import heroImg02 from '../assets/images/hero-img02.png';
// import heroImg03 from '../assets/images/hero-img03.png';
import heroImg01 from "../assets/images/hs1.png";
import heroImg02 from "../assets/images/hs2.png";
import heroImg03 from "../assets/images/hs3.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Featured from "../components/Featured/Featured";
import DoctorList from "../components/Doctors/DoctorList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/FAQ/FaqList";

const Home = () => {
  return (
    <>
      {/* ===== hero section starts ===== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[5.8rem]">
            {/* ===== hero content ===== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Enjoy The Beauty Of A Healthy Smile!
                </h1>
                <p className="text__para">
                Welcome to Medicare, where we believe that a healthy smile is the key to happiness and confidence. We are dedicated to providing exceptional health care and helping you achieve the beautiful smile you deserve.{" "}
                </p>
                <Link to="/doctors">
                <button className="btn" href="">Request an Appointment</button>
                </Link>
              </div>
              {/* ===== hero counter ===== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="">
                  <h2 className="text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]">
                    +30
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div className="">
                  <h2 className="text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]">
                    +15
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div className="">
                  <h2 className="text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* ===== hero image ===== */}
            <div className="flex gap-[30px] justify-end">
              <div className="">
                <img className="w-full" src={heroImg01} alt="heroBG" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="heroBG"
                />
                <img className="w-full" src={heroImg03} alt="heroBG" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== hero section ends ===== */}

      {/* ===== home section ===== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing The Best Medical Care
            </h2>
            <p className="text__para text-center">
              World-class dental care, right around the corner.
              <br />
              Our health system offers unmatched, expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[60px] mb-[30px]lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className="" src={icon01} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h3>
                <p className="text__para text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Finding the right doctor is crucial for your healthcare needs. Ask for recommendations from trusted sources, check with your insurance provider for in-network doctors, or use online directories to search for doctors based on specialty, location, and patient reviews. Take into account factors like experience, credentials, and patient satisfaction when making your decision.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BiSolidChevronRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className="" src={icon02} alt="icon02" />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h3>
                <p className="text__para text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Once you've chosen a doctor, it's important to find their office location. You can typically find this information on their website or by contacting their clinic directly. Use online maps or navigation apps to get directions and plan your visit. Consider factors like proximity, accessibility, and parking options when choosing a location.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BiSolidChevronRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className="" src={icon03} alt="icon03" />
              </div>

              <div className="mt-[30px]">
                <h3 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h3>
                <p className="text__para text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Scheduling an appointment is easy. Call the doctor's office during business hours and speak to their staff to book an appointment. Alternatively, some doctors offer online appointment booking through their website or third-party platforms. Have your insurance information ready if applicable. Remember to mention any specific concerns or preferences when scheduling your appointment.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BiSolidChevronRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== home section ends ===== */}

      {/* ===== about section ===== */}
      <About />
      {/* ===== about section ends ===== */}

      {/* ===== services section ===== */}
      <Services />
      {/* ===== services section ends ===== */}

      {/* ===== featured section ===== */}
      <Featured />
      {/* ===== featured section ends ===== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">
              World-class dental care, right around the corner.
              <br />
              Our health system offers unmatched, expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* ===== great doctors section ===== */}

      {/* ===== faq section ===== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img className="" src={faqImg} alt="faqImg" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Frequently Asked Questions</h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>
      {/* ===== faq section ends ===== */}
    </>
  );
};

export default Home;
