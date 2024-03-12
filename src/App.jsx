import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1280px] mx-auto'>
      <Nav/>
      <hr className='my-8' />
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>

    </div>      
  )
}

export default App
