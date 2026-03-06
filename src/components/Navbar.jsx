import React from 'react'
import { Workflow } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import NavTabs from './NavTabs';
const Navbar = () => {
  return (
    <nav className='p-3 flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
            <Workflow/>
            <h1>Rohit.Dev</h1>
        </div>
        {/* TODO */}
        <div>
            <div className='hidden'>
                <NavTabs/>
            </div>
            <div className='flex items-center gap-5'>
            <AnimatedThemeToggler/>
            <Avatar size='md'>
                <AvatarImage src="../../public/assests/avatar.png"/>
                <AvatarFallback>R</AvatarFallback>
            </Avatar>
            </div>
        </div>
    </nav>
  )
}

export default Navbar