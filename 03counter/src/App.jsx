import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(14)// hooks
  // let counter=3
  const addValue=()=>{
    // console.log("increment",Math.random())
    // counter=counter+1
    console.log("increment",count)
    setCount(count + 1)
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {count}</h2>
    <button onClick={addValue}>increment</button>
    <br />
    <button onClick={() => setCount(count - 1)}>decrement</button>
    </>

  )}
  
export default App
