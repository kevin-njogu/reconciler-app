import { useMutation } from '@tanstack/react-query';
import { axiosInstace } from '../../../axiosConfigs/axios';

const apiDownload = async (finalData) => {
    try {
        const response = await axiosInstace.post('/downloader/download', finalData, {
            headers: {
                contentType: 'application/json',
            },
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${finalData?.account}_transactions.csv`);
        document.body.appendChild(link);
        link.click();
    } catch (error) {
        console.log(error.message);
    }
};

function useDownload() {
    const { isPending, mutate: reconcile } = useMutation({
        mutationFn: (finalData) => apiDownload(finalData),
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error.message);
        },
    });
    return { isPending, reconcile };
}

export default useDownload;
