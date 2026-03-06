
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import NavTabs from '@/components/NavTabs'
import { Routes, Route } from 'react-router-dom'
import Repository from '@/pages/Repository'
import Contact from '@/pages/Contact'
import Overview from '@/pages/Overview'

const MainLayout = () => {
  return (
<div className="grid min-h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr_auto]">
  <div className="col-span-2 col-start-1 row-span-1 row-start-1">

    {/* Navbar */}
    <Navbar/>
  </div>
  <div className="rows-span-1 col-span-2 col-start-1 row-start-2  p-5">
    {/* Sidebar */}
    <Sidebar/>
  </div>
  <div className="rows-start-3 col-span-2 col-start-1 p-5">
    {/* main */}
    <NavTabs/>
     <Routes>
          <Route path="/" element={<Overview/>} />
          <Route path="/repository" element={<Repository/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Overview />} />
    </Routes>
  </div>
  <div className="col-span-2 col-start-1 row-span-1 row-start-4 bg-pink-800 p-5">
    {/* Footer */}
  </div>
</div>

  )
}

export default MainLayout