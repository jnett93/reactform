import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null)

  return (
    <>
      <div>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
      </div>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
    
    </>
  )
}



export default App
