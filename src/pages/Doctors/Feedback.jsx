import { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  return (
    <div>
        <div className="mb-[50px]">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-bold'>All Reviews (272)</h3>
        </div>

        <div className='flex justify-between gap-10 mb-[30px]'>
            <div className='flex gap-3'>
              <figure className='w-10 h-10 rounded-full'>
                <img className='w-full' src={avatar} alt='avatar' />
              </figure>
              <div>
                <h4 className='text-[16px] leading-6 text-primaryColor font-bold'>Dr. Saleh Mahmud</h4>
                <p className='text-[14px] leading-5 text-textColor font-medium'>{formateDate("02-14-2023")}</p>
                <p className='text__para mt-3 font-medium text-[15px] text-textColor'>Good services, highly recommended</p>
              </div>
            </div>
            <div className='flex gap-1'>
              {
                [...Array(5).keys()].map((_, index) => 
                    <AiFillStar key={index} color='#0067FF' />)

                }
            </div> 
        </div>

        {/* <div className='text-center'>
            <button className='bg-irisBlueColor text-white rounded-full px-10 py-3 font-bold' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
        </div> */}

        {!showFeedbackForm && (
          <div className='text-center'>
            <button className='bg-irisBlueColor text-white rounded-full px-10 py-3 font-bold' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
          </div>
        )}

        {showFeedbackForm && <FeedbackForm/>}
    </div>
  )
}

export default Feedback
