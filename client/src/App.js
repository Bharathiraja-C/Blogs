import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserProfile from './Pages/UserProfile/UserProfile';
import UserAuth from './Pages/UserAuth/UserAuth';
import Home from './Pages/HomePage/Home';
import BlogPostPage from './Pages/BlogRead/BlogRead';
import NewBlog from './Pages/NewBlog/NewBlog';
import HeroDiv from './Components/HeroDiv/HeroDiv';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar /><Home /></>} />
        <Route path='/User/:id' element={<><Navbar /><UserProfile /></>} />
        <Route path='/Auth' element={<UserAuth />} />
        <Route path='/blog/:id' element={<><Navbar /><BlogPostPage /></>} />
        <Route path='/newBlog' element={<><Navbar /><NewBlog/></>}/>
        <Route path='/hero' element={<HeroDiv/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
