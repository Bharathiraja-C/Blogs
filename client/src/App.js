import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserProfile from './Pages/UserProfile/UserProfile';
import UserAuth from './Pages/UserAuth/UserAuth';
import Home from './Pages/HomePage/Home';
import BlogPostPage from './Pages/BlogRead/BlogRead';
import NewBlog from './Pages/NewBlog/NewBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/User/:id' element={<UserProfile />} />
        <Route path='/Auth' element={<UserAuth />} />
        <Route path='/blog/:id' element={<BlogPostPage />} />
        <Route path='/newBlog' element={<NewBlog/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
