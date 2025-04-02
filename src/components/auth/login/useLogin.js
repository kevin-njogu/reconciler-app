import { useMutation } from '@tanstack/react-query';
import { axiosInstace } from '../../../axiosConfigs/axios';
import { useNavigate } from 'react-router';

const loginFunction = async (credentials) => {
    try {
        const response = await axiosInstace.post('/auth/public/signin', credentials);
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
};

const useLogin = () => {
    const navigate = useNavigate();

    const { isPending, mutate: login } = useMutation({
        mutationFn: (credentials) => loginFunction(credentials),
        onSuccess: (data) => {
            localStorage.setItem('token', data.jwtToken);
            navigate('/home/upload');
        },
        onError: (error) => {
            console.error(error.message);
        },
    });
    return { isPending, login };
};

export default useLogin;
