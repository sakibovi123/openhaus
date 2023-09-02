import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Auth from './Pages/Auth';
import AuthUser from './Context/Auth';
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";



function App() {

  const { getToken } = AuthUser()
  const isLoggedIn = !!getToken()


  return (
    <div className="App">
      <Routes>
        <Route exact path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
          <Route exact path="/signin" element={isLoggedIn ? <Navigate to="/" /> : <Signin />} />
        <Route exact path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/signup" />} />
      </Routes>
    </div>
  );
  }


export default App;
