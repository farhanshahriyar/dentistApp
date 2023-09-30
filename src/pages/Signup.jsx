import React, { useContext, useEffect, useRef, useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import avatarImg from '../assets/images/doctor-img02.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaGooglePlusG } from 'react-icons/fa';
import uploadImgToImgBB from '../utils/imgbbUpload';
import useAxios from '../hooks/useAxios';
import { AppContext } from '../context/AppProvider';
import { toast } from 'react-hot-toast';


const Signup = () => {
  const { user, setUser } = useContext(AppContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const inputRef = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient'
  });

  const handleInpurChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    setPreviewURL(url);
    setSelectedFile(file);
  };
  const axiosInstance = useAxios();
  const submitHandler = async event => {
    event.preventDefault();
    try {
      const img = await uploadImgToImgBB(selectedFile);
      const { data } = await axiosInstance.post('/api/v1/auth/register', { ...FormData, photo: img });
      setUser(data.data);
      localStorage.setItem('user', JSON.stringify(data.data));
    }
    catch (err) {
      setUser(null);
      toast.error(err.response.data.error);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className='max-w-[1170px] mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* === img box === */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="signup" className='w-full rounded-l-lg' />
            </figure>
          </div>
          {/* === form box === */}
          <div className='rounded-r-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Create an <span className='text-primaryColor'>account</span></h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input type="text" name='name' value={FormData.name} onChange={handleInpurChange}
                  placeholder="enter your username" className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required />
              </div>
              <div className="mb-5">
                <input type="email" name='email' value={FormData.email} onChange={handleInpurChange}
                  placeholder="enter your email" className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required />
              </div>
              <div className="mb-5">
                <input type="password" name='password' value={FormData.password} onChange={handleInpurChange}
                  placeholder="enter your password" className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required />
              </div>

              <div className='mb-5 flex items-center justify-between'>
                <label className='text-textColor text-[16px] leading-7 cursor-pointer'>
                  Are you a : <select name='role'
                    value={FormData.role} onChange={handleInpurChange}
                    className='text-[15px] leading-7 px-4 py-3 text-headingColor focus:outline-none'>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className='text-textColor text-[16px] leading-7 cursor-pointer'>
                  Select Gender : <select name='gender'
                    value={FormData.gender} onChange={handleInpurChange}
                    className='text-[15px] leading-7 px-4 py-3 text-headingColor focus:outline-none'>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={previewURL || avatarImg} alt='' className='w-full rounded-full' />
                </figure>

                <div onClick={() => inputRef.current.click()} className='relative w-[130px] h-[50px]'>
                  <input type='file' name='photo' id='customFile'
                    onChange={handleFileInputChange}
                    ref={inputRef}
                    className='absolute top-5 left-0 w-full h-full opacity-0 cursor-pointer'
                    accept='.jpg, .png, .jpeg' />
                  <label htmlFor='avatar' className='w-full h-full bg-primaryColor text-white text-[16px] leading-7 font-bold rounded-lg flex items-center justify-center cursor-pointer'>Upload Photo</label>
                </div>
              </div>

              <div className='mt-5'>
                <button type='submit' className='w-full text-[18px] leading-8 bg-primaryColor text-white rounded-lg px-4 py-3 font-bold mt-8'>Register</button>
              </div>

              {/* <div className='mt-1'>
                <button type='submit' className='w-full flex items-center justify-center text-[18px] leading-8 bg-primaryColor text-white rounded-lg px-4 py-3 font-bold mt-8'><FaGooglePlusG className='mr-2 text-2xl' />Register with Google</button>
              </div> */}
              <p className='mt-5 text-textColor text-center'>
                Already have an account? {" "} <Link to='/login' className='text-primaryColor font-medium ml-1 cursor-pointer'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
