import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1 className="text-8xl bg-red-700">Counter - {num}</h1>
      <button onClick={()=>{setNum(num+1)}}>increase count</button>
      <button onClick={()=>{setNum(num-1)}}>decrease count</button>
    </div>
  )
}

export default App