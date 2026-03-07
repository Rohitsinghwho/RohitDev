import React from 'react'
import ContributionGraphGithub from "../components/ContributionGraphGithub"
const Overview = () => {
  return (
    <div className='my-3'>
      <div className='p-2  rounded-xl flex items-center justify-center shadow shadow-olive-300'>
          <ContributionGraphGithub/>
      </div>
    </div>
  )
}

export default Overview