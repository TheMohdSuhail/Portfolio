import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { projects } from '../../resources/projects'
import { useSelector } from 'react-redux'

const Project = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)
    const {loading, portfolioData} = useSelector(state => state.root)
    const {projects} = portfolioData;
    // const {} = intro;
  return (
    <div>
        <SectionTitle title={'Projects'}/>
        <div className="flex py-10 gap-20 sm:flex-col">
                {/* First Part */}
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((projects, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index)
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-5
                             ${selectedItemIndex === index
                                 ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a5f] py-3 sm:w-40' 
                                 : 'text-white'
                                 }`}>
                                {projects.title}</h1>
                        </div>
                    ))}
                </div>
                {/* Second Part */}
                
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <img className='h-60 w-72' src={projects[selectedItemIndex].image} alt="" />
                <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl '>{projects[selectedItemIndex].title}</h1>
                       <p className="text-white">{projects[selectedItemIndex].description}</p>
                        <p className='text-white'></p>
                </div>
                </div>
            </div>

    </div>
  )
}

export default Project
