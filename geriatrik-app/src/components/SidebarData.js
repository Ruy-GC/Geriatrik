import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs'
import * as CgIcons from 'react-icons/cg'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <CgIcons.CgFile />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <MdIcons.MdLogout />,
    cName: 'nav-text'
  }
];