import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import useDownload from './useDownload';

function DownloadForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { isPending, reconcile } = useDownload();
    function handleSubmitForm(data) {
        const formattedStart = startDate.toISOString().split('T')[0];
        const formattedEnd = endDate.toISOString().split('T')[0];
        const finalData = {
            ...data,
            startDate: formattedStart,
            endDate: formattedEnd,
        };
        reconcile(finalData);
        reset();
    }

    return (
        <div className="w-full flex justify-center items-start font-poppins">
            <div className="w-1/3 bg-[var(--light-gray)] shadow-md px-8 py-8 flex flex-col gap-8">
                <div>
                    <h2 className="capitalize font-bold tracking-wide text-xl">Download Reports</h2>
                </div>
                <div className="flex flex-col gap-2 items-start text-sm">
                    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(handleSubmitForm)}>
                        <div>
                            <select
                                className="select inline-block w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                id="account"
                                name="account"
                                {...register('account', { required: true })}
                            >
                                <option value={'equitybank'} className="font-semibold text-sm font-poppins lowercase">
                                    Equity Bank
                                </option>
                                <option
                                    value={'workpayequity'}
                                    className="font-semibold text-sm font-poppins lowercase"
                                >
                                    Workpay-Equity Bank
                                </option>
                            </select>
                            {errors.name && <span className="text-red-500">Select one account</span>}
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="label">Start Date </label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                minDate={new Date('2025-01-01')}
                                maxDate={new Date()}
                                className="select inline-block w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                            <label className="label">End Date </label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                minDate={new Date('2025-01-01')}
                                maxDate={new Date()}
                                className="select inline-block w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        <div className="flex w-full justify-center items-center">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="font-semibold text-center capitalize text-[var(--lighter-gray)] hover:bg-[var(--darker-gray)] px-2 py-2 rounded-sm w-full flex flex-row justify-center items-center gap-2 bg-[var(--dark-gray)] duration-300 transition-all ease-in-out disabled:cursor-not-allowed"
                            >
                                Download
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DownloadForm;
