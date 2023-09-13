import { Link } from "react-router-dom"
import featureImg from '../../assets/images/feature-img.png'
import videoIcon from '../../assets/images/video-icon.png'
import avatarIcon from '../../assets/images/avatar-icon.png'

const Featured = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                {/* ===== featured content ===== */}
                <div className="xl:w-[670px]">
                    <h2 className="heading">
                        Providing The Best Medical Care and Get virtual treatment from anywhere
                    </h2>

                    <ul className="pl-4">
                        <li className="text__para">1. Schedule the appointment directly</li>
                        <li className="text__para">2. Search for your physicial here and contact their office.</li>
                        <li className="text__para">3. View our physicians who are accepting new patients use the online scheduling tool to slect an appointment time.</li>
                    </ul>
                    <Link to='/'><button className="btn">Learn More</button></Link>
                </div>

                {/* ===== featured image ===== */}
                <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                    <img src={featureImg} alt="featureImg" className="w-3/4" />

                    <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-12 left-0 md:bottom-24 md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] boxShadow'>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[6px] lg:gap-3">
                            <p className="text-[10px] leading-[10px] text-headingColor font-[600] lg:text-[14px] lg:leading-5 ">Tue,24</p>
                            <p className="text-[10px] leading-[10px] text-textColor font-[400] lg:text-[14px] lg:leading-5 ">10:00AM</p>
                            </div>
                            <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                <img src={videoIcon} alt="videoIcon" className="w-3 lg:w-5" />
                            </span>
                        </div>

                        <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                            Appointment
                        </div>

                        <div className="flex items-center gap-[6px] lg:gap-3 mt-2 lg:mt-4">
                            <img src={avatarIcon} alt="avatarIcon" className="" />
                            <h4 className="text-[10px] leading-3 text-headingColor font-[700] lg:text-[16px] lg:leading-5 ">Dr.Mahabubur Alom</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured
