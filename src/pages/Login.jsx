import React, { useState } from 'react'

const Login = () => {

  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInpurChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h2 className="text-[22px] leading-9 text-headingColor font-bold mb-10">Hello <span className="text-primaryColor">Welcome</span> Back</h2>
        <form className="py-4 md:py-0">
            <div className="mb-5">
              <input type="email" name='email'
              value={FormData.email} onChange={handleInpurChange}
               placeholder="enter your email" className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required  />
            </div>
            <div className="mb-5">
              <input type="password" name='password'
              value={FormData.password} onChange={handleInpurChange}
               placeholder="enter your password" className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required  />
            </div>

            <div className='mt-7'>
              <button type='submit' className='w-full text-[18px] leading-8 bg-primaryColor text-white rounded-lg px-4 py-3 font-bold mt-8'>Login</button>
            </div>
        </form>
        </div>
    </section>
  )
}

export default Login
