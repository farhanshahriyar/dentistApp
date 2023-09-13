import { Link } from "react-router-dom"

const Featured = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                {/* ===== featured content ===== */}
                <div className="xl:w-[670px]">
                    <h2 className="heading">
                        Providing The Best Medical Care and Get virtual treatment from anywhere
                    </h2>

                    <ul className="pl-4">
                        <li className="text__para">1. Schedule the appointment directly</li>
                        <li className="text__para">2. Search for your physicial here and contact their office.</li>
                        <li className="text__para">3. View our physicians who are accepting new patients use the online scheduling tool to slect an appointment time.</li>
                    </ul>
                    <Link to='/'><button className="btn">Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured
