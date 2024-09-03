import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { courses } from '../resources/courses'
import { useSelector } from 'react-redux';

const Courses = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { portfolioData} = useSelector(state => state.root)
    const {courses} = portfolioData;
    // const {firstName, lastName, welcomeText, description, caption} = intro;
  return (
    <div>
        <SectionTitle title={'Courses'}/>
        <div className="flex py-10 gap-20 sm:flex-col">
                {/* First Part */}
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {courses.map((courses, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index)
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-5
                             ${selectedItemIndex === index
                                 ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a5f] py-3 sm:w-40' 
                                 : 'text-white'
                                 }`}>
                                {courses.title}</h1>
                        </div>
                    ))}
                </div>
                {/* Second Part */}
                
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    
                <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl '>{courses[selectedItemIndex].title}</h1>
                       
                        <p className='text-white'>{
                    courses[selectedItemIndex].description}</p>
                </div>
                <img className='h-52 w-80' src={courses[selectedItemIndex].image} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Courses
