import React from 'react'
import Home from './component/layout/home/home'
import About from './component/layout/about/About'
import Services from './component/layout/services/Services'
import Properties from './component/layout/properties/properties'
import Contact from './component/layout/contact/Contact'

const home = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Properties/>
      <Contact/>
    </div>
  )
}

export default home
