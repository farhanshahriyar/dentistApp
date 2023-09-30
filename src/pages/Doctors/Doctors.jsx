// import { doctors } from "../../assets/data/doctors";
import { useEffect, useState } from "react";
import DoctorCard from "../../components/Doctors/DoctorCard";
import useAxios from "../../hooks/useAxios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    (async function () {
      const { data } = await axiosInstance.get('/reserverd');
      setDoctors(data);
    })();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    (async function () {
      // data laoding from backend
      const { data } = await axiosInstance.get('/reserverd');
      // filtering the data depend on doctors name or his specialization
      const filter = data.filter(i => (i.name.toLowerCase().includes(e.target.search.value.toLowerCase()) || i.specialization.toLowerCase().includes(e.target.search.value.toLowerCase())));
      //setting in the state to show  the update
      setDoctors(filter);
    })();
  };

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <form onSubmit={handleSearch} className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              name="search"
              className="py-4 pl-4 pr-2 bg-transparent focus:outline-none w-full cursor-pointer placeholder:text-textColor"
              placeholder="Search for a doctor, speciality or treatment"
            ></input>
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </form>
        </div>
      </section>

      <section>
        <div className="container">
          {doctors.length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>
            {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
          </div> : <div className="flex h-96 items-center justify-center">
            No Doctors not found
          </div>}
        </div>
      </section>
    </>
  );
};

export default Doctors;
