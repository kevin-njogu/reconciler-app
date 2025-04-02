import { useMutation } from '@tanstack/react-query';
import { axiosInstace } from '../../../axiosConfigs/axios';

const apiUploadFile = async (formData) => {
    try {
        const response = await axiosInstace.post('/reconcile/uploadstatement', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

function useUploader() {
    const { isPending, mutate: uploadFile } = useMutation({
        mutationFn: (formData) => apiUploadFile(formData),
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error.message);
        },
    });

    return { isPending, uploadFile };
}

export default useUploader;
