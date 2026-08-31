import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/about',      label: 'About' },
  { to: '/references', label: 'Use Cases' },
  { to: '/security',   label: 'Security' },
  { to: '/privacy',    label: 'Privacy' },
  { to: '/terms',      label: 'Terms' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.1rem 4rem',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(18px)',
      borderBottom: scrolled ? '1px solid rgba(30,58,110,0.10)' : '1px solid transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.3s',
    }}>
      {/* LOGO */}
      <Link to="/" style={{ display: 'flex', flexDirection: 'column', gap: '0', textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Cinzel, serif', fontSize: '1.05rem', fontWeight: 600,
          letterSpacing: '0.08em', color: '#B8922E', lineHeight: 1.1,
        }}>πλέγμα-Όλυμπος</span>
        <span style={{
          fontFamily: 'Jost, sans-serif', fontSize: '0.68rem', fontWeight: 300,
          letterSpacing: '0.22em', color: 'rgba(55,60,78,0.65)',
          textTransform: 'uppercase',
        }}>Olympus-Grid</span>
      </Link>

      {/* DESKTOP LINKS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
           className="nav-desktop">
        {NAV_LINKS.map(l => (
          <NavLink key={l.to} to={l.to} style={({ isActive }) => ({
            color: isActive ? '#1E3A6E' : 'rgba(55,60,78,0.55)',
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.82rem', fontWeight: isActive ? 600 : 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'color 0.2s',
            borderBottom: isActive ? '2px solid #1E3A6E' : '2px solid transparent',
            paddingBottom: '0.25rem',
          })}>
            {l.label}
          </NavLink>
        ))}
        <a href="https://investors.olympus-foundation.org"
           target="_blank" rel="noopener noreferrer"
           style={{ color: 'rgba(212,168,67,0.7)', fontFamily:'Jost,sans-serif',
                    fontSize:'0.82rem',fontWeight:500,letterSpacing:'0.08em',
                    textTransform:'uppercase',textDecoration:'none',
                    borderBottom:'2px solid transparent',paddingBottom:'0.25rem' }}>
          Investors
        </a>
        <a href="https://app.olympus-grid.com"
           style={{
             background: 'transparent', border: '1px solid #2E5DAA',
             color: '#2E5DAA', padding: '0.5rem 1.25rem',
             borderRadius: '2px', fontFamily: 'Jost, sans-serif',
             fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
             textTransform: 'uppercase', transition: 'background 0.2s, color 0.2s',
           }}
           onMouseEnter={e => { e.target.style.background='#2E5DAA'; e.target.style.color='#FFFFFF' }}
           onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.color='#2E5DAA' }}>
          Log In →
        </a>
      </div>

      <style>{`
        @media (max-width:860px) { .nav-desktop { display: none !important; } }
        nav { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        @media (min-width:861px) { nav { padding-left: 4rem !important; padding-right: 4rem !important; } }
      `}</style>
    </nav>
  )
}
