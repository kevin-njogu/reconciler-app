import { useForm } from 'react-hook-form';
import useLogin from './useLogin';

export default function LoginForm() {
    const { isPending, login } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    function onSubmit(data) {
        console.log(data);
        login(data);
        reset();
    }

    return (
        <div className="w-full h-screen flex justify-center items-center absolute inset-0 bg-gradient-to-br from-black to-white clip-triangle">
            <div className="w-1/4 bg-gray-50 shadow-md px-4 py-8 flex flex-col divide-y rounded-sm">
                <div>
                    <h2 className="uppercase text-xl font-bold font-poppins tracking-wider">Reconciler</h2>
                </div>

                <form className="flex flex-col gap-2 w-full pt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="userName" className="font-lato text-sm font-semibold capitalize">
                            username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            {...register('username', { required: true })}
                            className="font-lato text-gray-700 text-sm py-1 px-2 border-none ring-1 ring-gray-400 rounded-sm inline-block w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                    </div>

                    <div className="flex flex-col gap-1 mb-2">
                        <label htmlFor="passWord" className="font-lato text-sm font-semibold capitalize">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            {...register('password', {
                                required: true,
                                minLength: 4,
                            })}
                            className="font-lato text-gray-700 text-sm py-1 px-2 border-none ring-1 ring-gray-400 rounded-sm inline-block w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        {errors.password && <span className="text-red-500 text-sm">Please enter a valid password</span>}
                    </div>

                    <div className="flex w-full justify-center items-center">
                        <button
                            type="submit"
                            disabled={isPending}
                            className="font-semibold text-center capitalize text-[var(--lighter-gray)] hover:bg-[var(--darker-gray)] px-2 py-2 rounded-sm w-full flex flex-row justify-center items-center gap-2 bg-[var(--dark-gray)] duration-300 transition-all ease-in-out disabled:cursor-not-allowed"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/*
    const navigate = useNavigate();
    const {
        isPending,
        isError,
        data: userAuthData,
        error,
    } = useBasicAuthentication();
        if (isError) {
            console.log(error.message);
        }

        function login() {
            if (userAuthData?.data) {
                if (userAuthData?.data == "Success") {
                    navigate("/home/todos");
                }
            }
        }
*/
