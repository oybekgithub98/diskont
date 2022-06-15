import React from 'react'
import Home from '../components/home/Home'
import Nav from '../components/nav/Nav'
import NavSearch from '../components/navSearch/NavSearch'

const Default = () => {
  return (
    <div>
        <Nav />
        <NavSearch />
        <Home />
    </div>
  )
}

export default Default