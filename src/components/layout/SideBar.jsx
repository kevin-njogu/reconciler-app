import { GrDocumentExcel } from 'react-icons/gr';
import SideNavItem from '../shared/SideNavItem';
import { PiRecycle } from 'react-icons/pi';
import { GoDownload } from 'react-icons/go';
import { CiBank } from 'react-icons/ci';
import { MdPendingActions } from 'react-icons/md';
import { FaPowerOff } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const sideNavItems = [
    { icon: <GrDocumentExcel />, label: 'Upload', path: 'upload', color: 'text-green-500' },
    { icon: <PiRecycle />, label: 'Reconcile', path: 'reconcile', color: 'text-purple-500' },
    { icon: <GoDownload />, label: 'Download', path: 'download', color: 'text-pink-500' },
    { icon: <CiBank />, label: 'Equity', path: 'unmatched-equity', color: 'text-blue-500' },
    { icon: <MdPendingActions />, label: 'WpEquity', path: 'unmatched-wpequity', color: 'text-yellow-500' },
];

function SideBar() {
    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('csrfToken');
    }

    return (
        <div className="w-1/6 bg-[var(--light-gray)] shadow-md px-4 py-8 flex flex-col divide-y gap-6">
            <h1 className="uppercase text-xl font-bold">Reconciler</h1>
            <div>
                <ul className="flex flex-col gap-3">
                    {sideNavItems.map((item, index) => (
                        <SideNavItem
                            key={index}
                            icon={item.icon}
                            label={item.label}
                            path={item.path}
                            color={item.color}
                        />
                    ))}
                    <li className="cursor-pointer flex flex-row gap-2 text-sm font-semibold hover:bg-[var(--lighter-gray)] px-1 py-2 rounded-sm">
                        <span className="text-2xl text-red-500">
                            <FaPowerOff />
                        </span>
                        <span>
                            <NavLink to="/login" onClick={handleLogout}>
                                Logout
                            </NavLink>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
