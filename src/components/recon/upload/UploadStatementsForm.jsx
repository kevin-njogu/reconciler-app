import useUploader from './useUploader';
import { useForm } from 'react-hook-form';

function UploadStatementsForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const { isPending, uploadFile } = useUploader();
    function handleSubmitForm(data) {
        if (!data) return;
        const file = data?.file?.[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', data?.type);
        uploadFile(formData);
        reset();
    }

    return (
        <div className="w-full h-screen flex justify-center items-start font-poppins">
            <div className="w-1/3 bg-[var(--light-gray)] shadow-md px-8 py-8 flex flex-col gap-8">
                <div>
                    <h2 className="capitalize font-bold tracking-wide text-xl">upload statements</h2>
                </div>
                <div className="flex flex-col items-start font-roboto text-sm">
                    <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit(handleSubmitForm)}>
                        <div>
                            <select
                                className="select inline-block w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                id="type"
                                name="type"
                                {...register('type', { required: true })}
                            >
                                <option value={'equitybank'} className="font-semibold text-sm font-poppins lowercase">
                                    Equity bank
                                </option>
                                <option
                                    value={'workpayequity'}
                                    className="font-semibold text-sm font-poppins lowercase"
                                >
                                    Workpay-Equity
                                </option>
                            </select>
                            {errors.name && <span className="text-red-500">Select one item</span>}
                        </div>
                        <div>
                            <input
                                type="file"
                                accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                className="cursor-pointer"
                                id="file"
                                name="file"
                                {...register('file', { required: true })}
                            />
                            {errors.file && <span className="text-red-500">Select a file</span>}
                        </div>
                        <div className="flex w-full justify-center items-center">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="font-semibold text-center capitalize text-[var(--lighter-gray)] hover:bg-[var(--darker-gray)] px-2 py-2 rounded-sm w-full flex flex-row justify-center items-center gap-2 bg-[var(--dark-gray)] duration-300 transition-all ease-in-out disabled:cursor-not-allowed"
                            >
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UploadStatementsForm;
