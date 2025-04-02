import { NavLink } from 'react-router';

function SideNavItem({ icon, label, path, color }) {
    return (
        <li className="cursor-pointer flex flex-row gap-2 text-sm font-semibold hover:bg-[var(--lighter-gray)] px-1 py-2 rounded-sm">
            <span className={`text-2xl ${color}`}>{icon}</span>
            <span>
                <NavLink to={path}>{label}</NavLink>
            </span>
        </li>
    );
}

export default SideNavItem;
