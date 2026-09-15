import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Card from './componenets/card'
import './App.css'

function App() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          Tailwind is Working 🚀
        </h1>
      </div>

      <Card change="true" />
    
    </div>
  )
}

export default App