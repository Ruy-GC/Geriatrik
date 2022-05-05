import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs'
import * as CgIcons from 'react-icons/cg'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile/'+localStorage.getItem('id'),
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/home',
    icon: <CgIcons.CgFile />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <MdIcons.MdLogout />,
    cName: 'nav-text'
  }
];