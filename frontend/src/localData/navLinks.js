import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

export const links = [
    {
        id: 1,
        name: 'Home',
        link: '/',
        icon: FaHome
    },
    {
        id: 2,
        name: 'Categories',
        link: '/categories',
        icon: BiSolidCategory
    },
    {
        id: 3,
        name: 'Profile',
        link: '/profile',
        icon: FaUserCircle
    },
];