import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Roadmaps from './pages/Roadmaps'
import Testimonials from './pages/Testimonials'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Resources from './pages/Resources'
import ScrollTop from './components/ScrollTop'
const App = () => {
  return (
    <div>
      <ScrollTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/roadmaps' element={<Roadmaps/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/resources' element={<Resources/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
