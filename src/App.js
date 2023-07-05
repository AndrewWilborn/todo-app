import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './app/login/page';
import SignUp from './app/signup/page';

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value ={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={user ? <h1>To Do</h1> : <Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
