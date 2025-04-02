import { useQuery } from '@tanstack/react-query';
import { axiosInstace } from '../../../../axiosConfigs/axios';
import { usePaginationContext } from '../../../context/PaginationContext';
async function apiUnmatchedEquity(page) {
    try {
        const response = await axiosInstace.get('/reconciliation/getunmatched', {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                type: 'equity',
                page: page,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export function useUnmatchedEquity() {
    const { page } = usePaginationContext();

    const { isPending, data, isError, error } = useQuery({
        queryFn: () => apiUnmatchedEquity(page),
        queryKey: ['unmatchedEquity', { page: page }],
    });
    return { isPending, isError, data, error };
}
