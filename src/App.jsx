import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Security from './pages/Security'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import References from './pages/References'
import About from './pages/About'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/security"    element={<Security />} />
        <Route path="/privacy"     element={<Privacy />} />
        <Route path="/terms"       element={<Terms />} />
        <Route path="/references"  element={<References />} />
      </Routes>
      <Footer />
    </>
  )
}
