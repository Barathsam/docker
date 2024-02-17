import { useState } from 'react'
import axios from "axios";

function App() {
  const [message, setMessage] = useState('')
  let onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.userName.value);
    const p = { name: e.target.userName.value }
    axios
      .post("http://localhost:3001/api/name", p).then((data) => setMessage(data.data))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <p>hii</p>
      <form onSubmit={onSubmit}>
        <input type="text" name="userName" id='gg' />
        <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>

    </>
  )
}

export default App
