import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill, RiTwitterFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'


const socialLinks = [
  {
    path: 'https://www.facebook.com/jason.halder420',
    icon: <AiFillFacebook className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.facebook.com/jason.halder420',
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.facebook.com/jason.halder420',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.facebook.com/jason.halder420',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
]

const quickLinks01 = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/',
    display: 'About Us',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/',
    display: 'Blog',
  },
]

const quickLinks02 = [
  {
    path: '/find-a-doctor',
    display: 'Find a Doctor',
  },
  {
    path: '/',
    display: 'Request an Appointment',
  },
  {
    path: '/',
    display: 'Find a Location',
  },
  {
    path: '/',
    display: 'Get a Opinion',
  },
]

const quickLinks03 = [
  {
    path: '/',
    display: 'Donate',
  },
  {
    path: '/contact',
    display: 'Contact Us',
  },
];

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt='logo' />
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>Copyright {year} developed by Medicare all right reserved.</p>

            <div className='flex items-center gap-5 mt-5'>
              {socialLinks.map((item, index) => (
                <Link key={index} to={item.path} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* quicklinks 1 */}
          <div>
            <h2 className='text-[20px] leading-8 font-[700] mb-6 text-headingColor'>Quick Links</h2>

            <ul className=''>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:underline'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quicklinks 2 */}
          <div>
            <h2 className='text-[20px] leading-8 font-[700] mb-6 text-headingColor'>I want to</h2>

            <ul className=''>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:underline'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
           {/* quicklinks 3 */}
          <div>
            <h2 className='text-[20px] leading-8 font-[700] mb-6 text-headingColor'>Support Us</h2>

            <ul className=''>
              {quickLinks03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:underline'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
