import Link from 'next/link'
import React from 'react'

import {FaBug} from 'react-icons/fa'

const NavBar = () => {
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
        className='text-zinc-500 hover:text-zinc-800 transition-colors' 
        href={link.href}>
        {link.label}
        </Link>
        )}
      
      </ul>
    </nav>
  )
}

export default NavBar
