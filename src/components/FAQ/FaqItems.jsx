// import { useState } from "react"
// import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"


// const FaqItems = ({item}) => {

//     const [ isOpen, setIsOpen ] = useState(false)
//     const toogleAccordian = () => {
//         setIsOpen(!isOpen)
//     }


//   return (
//     <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
//         <div className="flex items-center justify-between gap-5">
//             <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
//                 {item.question}
//             </h4>
//             <div className={`${isOpen && "bg-primaryColor text-white border-none"}
//              w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>{isOpen ? <AiOutlineMinusSquare/> : <AiOutlinePlusSquare/>}</div>
//         </div>

//         {isOpen && (
//          <div className="mt-4">
//         <p className="text-[16px] leading-7 lg:text-[18px] lg:leading-8 text-textColor">
//             {item.content}
//         </p>
//         </div>
//             )}
//     </div>
//   )
// }

// export default FaqItems

import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FaqItems = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      <div className="flex items-center justify-between gap-5">
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white border-none"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
          onClick={toggleAccordion}
        >
          {/* {isOpen ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />} */}
          {isOpen ? <AiOutlineMinus /> : < AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4">
          <p className="text-[16px] leading-7 lg:text-[18px] lg:leading-8 text-textColor">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItems;
