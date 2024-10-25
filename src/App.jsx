
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import Header from './assets/Components/Header/Header'

function App() {
  

  return (
    <>
      <div>
        <Header></Header>
        <div className='md:flex w-11/12 md:w-4/5 mx-auto space-x-2' >
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
