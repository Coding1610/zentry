import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Story from './Components/Story'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Features from './Components/Features'

export default function App() {
  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}