import { useQuery } from '@tanstack/react-query';
import { axiosInstace } from '../../../../axiosConfigs/axios';
import { usePaginationContext } from '../../../context/PaginationContext';

async function apiUnmatchedWorkpayEquity(page) {
    try {
        const response = await axiosInstace.get('/reconciliation/getunmatched', {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                type: 'workpayequity',
                page: page,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export function useUnmatchedWorkpayEquity() {
    const { page } = usePaginationContext();

    const { isPending, data, isError, error } = useQuery({
        queryFn: () => apiUnmatchedWorkpayEquity(page),
        queryKey: ['unmatchedEquity', { page: page }],
    });
    return { isPending, isError, data, error };
}
