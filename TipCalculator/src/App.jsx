import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Result from './components/Result'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
    <h1 class="visually-hidden">Splitter, tip calculator.</h1>
      <div className="app">
        <Form />
       
      </div>
    </main>
    
    </>
  )
}

export default App
