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
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor </p>
        <p>sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem  </p>
        <p>ipsum dolor sit amet.</p>
        <button >Get Started</button>
      </div>
      <div class="stats-section">
        <div class="stat">
          <p class="label">Clients</p>
          <p class="value">3K+</p>
        </div>
        <div class="stat">
          <p class="label">Projects</p>
          <p class="value">10K+</p>
        </div>
        <div class="stat">
          <p class="label">Employee</p>
          <p class="value">500+</p>
        </div>
        <div class="stat">
          <p class="label">Years</p>
          <p class="value">10+</p>
        </div>
      </div>
    </>
  )
}

export default App
