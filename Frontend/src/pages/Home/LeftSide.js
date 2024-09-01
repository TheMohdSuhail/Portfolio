import React from 'react'

const LeftSide = () => {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row sm:pb-3'>
                    <a href="https://www.facebook.com">
                        <i className="ri-facebook-circle-line text-gray-400"></i>
                    </a>
                    <a href="mailto:your_email@example.com">
                        <i className="ri-mail-line text-gray-400"></i>
                    </a>
                    <a href="https://www.instagram.com">
                        <i className="ri-instagram-line text-gray-400"></i>
                    </a>
                    <a href="https://www.linkedin.com">
                        <i className="ri-linkedin-box-line text-gray-400"></i>
                    </a>
                    <a href="https://github.com">
                        <i className="ri-github-line text-gray-400"></i>
                    </a>
                </div>
                <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'>

                </div>
            </div>
        </div>
    )
}

export default LeftSide