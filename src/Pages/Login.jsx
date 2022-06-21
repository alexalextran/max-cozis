import React from 'react';
import { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [loading, setloading] = useState(false);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

   

    async function loginuser(e){
        e.preventDefault()


        try{
            setloading(true)
         await login(email, password)
         navigate("/dashboard");

        } catch(e){
            console.log(e)
            window.alert("Failed To sign in! Please try again")
            setemail("")
            setpassword("")
        }
        setloading(false)
        
    }


    return (
        <section className='loginpage'>
            <form onSubmit={loginuser}>
                <h1>Login</h1>
            <p>Email</p>
            <input name="email" required value={email} onChange={e => setemail(e.target.value)}></input>
            <p>Password</p>
            <input name="password" required type="password" value={password} onChange={e => setpassword(e.target.value)}></input>
            <button disabled={loading}>Login</button>
            </form>
            <Link to="/" className="button">Home</Link>
        </section>
    );
}

export default Login;
