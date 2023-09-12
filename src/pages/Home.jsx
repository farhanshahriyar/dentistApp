import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';

const Home = () => {
  return (
    <>
    {/* ===== hero section ===== */}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-[5.8rem]">
              {/* ===== hero content ===== */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">Enjoy The Beauty Of A Healthy Smile!</h1>
                  <p className="text__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc ut dignissim cursus. Aliquam erat volutpat. </p>

                  <button className="btn">Request an Appointment</button>
                </div>
                {/* ===== hero counter ===== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div className="">
                    <h2 className="text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]">+30</h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>
                  <div className="">
                    <h2 className="text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]">+15</h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic Location</p>
                  </div>
                  <div className="">
                    <h2 className="text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]">100%</h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* ===== hero image ===== */}
              <div className='flex gap-[30px] justify-end'>
                <div className=''>
                  <img className='w-full' src={heroImg01} alt="heroBG" />
                </div>
                <div className='mt-[30px]'>
                  <img className='w-full mb-[30px]' src={heroImg02} alt="heroBG" />
                  <img className='w-full' src={heroImg03} alt="heroBG" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default Home
