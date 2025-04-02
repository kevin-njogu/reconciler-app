import { Outlet } from 'react-router';
import SideBar from './SideBar';

function Layout() {
    return (
        <div className="w-full h-screen bg-[var(--lighter-gray)] font-poppins">
            <div className="flex flex-row h-full w-full">
                <SideBar />
                <div className="w-5/6 bg-[var(--lighter-gray)] px-4 py-8 flex flex-col h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
