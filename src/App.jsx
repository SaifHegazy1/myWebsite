import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <div className='Header'>
        <h1>S P A C E  Y</h1>
        <nav>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Shop Now</a>
        </nav>

      </div>
      <div className='Content'>
        <h1>Creativity is a Most</h1>
        <h1> Valuable Asset</h1>
        <p>At Spacey, we believe that imagination drives innovation.</p>
        <p>Whether you're launching a new idea or refining an existing one, our creative solutions help you stand out.   </p>
        <p>Discover how we turn bold visions into reality.</p>
        <button >Get Started</button>
      </div>
      <div className="stats-section">
        <div className="stat">
          <p className="label">Clients</p>
          <p className="value">3K+</p>
        </div>
        <div className="stat">
          <p className="label">Projects</p>
          <p className="value">10K+ </p>
        </div>
        <div className="stat">
          <p className="label">Employee</p>
          <p className="value">500+</p>
        </div>
        <div className="stat">
          <p className="label">Years</p>
          <p className="value">10+</p>
        </div>
      </div>
    </>
  )
}

export default App
