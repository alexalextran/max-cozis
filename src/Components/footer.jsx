import { useAuth } from '../Contexts/AuthContext';
import React, {useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { login, logout } = useAuth()
    const [loading, setloading] = useState(false);

   

    async function loginuser(e){
        e.preventDefault()

        try{
            setloading(true)
         await login("alextran8385@gmail.com", "maxcozis")
         console.log("signedin")

        } catch{
            window.alert("Failed To sign in!")
        }
        setloading(false)
        
    }

    async function logoutUser(e){
        e.preventDefault()

        try{
            setloading(true)
         await logout()
         console.log("loggedout")

        } catch{
            window.alert("Failed To log out!")
        }
        setloading(false)
        
    }


    return (
        <div>
             <Link to="/dashboard" className="button">dashboard</Link>
        </div>
    );
}

export default Footer;
