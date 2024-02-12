import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserProfile from './Pages/UserProfile/UserProfile';
import UserAuth from './Pages/UserAuth/UserAuth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/User/:id' element={<UserProfile />} />
        <Route path='/Auth' element={<UserAuth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
