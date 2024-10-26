
import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import Header from './assets/Components/Header/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }


  

  return (
    <>
      <div>
        <Header></Header>
        <div className='md:flex w-11/12 md:w-4/5 mx-auto space-x-2' >
          <Blogs 
            handleBookmarks={handleBookmarks} 
            handleReadingTime={handleReadingTime}>
          </Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
