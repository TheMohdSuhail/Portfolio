import React from 'react'
import Header from '../../components/Header'
import Introduction from './Introduction'
import About from './About'
import Experinces from './Experinces'
import Project from './Project'
import Courses from '../Courses'
import Contact from './Contact'
import Footer from './Footer'
import LeftSide from './LeftSide'
import { useSelector } from 'react-redux'

const Home = () => {
  const { portfolioData} = useSelector(state => state.root)

  return (
    <div>
        <Header />
        
        {portfolioData && (
              <div className='bg-primary px-40 sm:px-4'>
              <Introduction />
              <About />
              <Experinces />
              <Project />
              <Courses />
              <Contact />
              <Footer />
              <LeftSide />
          </div>
        )}
    </div>
  )
}

export default Home