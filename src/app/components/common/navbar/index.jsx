'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import MaxContainer from '../maxContainer/index'
const Index = () => {
    const [open, setOpen] = useState(false)
    const toggleNav = () => {
        setOpen(prevOpen => !prevOpen)
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const NavItems = ['Home', 'About Us', 'Services', 'Blog', 'Customer Stories']
    return (
        <nav className={` bg-black `}>
            <MaxContainer>
                <div className="flex items-center px-[3rem] lg:px-[4rem] py-[1.5rem] lg:py-[2.5rem] justify-between">
                    <div className="lg:flex lg:items-center">
                        <img src="/ace_logo.png" className="w-[7.6rem] lg:w-[10rem] lg:mr-[10rem]" alt="logo" />
                        <div className={`fixed lg:static z-20 w-[100vw] lg:w-auto h-[100vh] lg:h-auto bg-black inset-0 lg:inset-auto px-[2rem] sm:px-0 transition-all duration-500  ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${open ? 'translate-x-0' : 'translate-x-[100%] lg:translate-x-0'}`}>
                            <ul className="mt-[7rem] lg:mt-0 lg:flex">
                                {NavItems.map((item, i) => (<Link key={i} href={`/${item}`} className="py-[1rem] lg:px-[1rem] lg:ml-[2rem] block"><li className="text-[1.5rem] lg:text-[1.3] lg:font-normal font-medium">{item}</li></Link>))}
                            </ul>
                        </div>

                    </div>

                    <div className="flex items-center gap-x-[3rem]">
                        <button className="font-bold rounded-[.5rem] text-[1rem] lg:text-[1.3rem] lg:border text-text-100 lg:text-white bg-white lg:bg-transparent px-[1.2rem] lg:px-[2.3rem] py-[.7rem]">
                            Contact us
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-out flex flex-col items-center justify-between h-[1.7rem] relative z-20 lg:hidden ${open ? 'w-[3rem]' : 'w-[2.5rem]'}`} onClick={toggleNav}>
                            <div className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? '-rotate-45 w-[2.7rem]' : ''}`}></div>
                            <div className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? 'translate-x-[8rem] translate-y-[8rem]' : ''}`}></div>
                            <div className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? 'rotate-45 w-[2.7rem]' : ''}`} ></div>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </nav>
    );
}

export default Index;