import starIcon from '../../assets/images/star.png';
import { Link } from 'react-router-dom';
import { BiSolidArrowToRight, BiSolidChevronRight } from 'react-icons/bi';

const DoctorCard = ({ doctor }) => {

    const {
        name,
        avgRating,
        totalRating,
        photo,
        specialization,
        totalPatients,
        hospital,
    } = doctor;
    const [first, second] = name.split('Dr');

    return (
        <div className="p-3 lg:p-5">
            <div>
                <img src={photo} className="w-full" alt="doctor" />
            </div>
            <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 ">{'Dr.' + second}</h2>
            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                <span className='bg-[#CCF0F3] text-irisBlueColor py-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>{specialization}</span>

                <div className="flex items-center gap-[6px]">
                    <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                        <img src={starIcon} alt="starIcon" />{avgRating}
                        <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-textColor font-normal'>({totalRating})</span>
                    </span>
                </div>
            </div>

            <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
                <div>
                    <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-7 text-headingColor font-semibold'>
                        +{totalPatients} Patients
                    </h3>
                    <p className='text__para text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-textColor font-normal mt-1 lg:mt-2'> at {hospital}</p>
                </div>
                <Link to={`${name.split(' ').join('-')}`} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BiSolidChevronRight className='group-hover:text-white w-6 h-5' />
                </Link>
            </div>
        </div>
    );
};

export default DoctorCard;
