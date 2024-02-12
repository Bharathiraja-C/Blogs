import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserProfile from './Pages/UserProfile/UserProfile';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/User/:userId' element={
          <>
            <UserProfile />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
