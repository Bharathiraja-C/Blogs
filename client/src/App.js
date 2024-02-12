import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserProfile from './Pages/UserProfile/UserProfile';
import Home from './Components/UserProfile/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/User/:id' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
