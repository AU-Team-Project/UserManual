'use client'
import React from 'react';
import Link from "next/link";
import {NAVBAR_ITEMS} from '@/app/data/menu';
import {MenuItem, MenuSection} from '@/app/types/menu';


const Navbar = () => {
    return (
        <nav className='w-[300px]'>
            {NAVBAR_ITEMS.map((section: MenuSection) => (
                <div
                    key={section.title}
                    className='p-5'
                >
                    <h1 className='px-5 text-xl font-bold'>
                        {section.title}
                    </h1>
                    <ul className='mt-1.5'>
                        {section.items.map((item: MenuItem) => (
                            <li
                                key={item.name}
                                className='px-5 py-2'
                            >
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};

export default Navbar;