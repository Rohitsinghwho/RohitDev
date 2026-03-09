import React from 'react'
import ContributionGraphGithub from "../components/ContributionGraphGithub"
import RepoCard from '@/components/RepoCard'
import { SquareChartGantt } from 'lucide-react';
import STerminal from '@/components/STerminal';

const Overview = () => {
  return (
    <div className='my-3 flex flex-col gap-8'>
      <div className='p-2  rounded-xl flex items-center justify-center shadow shadow-olive-300'>
          <ContributionGraphGithub/>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex gap-1 items-center'>
            <SquareChartGantt  size={20} color='#48ea69'/>
            <p className='font-semibold'>Pinned Repository</p>
        </div>
        {/* RepoCard */}
        <div className='flex flex-col gap-5'>
        <RepoCard/>
        <RepoCard/>
        <RepoCard/>
        </div>
        {/* Terminal */}
        <div>
          <STerminal/>
        </div>
      </div>
    </div>
  )
}

export default Overview