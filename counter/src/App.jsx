import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if(count<20){
      setCount(count+1) }
  }

  const removeValue = () => {
    if(count>=1){
      setCount(count-1) }
  }
  return (
    <>
      <h1>Divyanshu Counter</h1>
      <h2>Counter: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <h3>limits are from 0 to 20</h3>
    </>
  )
}

export default App
