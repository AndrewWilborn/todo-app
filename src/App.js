import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './app/login/page';
import SignUp from './app/signup/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<h1>Todo</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
