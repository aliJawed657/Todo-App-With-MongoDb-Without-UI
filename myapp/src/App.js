import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [add, setadd] = useState("")
  const [arr, setarr] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/get')
      .then((result) => setarr(result.data))
      .catch((err) => console.log(err))
  }, [])

  const added = () => {
    axios.post('http://localhost:8000/add', { task: add })
      .then((result) => {
        console.log(result);
        setarr([...arr, { _id: result.data._id, task: add }])

      })
      .catch((err) => console.log(err))

  }

  const dltBtn = (id) => {
    axios.delete('http://localhost:8000/delete/' + id)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <input type='text' onChange={(e) => setadd(e.target.value)} />
      <button onClick={added}>Add Todos</button>
      <ul>
        {
          arr.map((news) => {
            return (
              <li key={news._id}>{news.task} <button onClick={() => dltBtn(news._id)}>Delete</button>
              </li>
            )

          })
        }
      </ul>
    </div>

  )
}

export default App
