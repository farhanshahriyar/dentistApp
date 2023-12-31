import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGooglePlusG } from 'react-icons/fa';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

const Login = () => {
  const { setUser, user } = useContext(AppContext);
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleInpurChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    });
  };
  const axiosInstance = useAxios();
  const submitHandler = async event => {
    event.preventDefault();
    try {

      const { data } = await axiosInstance.post('/api/v1/auth/login', { ...FormData });
      setUser(data.data);
      // localStorage.setItem('user', JSON.stringify(data.data));
      toast.success('Login Successful');
    }
    catch (err) {
      setUser(null);
      toast.error(err.response.data.error);
    }
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h2 className="text-[22px] leading-9 text-headingColor font-bold mb-10">Hello! Welcome<span className="text-primaryColor"> to Medicare👋</span></h2>
        <form onSubmit={submitHandler} className="py-4 md:py-0">
          <div className="mb-5">
            <input type="email" name='email'
              value={FormData.email} onChange={handleInpurChange}
              placeholder="enter your email" className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required />
          </div>
          <div className="mb-5">
            <input type="password" name='password'
              value={FormData.password} onChange={handleInpurChange}
              placeholder="enter your password" className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required />
          </div>

          <div className='mt-5'>
            <button type='submit' className='w-full text-[18px] leading-8 bg-primaryColor text-white rounded-lg px-4 py-3 font-bold mt-8'>Login</button>
          </div>
          {/* <div className='mt-1'>
                <button type='submit' className='w-full text-[18px] leading-8 bg-primaryColor text-white rounded-lg px-4 py-3 font-bold mt-8'><FaGooglePlusG className='w-full'/>Login with Google </button>
              </div> */}

          {/* <div className="mt-1">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center text-18 bg-primaryColor text-white rounded-lg px-4 py-3 font-bold mt-8"
                >
                  <FaGooglePlusG className="mr-2 text-2xl" />
                  Login with Google
                </button>
              </div> */}



          <p className='mt-5 text-textColor text-center'>
            Don&apos;t have an account? {" "} <Link to='/register' className='text-primaryColor font-medium ml-1 cursor-pointer'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
