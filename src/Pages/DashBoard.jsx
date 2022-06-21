
import { useAuth } from '../Contexts/AuthContext';
import React from 'react';
import { useState } from 'react';
import FileBase from 'react-file-base64'
import { collection, addDoc, getFirestore, doc } from "firebase/firestore"; 


  

const DashBoard = () => {
    const {logout } = useAuth()
    const db = getFirestore();
    const [description, setdescription] = useState("")
    const [img, setimg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        try{
          addDoc(collection(db, "works"), {
            Description: description,
            Image: img
          })  
        } catch(e){
            console.log(e)
            window.alert("Something went wrong, contact alex")
        }
        
    
         
         
    }
    

    async function logoutUser(e){
        e.preventDefault()

        try{
          
         await logout()
         console.log("loggedout")

        } catch{
            window.alert("Failed To log out!")
        }
        
        
    }
    return (
        <section className='dashboard'>
            <h1>Dashboard</h1>

            <div className='dashboard__main'>
                <div>
                card 
                card
                card
                </div>
                <div>
                <form onSubmit={handleSubmit}>
                <h2>Add Works</h2>
            <p>Description</p>
            <textarea name="description" value={description} onChange={e => setdescription(e.target.value)}></textarea>
            <p>File</p>
            <FileBase 
            type="file"
            multiple={false}
            onDone={({base64})=>  setimg(base64)}
            />
            <button>Add</button>
            </form>
                </div>
            </div>


            <button onClick={logoutUser}>logout</button>
        </section>
    );
}

export default DashBoard;
