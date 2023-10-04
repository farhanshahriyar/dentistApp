import { useState } from "react";
import AppointmentModal from "./AppointmentModal";


const SidePanel = () => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">Appointment Price</p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8
            text-headingColor font-bold">500 BDT</span>
            </div>

            {/* <div className="mt-8">
                <p className="text__para mt-0 font-semibold text-headingColor">Available Time Slots:
                </p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">5:00 PM - 9:30 PM</p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Thursday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">6:00 PM - 9:30 PM</p>
                    </li>
                </ul>
            </div> */}
            <button onClick={openModal} className="btn px-2 w-full rounded-md">Book Appointment</button>
            <AppointmentModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
            {/* <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div>
                        <h2> Select Appointment Time</h2>
                        <input type="datetime-local" />
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog> */}
        </div>
    );
};

export default SidePanel;
