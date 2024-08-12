import Counter from './Counter'
import SortExample from './SortExample'
import { useState } from 'react';
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-rose-300 text-rose-500">
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
      <hr className="my-4" />
      <SortExample />
    </div>
  )
}

export default App
