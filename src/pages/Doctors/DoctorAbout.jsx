import React from 'react';
import { formateDate } from '../../utils/formateDate.js';

const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                    About of
                    <span className='text-irisBlueColor font-bold text-[24px] leading-7'>Dr.Saleh Mahmud</span>
                </h3>
                <p className='text__para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae at, commodi, soluta assumenda non animi sapiente ipsum pariatur magni quibusdam adipisci alias aliquam ad eligendi aspernatur tempora perferendis. Esse eligendi officiis voluptatem repudiandae architecto? Animi atque ut exercitationem molestiae labore?
                </p>
            </div>

            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
                <ul className='pt-4 md:p-5'>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-8'>
                        <div>
                            <span className='text-irisBlueColor font-semibold text-[15px] leading-6'>{formateDate("06-23-2014")} - {formateDate("06-23-2016")}</span>
                            <p className='text-[16px] leading-6 text-textColor font-medium'>PHD in Surgeon</p>
                        </div>
                        <p className='text-[14px] leading-5 text-textColor font-medium'>New Square Institute, New York.</p>
                    </li>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-8'>
                        <div>
                            <span className='text-irisBlueColor font-semibold text-[15px] leading-6'>{formateDate("12-04-2010")} - {formateDate("12-04-2014")}
                            </span>
                            <p className='text-[16px] leading-6 text-textColor font-medium'>PHD in Surgeon</p>
                        </div>
                        <p className='text-[14px] leading-5 text-textColor font-medium'>New Square Institute, New York.</p>
                    </li>

                </ul>
            </div>

            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
                <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor font-semibold text-[15px] leading-6'>{formateDate("07-04-2010")} - {formateDate("08-13-2014")}</span>
                        <p className='text-[16px] leading-6 text-textColor font-medium'>PHD in Surgeon</p>

                        <p className='text-[14px] leading-5 text-textColor font-medium'>New Square Institute, New York.</p>
                    </li>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor font-semibold text-[15px] leading-6'>{formateDate("07-04-2010")} - {formateDate("08-13-2014")}</span>
                        <p className='text-[16px] leading-6 text-textColor font-medium'>PHD in Surgeon</p>

                        <p className='text-[14px] leading-5 text-textColor font-medium'>New Square Institute, New York.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DoctorAbout;
