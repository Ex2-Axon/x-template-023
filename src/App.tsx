import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

/* ── Animated counter number ── */
function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'scale(1.2)'
    el.style.color = '#BC4749' // accent color
    const t = setTimeout(() => {
      el.style.transform = 'scale(1)'
      el.style.color = ''
    }, 200)
    return () => clearTimeout(t)
  }, [value])

  return (
    <span
      ref={ref}
      className="inline-block transition-all duration-200 ease-in-out font-bold"
    >
      {value}
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [isBloom, setIsBloom] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 md:p-8 bg-background selection:bg-primary/30">
      <header className="w-full max-w-4xl flex justify-between items-center mb-12 animate-fade-in">
        <div className="flex items-center gap-2">
          <img src={viteLogo} className="w-8 h-8" alt="Vite logo" />
          <span className="text-muted font-bold tracking-widest text-xs">V1.23.0</span>
        </div>
        <nav>
          <label className="switch">
            <input 
              className="ch" 
              type="checkbox" 
              checked={isBloom} 
              onChange={() => setIsBloom(!isBloom)} 
            />
            <span className="slider"></span>
          </label>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl gap-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 animate-slide-up">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="paper-card p-6 md:p-10 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                New Collection
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-text mb-4 tracking-tight leading-tight">
                SOFT LAYERS
              </h1>
              <p className="text-muted max-w-md mx-auto text-sm md:text-base leading-relaxed">
                A tranquil and refined digital experience inspired by sculpted paper.
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 opacity-80 animate-gentle-float">
               <img src={heroImg} className="w-full h-full object-contain" alt="Sculpted Paper Art" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <button
              type="button"
              className="paper-card px-8 py-3 text-text hover:text-primary transition-colors flex items-center gap-3 font-semibold group"
              onClick={() => setCount((c) => c + 1)}
            >
              Explore Designs
              <span className="paper-inset px-2 py-0.5 text-sm">
                <CounterNum value={count} />
              </span>
            </button>
            <p className="text-[10px] text-muted uppercase tracking-widest">
              Interactive Prototype
            </p>
          </div>
        </section>

        {/* Info Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
          {/* Documentation */}
          <div id="docs" className="paper-card p-8 space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-10 h-10 paper-inset flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Documentation</h2>
            <p className="text-sm text-muted">Your questions, answered by our comprehensive guides.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="paper-inset px-4 py-2 text-xs flex items-center gap-2 hover:bg-white transition-colors">
                <img className="w-3 h-3" src={viteLogo} alt="" />
                Vite
              </a>
              <a href="https://react.dev/" target="_blank" rel="noreferrer" className="paper-inset px-4 py-2 text-xs flex items-center gap-2 hover:bg-white transition-colors">
                <img className="w-3 h-3" src={reactLogo} alt="" />
                React
              </a>
            </div>
          </div>

          {/* Social */}
          <div id="social" className="paper-card p-8 space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-10 h-10 paper-inset flex items-center justify-center">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Connect With Us</h2>
            <p className="text-sm text-muted">Join the Vite X-Template Community and grow with us.</p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a href="https://github.com/Ex2-Axon/x-template" target="_blank" rel="noreferrer" className="paper-inset px-4 py-2 text-xs flex items-center gap-2 hover:bg-white transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://discord.gg/8Zeq8VCU" target="_blank" rel="noreferrer" className="paper-inset px-4 py-2 text-xs flex items-center gap-2 hover:bg-white transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                Discord
              </a>
              <a href="https://x.com/Microtronic2" target="_blank" rel="noreferrer" className="paper-inset px-4 py-2 text-xs flex items-center gap-2 hover:bg-white transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                X.com
              </a>
              <a href="https://bsky.app/profile/microtronic.bsky.social" target="_blank" rel="noreferrer" className="paper-inset px-4 py-2 text-xs flex items-center gap-2 hover:bg-white transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10.8c-1.087-2.114-4.046-5.05-6.975-5.848-1.505-.411-3.025-.135-3.025 1.791 0 .403.1.806.297 1.168.602 1.108 2.03 1.857 3.058 2.115-.14 0-1.42 0-2.147.001-1.378.001-2.208.828-2.208 1.954 0 1.127 1.131 1.934 2.107 1.934.717 0 1.867 0 2.22 0-.616.14-1.633.453-2.25 1.04-.616.586-.717 1.378-.297 2.107.42.729 1.378 1.102 2.22.717 1.04-.474 2.404-1.666 3.012-2.973-.01.1-.01.2-.01.3 0 1.43 1.1 2.6 2.5 2.6s2.5-1.17 2.5-2.6c0-.1 0-.2-.01-.3.608 1.307 1.972 2.499 3.012 2.973.842.385 1.8.012 2.22-.717.42-.729.319-1.521-.297-2.107-.617-.587-1.634-.9-2.25-1.04.353 0 1.503 0 2.22 0 .976 0 2.107-.807 2.107-1.934 0-1.126-.83-1.953-2.208-1.954-.727-.001-2.007-.001-2.147-.001 1.028-.258 2.456-1.007 3.058-2.115.197-.362.297-.765.297-1.168 0-1.926-1.52-2.202-3.025-1.791-2.929.798-5.888 3.734-6.975 5.848z"/></svg>
                Bluesky
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-4xl mt-16 pt-8 border-t border-surface flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted font-bold tracking-[0.2em] uppercase animate-fade-in">
        <p>© 2026 Microtronic. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-primary cursor-default transition-colors">Privacy Policy</span>
          <span className="hover:text-primary cursor-default transition-colors">Terms of Service</span>
        </div>
      </footer>
    </div>
  )
}

export default App
