import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import useAxios from '../../hooks/useAxios';
import Loading from './Loading';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppProvider';

const AppointmentModal = ({ isOpen, closeModal }) => {
    const [selected, setSelected] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [slots, setSlots] = useState([]);
    const [time, setTime] = useState(null);
    const axiosInstance = useAxios();
    const [refetch, setRefetch] = useState([]);
    const { id } = useParams();
    const { user, setRefetch: setRefetch2 } = useContext(AppContext);
    useEffect(() => {
        setLoading(true);
        if (!selected) {
            setSlots([]);
            setLoading(false);
            return;
        };
        try {
            (async function f() {
                const { data } = await axiosInstance.post('timeslot', { date: format(selected, 'PPP'), name: id.split('-').join(' ') });
                setSlots(data.data);
                setLoading(false);
                setTime(null);
            })();
        }
        catch (err) {
            toast.error(err.response.data.error);
            setLoading(false);
            console.log({ err });
        }



    }, [selected, refetch]);

    function cleanup() {
        setSlots([]);
        setTime(null);
        setSelected(new Date());
    }
    async function makeAppointment() {
        if (!selected || !time) {
            toast.error('Please selected date and time for appointment');
            return;
        };
        if (!user) {
            toast.error('Please login to make appointment');
            return;
        }
        setLoading(true);
        try {
            const { data } = await axiosInstance.post('make-appointment', { time, date: format(selected, 'PPP'), name: id.split('-').join(' '), user });
            toast.success(data.messase);
            setRefetch((pre) => !pre);
            setRefetch2((pre) => !pre);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(err.response.data.error);
        }
    }
    return (
        <Transition afterLeave={cleanup} appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Book Appointment
                                </Dialog.Title>
                                <div className='my-6 text-xl font-bold'>
                                    Select Date
                                </div>
                                <DayPicker
                                    className='relative left-11'
                                    mode="single"
                                    selected={selected}
                                    onSelect={setSelected}
                                    modifiersClassNames={{
                                        selected: 'my-selected',
                                        today: 'my-today'
                                    }}

                                />
                                {loading ? <Loading /> : <div className='flex flex-wrap gap-3'>
                                    {slots.map(i => {

                                        return <p onClick={() => setTime(i)} className={`border text-sm font-bold ${time == i ? 'bg-blue-600 text-white' : 'bg-transparent text-black'}   cursor-pointer hover:bg-blue-600 hover:text-white duration-200 border-blue-600 px-2.5 py-1`}>{i}</p>;
                                    })}
                                </div>}
                                <div className="mt-7 flex justify-center">
                                    <button

                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={makeAppointment}
                                    >
                                        Book
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default AppointmentModal;