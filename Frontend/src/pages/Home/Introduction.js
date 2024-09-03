import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Introduction = () => {
  const {loading, portfolioData} = useSelector(state => state.root)
  const {intro} = portfolioData;
  const {firstName, lastName, welcomeText, description, caption} = intro;
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white sm:pt-20'>{welcomeText || '' }</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>{firstName || ''} {lastName || ''}</h1>
        <h1 className='text-7xl sm:text-3xl text-white font-semibold'>{caption || ''}</h1>
        <p className="text-white w-2/3">
        {description || ''}
        </p>
          <NavLink to='/admin' className='flex flex-col items-center gap-1'>
                <p>Admin</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started.</button>
    </div>
  );
}

export default Introduction
