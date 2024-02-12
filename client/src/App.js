import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserProfile from './Pages/UserProfile/UserProfile';
import UserAuth from './Pages/UserAuth/UserAuth';
import BlogPostPage from './Pages/BlogRead/BlogRead';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/User/:id' element={<UserProfile />} />
        <Route path='/Auth' element={<UserAuth />} />
        <Route path='/NewBlog' element={<NewBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
