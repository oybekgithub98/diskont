import React from 'react'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import Nav from '../components/nav/Nav'
import NavSearch from '../components/navSearch/NavSearch'

const Default = () => {
  return (
    <div>
        <Nav />
        <NavSearch />
        <Home />
        <Footer />
    </div>
  )
}

export default Default