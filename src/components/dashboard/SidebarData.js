import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData =[
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        
        subNav: [
            {
                title: 'info',
                path: '/profile/info',
                icon: <IoIcons.IoIosPaper />,
            },
          
        ]
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'State',
                path: '/dashboard/state',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/dashboard/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Rewards',
        path: '/rewards',
        icon: <AiIcons.AiFillGift />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Active Gift',
                path: '/rewards/active',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'History',
                path: '/rewards/history',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    
];