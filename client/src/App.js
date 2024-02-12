import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserProfile from './Pages/UserProfile/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/User/:id' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
