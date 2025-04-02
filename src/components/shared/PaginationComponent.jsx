import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';
import { usePaginationContext } from '../context/PaginationContext';

export default function PaginationComponent({ data }) {
    const { page, dispatch } = usePaginationContext();
    const totalPages = data?.page?.totalPages - 1 || 1;
    console.log(totalPages);

    function handlePreviousPage() {
        if (page > 0) {
            dispatch({ type: 'prev' });
        }
    }

    function handleNextPage() {
        if (page < totalPages) {
            dispatch({ type: 'next' });
        }
    }

    return (
        <div className="flex gap-8 text-[var(--darker-gray)] font-poppins font-bold text-xs mt-2">
            <button
                className="flex flex-row justify-center items-center border-none outline-none focus:border-none focus:outline-none"
                onClick={handlePreviousPage}
            >
                <span className="">
                    <FaAngleLeft />
                </span>
                <span>Prev</span>
            </button>
            <span>
                Page {page} of {totalPages}
            </span>
            <button className="flex flex-row justify-center items-center" onClick={handleNextPage}>
                <span>Next</span>
                <span>
                    <FaAngleRight />
                </span>
            </button>
        </div>
    );
}
