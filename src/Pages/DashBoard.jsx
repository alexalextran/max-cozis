
import { useAuth } from '../Contexts/AuthContext';
import React from 'react';
import { useState } from 'react';
import FileBase from 'react-file-base64'
import { collection, addDoc, getFirestore, getDocs, onSnapshot, doc  } from "firebase/firestore"; 
import { useEffect } from 'react';
import WorksCard from '../UI/WorksCard';


  

const DashBoard = () => {

  

    const {logout } = useAuth()
    const db = getFirestore();
    const colRef = collection(db, 'works')
    const [description, setdescription] = useState("")
    const [img, setimg] = useState("")
    const [works, setworks] = useState([])
    const [loading, setloading] = useState(true)

    

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "works"), (snapshot) => {
        setworks(snapshot.docs.map(doc => ({

            ID: doc.id,
            ...doc.data(),
           
        })))
        setloading(false)})


        console.log(works)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
          await addDoc(collection(db, "works"), {
            Description: description,
            Image: img
          })  
          console.log("document added")
         
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
                {loading ?  <p>Loading</p> :  works.map((imgobj) =>{
                     return   <WorksCard key={imgobj.ID} imgobj={imgobj}/>
                   })}
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
