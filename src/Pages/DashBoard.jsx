
import { useAuth } from '../Contexts/AuthContext';
import React, {useState } from 'react';



  

const DashBoard = () => {
    const { login, logout } = useAuth()
    const [loading, setloading] = useState(false);

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
            <button onClick={logoutUser}>logout</button>
        </div>
    );
}

export default DashBoard;
