import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero'
import Contact from './components/Contact'
import Skills from './components/Navbar/Skills'
import Projects from './components/Projects/Projects'
import Blogs from './components/Blogs'
import Footer from './components/Navbar/Footer'


const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Contact />
      <Skills />
      <Projects />
      <Blogs />
      <Footer />
    </main>
  )
}

export default App