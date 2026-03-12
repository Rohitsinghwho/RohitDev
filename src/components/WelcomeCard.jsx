import React from 'react'

const WelcomeCard = () => {

  return (
    <div className='w-full h-auto p-6  flex flex-col  gap-5 rounded-xl shadow dark:shadow-gray-800'>
        <h2 className='text-[#48ea69] md:text-xl'>~/welcome.md</h2>
        <p className='text-md text-gray-500'>Hello! I'm Rohit. I build user-centric interfaces that bridge the gap between complex engineering and intuitive
        design. Currently working on open-source design systems and web accessibility.</p>
        <div className='flex items-center gap-10 '>
            <div className='flex rounded-xl flex-col shadow dark:shadow-gray-800 p-5 items-center gap-5 cursor-pointer'>
                <h4 className='text-md font-semibold'>PROJECT COMPLETED</h4>
                <span className='text-xl'>20+</span>
               
            </div>
            <div className='flex rounded-xl flex-col shadow dark:shadow-gray-800 p-5 items-center gap-5 cursor-pointer'>
                <h4 className='text-md font-semibold'>YEARS OF EXPERIENCE</h4>
                <span className='text-xl'>1+</span>
            </div>
            <div className='flex rounded-xl flex-col shadow dark:shadow-gray-800 p-5 items-center gap-5 cursor-pointer'>
                <h4 className='text-md font-semibold'>SKILLS LEARNED</h4>
                <span className='text-xl'>30+</span>
            </div>
        </div>
    </div>
  )
}

export default WelcomeCard