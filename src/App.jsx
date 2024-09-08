import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './ContextApi'
/*
context api dosen't fix rerendering it's only
fix the prop driling
*/
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  )
}

function Count({ setCount }) {
  console.log("count rerendered");//check point
  return <div>
    <CountRanderar />
    <Buttons setCount={setCount} />
  </div>

}

function CountRanderar() {
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons({ setCount }) {
  const count = useContext(CountContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>incress</button>
    <button onClick={() => {
      setCount(count - 1)
    }}>decress</button>
  </div>
}

export default App
