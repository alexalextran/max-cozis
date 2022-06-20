
import './Sass&Css/App.css';
import { AuthProvider } from "./Contexts/AuthContext";
import {  Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import DashBoard from './Pages/DashBoard';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <>
    <AuthProvider>
    <Routes  basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route  path="/dashboard" element={<PrivateRoute />}>
              <Route  path="/dashboard" element={<DashBoard />} />
            </Route>
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
