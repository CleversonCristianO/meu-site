import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)
  const [notices, setNotices] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5003/projects", {
    method: "GET", 
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => resp.json())
  .then((data) => {
    setNotices(data)
  })
  .catch(err =>console.log(err))
  }, [])
  notices.map((e)=>{
    console.log(e)
  })
  const noticiaPrincipal = notices[0]
  const noticiaNumber1 = notices[1]
  console.log(notices)
  return (
    <>
    <div className='grid grid-cols-3 h-40'>
      {noticiaPrincipal && 
      <div className='bg-red-500 col-span-3'>
      {notices[0].titulo}
      </div>
      }
      {notices[1] && 
      <div className='bg-purple-500 col-span-1'>
      {notices[1].titulo}
      </div>
      }
      {notices[2] && 
      <div className='bg-green-500 col-span-1'>
      {notices[2].titulo}
      </div>
      }
      {notices[3] && 
      <div className='bg-blue-500 col-span-1'>
      {notices[3].titulo}
      </div>
      }
    </div>
    </>
  )
}

export default App
