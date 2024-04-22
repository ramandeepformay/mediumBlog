import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import Publish from './pages/Publish'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Signup/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
