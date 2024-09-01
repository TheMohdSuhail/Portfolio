import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
// import { experiences } from '../../resources/experinces'
import { useSelector } from 'react-redux'

const Experinces = () => {

    const [selectedItemIndex, setSelectedItemIndex] = useState(0)

    const { portfolioData} = useSelector(state => state.root)
    const {experiences} = portfolioData;
    // const {experiences} = experiences;

    return (
        <div>
            <SectionTitle title={'Experiecnce'} />
            <div className="flex py-10 gap-20 sm:flex-col">
                {/* First Part */}
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {experiences.map((experiences, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index)
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-5
                             ${selectedItemIndex === index
                                 ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a5f] py-3 sm:w-40' 
                                 : 'text-white'
                                 }`}>
                                {experiences.period}</h1>
                        </div>
                    ))}
                </div>
                {/* Second Part */}
                <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl '>{experiences[selectedItemIndex].title}</h1>
                        <h1 className='text-tertiary text-xl '>{experiences[selectedItemIndex].company}</h1>
                        <p className='text-white'>{experiences[selectedItemIndex].description}</p>
                </div>
            </div>

        </div>
    )
}

export default Experinces