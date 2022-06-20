import { useAuth } from '../Contexts/AuthContext';
import React, {useState } from 'react';

const Footer = () => {
    const { login } = useAuth()
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


    return (
        <div>
            <button disabled={loading} onClick={loginuser}>login</button>
        </div>
    );
}

export default Footer;
