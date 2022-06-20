import { useAuth } from '../Contexts/AuthContext';
import React, {useState } from 'react';

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
            <button disabled={loading} onClick={loginuser}>login</button>
            <button onClick={logoutUser}>logout</button>
        </div>
    );
}

export default Footer;
