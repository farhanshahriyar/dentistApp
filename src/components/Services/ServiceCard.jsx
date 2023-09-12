
import { BiSolidChevronRight } from "react-icons/bi"
import { Link } from "react-router-dom"

const ServiceCard = ({item, index}) => {
    const {name, desc, bgColor, textColor} = item

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
        <p className="text__para text-[16px] leading-7 text-textColor font-[400] mt-4">
            {desc}
        </p>

        <div className="flex items-center justify-between mt-[30px]">
        <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BiSolidChevronRight className='group-hover:text-white w-6 h-5'/>
        </Link>
        <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-8 font-semibold' style={{
            backgroundColor: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: '6px 0 0 6px',
            }}>
            {index + 1}
        </span>
        </div>
    </div>
  )
}

export default ServiceCard
