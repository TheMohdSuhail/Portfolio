import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Contact = () => {

    // const user = {
    //     name: "MOHD SUHAIL",
    //     email: "mohdsuhail.istiyak@gmail.com",
    //     age: null,
    //     mobile: "8650714015",
    //     country: "INDIA"
    // };

    const { portfolioData} = useSelector(state => state.root)
    const {contact} = portfolioData;
    // const {firstName, lastName, welcomeText, description, caption} = intro;

    // contact._id= undefined;

  return (
    <div>
        <SectionTitle title={'Say Hello'} />
        <div className="flex sm:flex-col items-center">
            <div className="flex flex-col">
                <p className='text-tertiary'>{`{`}</p>
            {Object.keys(contact).map((key) => (
               key !=='_id' && <p className='ml-5'>
                    <span className='text-tertiary'>{key } :</span> : <span className='text-tertiary'>{contact[key]}</span>
                </p>
            ))}
            <p className='text-tertiary'>{"}"}</p>
            </div>
            <div className='h-[400px]'>
            <dotlottie-player src="https://lottie.host/78ae1cda-6099-4c4b-b97d-b5949659eb79/ZJLYMRXwmk.json" background="transparent" speed="1" direction="1" playMode="normal" autoplay></dotlottie-player>
            </div>
        </div>
    </div>
  )
}

export default Contact