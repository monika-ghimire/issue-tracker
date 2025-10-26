'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import {FaBug} from 'react-icons/fa'
import classNames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();
       
    const links = [
        {label : 'Dashboard', href:'/'},
        {label : 'Issues', href:'/issues'},
    ]

  return (
    <nav className="flex items-center gap-6 border-b mb-5 px-5 h-14 ">
      <Link href="/">
      <FaBug/>
      </Link>
     
      <ul className="flex gap-6 ">
        {links.map(link => 
        <Link 
        key={link.href} 
        className={classNames({
            'text-zinc-900 font-semibold' : link.href === currentPath,
            'text-zinc-500' : link.href !== currentPath,
            'hover:text-zinc-800 transition-colors' : true,
        })}
        href={link.href}>
        {link.label}
        </Link>
        )}
      
      </ul>
    </nav>
  )
}

export default NavBar
