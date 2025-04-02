import { useMutation } from '@tanstack/react-query';
import { axiosInstace } from '../../../axiosConfigs/axios';

const apiReconcile = async (finalData) => {
    try {
        const response = await axiosInstace.post('/reconciliation/reconcile', finalData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

function useReconcile() {
    const { isPending, mutate: reconcile } = useMutation({
        mutationFn: (finalData) => apiReconcile(finalData),
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error.message);
        },
    });
    return { isPending, reconcile };
}

export default useReconcile;
