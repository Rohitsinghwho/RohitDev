import React from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
const MainLayout = () => {
  return (
<div class="grid min-h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr_auto]">
  <div class="col-span-2 col-start-1 row-span-1 row-start-1 bg-red-200">

    {/* Navbar */}
    <Navbar/>
  </div>
  <div class="rows-span-1 col-span-2 col-start-1 row-start-2 bg-yellow-500">
    {/* Sidebar */}
    <Sidebar/>
  </div>
  <div class="rows-start-3 col-span-2 col-start-1 bg-green-500">
    {/* main */}
  </div>
  <div class="col-span-2 col-start-1 row-span-1 row-start-4 bg-pink-800">
    {/* Footer */}
  </div>
</div>

  )
}

export default MainLayout