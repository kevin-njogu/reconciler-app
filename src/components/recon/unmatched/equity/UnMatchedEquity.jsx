import { useUnmatchedEquity } from './useUnMatched';
import PaginationComponent from './../../../shared/PaginationComponent';

const columns = ['REFERENCE', 'DATE', 'DEBIT', 'CREDIT', 'RECONCILED', 'RECONCILE'];
function UnMatchedEquity() {
    const { isPending, isError, data, error } = useUnmatchedEquity();
    if (isPending) {
        return <div className="text-center font-poppins animate-pulse">Loading data...</div>;
    }

    if (isError) {
        console.log(error.message);
        return <div className="text-center font-poppins ">Error loading unmatched items</div>;
    }

    let allUnmatchedEquityItems;
    if (data) {
        console.log(data);
        allUnmatchedEquityItems = data?.content;
        console.log(allUnmatchedEquityItems);
    }

    function handleReconcile() {
        console.log('Check box clicked');
    }
    return (
        <div>
            <div>
                <div className="relative overflow-x-auto max-h-[500px] font-poppins">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="bg-[var(--medium-gray)]">
                            <tr>
                                {columns?.map((column) => {
                                    return (
                                        <th
                                            className="px-6 py-2 text-[12px] uppercase text-[var(--light-gray)] tracking-wider font-semibold"
                                            scope="col"
                                            key={column}
                                        >
                                            {column}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {allUnmatchedEquityItems?.map((unMatchedItem) => (
                                <tr className="bg-white border-b border-gray-200 text-[10px]" key={unMatchedItem?.id}>
                                    <td className="px-6 py-1">{unMatchedItem?.reference}</td>
                                    <td className="px-6 py-1">{unMatchedItem?.transactionDate}</td>
                                    <td className="px-6 py-1">{unMatchedItem?.debit}</td>
                                    <td className="px-6 py-1">{unMatchedItem?.credit}</td>
                                    <td className="px-6 py-1">{unMatchedItem?.reconciled.toString()}</td>
                                    <td className="px-6 py-1">
                                        <input
                                            type="checkbox"
                                            id="reconcile"
                                            name="reconcile"
                                            value="true"
                                            onChange={handleReconcile}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <PaginationComponent data={data} />
            </div>
        </div>
    );
}

export default UnMatchedEquity;
