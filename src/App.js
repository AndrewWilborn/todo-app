import { createContext, useState , useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './app/login/page';
import SignUp from './app/signup/page';
import Todo from './app/page';

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState();

  const _setUser = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    setUser(data)
  }

  useEffect(() => {
    if(!user){
      const previousUser = sessionStorage.getItem("user");
      if(previousUser){
        setUser(JSON.parse(previousUser));
      }
    }
  }, []);

  return (
    <AuthContext.Provider value ={{user, setUser: _setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={user ? <Todo /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
