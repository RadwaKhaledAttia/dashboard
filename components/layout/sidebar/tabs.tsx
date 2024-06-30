'use client'
import React from 'react'
import Link from 'next/link'
import { Links } from './links'

const SidebarTabs = () => {
  return (
    <ul className='h-[80vh] space-y-1 font-medium'>
      {Links.map(link => (
        <li key={link.title}>
            <Link
              href={link.href}
              className={'flex items-center p-3 text-gray-900 rounded-full dark:text-white dark:hover:bg-blue-400 group'}
            >
              {link.icon()}
            </Link>
        </li>
      ))}
    </ul>
  )
}

export default SidebarTabs
