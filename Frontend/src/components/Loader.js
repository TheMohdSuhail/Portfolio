import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000] '>
        <div className='flex gap-5 text-6xl font-semibold sm:text-3xl'>
            <h className="text-secondary m">M</h>
            <h className="text-white s">S</h>
            <h className="text-tertiary p">P</h>
        </div>
    </div>
  )
}

export default Loader