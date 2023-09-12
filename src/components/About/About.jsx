import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

                {/* ===== about image ===== */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img className="" src={aboutImg} alt="aboutImg" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg} alt="aboutCardImg" className=''/>
                    </div>
                </div>

                {/* ===== about content ===== */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className="heading">
                        Proud to be a part of your family for over 10 years now
                    </h2>
                    <p className="text__para mt-[30px]"> For 10 years, we have been providing you with the best dental care and treatment. Our doctors are highly qualified and experienced in their field. We are proud to be a part of your family.</p>

                    <p className='text__para mt-[30px]'>Our best is something we can do for you. We are always ready to provide you with the best service. We are always ready to provide you with the best service. We are always ready to provide you with the best service.</p>

                    <Link to='/'>
                        <button className='btn btn-primary mt-[30px]'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
