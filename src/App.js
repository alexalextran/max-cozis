
import './Sass&Css/App.css';
import { AuthProvider } from "./Contexts/AuthContext";
import {  Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
function App() {
  return (
    <>
    <AuthProvider>
    <Routes  basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
