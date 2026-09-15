import { useState } from "react";
function App() {
const [bgColor, setBgColor] = useState("pink")

  return (
    <>
    <div className= "w-full h-screen duration-200"
     style={{backgroundColor: bgColor}}> 
     
    </div>
    <div
      className="justify-center bottom-12 insert-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">test</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setBgColor("blue")}>
          blue
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setBgColor("red")}>
          red
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setBgColor("green")}>
          green
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setBgColor("yellow")}>
          yellow
        </button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setBgColor("purple")}>
          purple
        </button>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setBgColor("pink")}>
          pink
        </button>
    </div>
    </>

  )
}

export default App
