import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Dropdown, DropdownItem } from "flowbite-react";

const NavbarComponent = () => {
    return (
        <>
            {/* fluid */}
            <Navbar className='fixed left-0 right-0 z-50 !bg-[#031335] py-3 md:py-5 px-4 md:px-8'>
                <NavbarBrand className='grow md:grow-0'>
                    <img src="https://moniepoint.com/logo-mfb-white.png" className="mr-2 md:mr-3 h-5 md:h-9" alt="Moniepoint logo" />
                    <div className='hidden md:flex gap-2'>
                        <button className='bg-[#35425d] text-white rounded-2xl py-2 px-3 md:px-4 font-semibold text-sm md:text-base'>Business</button>
                        <button className='text-white font-semibold cursor-pointer focus:bg-[#35425d] focus:py-2 focus:px-4 hover:bg-[#35425d] hover:py-2 hover:px-4 rounded-2xl duration-75 text-sm md:text-base'>Personal</button>
                    </div>
                </NavbarBrand>

                <div className='flex md:hidden'>
                    <NavbarToggle />
                </div>

                <div className='hidden md:flex items-center gap-2 md:gap-5'>
                    <NavbarCollapse className='flex gap-2 md:gap-5'>
                        <NavbarLink className='text-[13px] md:text-[15px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200' href="#">Products</NavbarLink>
                        <NavbarLink className='text-[13px] md:text-[15px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200' href="#">Company</NavbarLink>
                        <NavbarLink className='text-[13px] md:text-[15px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200' href="#">About</NavbarLink>
                        <NavbarLink className='text-[13px] md:text-[15px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200' href="#">Contact</NavbarLink>
                        <NavbarLink className='text-[13px] md:text-[15px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200' href="#">Blog</NavbarLink>
                    </NavbarCollapse>

                    <Button className='!bg-[#c4e9fd] text-bold text-black rounded-3xl text-sm px-4 py-2'>Sign in</Button>

                    <div className='flex items-center text-black rounded-full p-3 !bg-white'>
                        <Dropdown label="🇳🇬" dismissOnClick={false} className=''     inline>
                            <DropdownItem>Nigeria</DropdownItem>
                            <DropdownItem>Ghana</DropdownItem>
                            <DropdownItem>Kenya</DropdownItem>
                        </Dropdown>
                    </div>
                </div>

                <NavbarCollapse className='md:hidden mt-4'>
                    <div className='flex flex-col gap-3'>
                        <NavbarLink className='text-[13px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200 py-2' href="#">Products</NavbarLink>
                        <NavbarLink className='text-[13px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200 py-2' href="#">Company</NavbarLink>
                        <NavbarLink className='text-[13px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200 py-2' href="#">About</NavbarLink>
                        <NavbarLink className='text-[13px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200 py-2' href="#">Contact</NavbarLink>
                        <NavbarLink className='text-[13px] text-white cursor-pointer hover:text-[#c4e9fd] duration-200 py-2' href="#">Blog</NavbarLink>
                        <Button className='!bg-[#c4e9fd] text-bold text-black rounded-3xl text-sm w-full mt-2'>Sign in</Button>
                    </div>
                </NavbarCollapse>


            </Navbar>
        </>
    )
}

export default NavbarComponent