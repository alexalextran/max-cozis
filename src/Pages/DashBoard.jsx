
import { useAuth } from '../Contexts/AuthContext';
import React from 'react';
import { useState } from 'react';
import FileBase from 'react-file-base64'
import { collection, addDoc, getFirestore, onSnapshot, updateDoc, doc  } from "firebase/firestore"; 
import { useEffect } from 'react';
import WorksCard from '../UI/WorksCard';


  

const DashBoard = () => {
    const [ID, setID] = useState();
    const {logout } = useAuth()
    const db = getFirestore();
    const [description, setdescription] = useState("")
    const [img, setimg] = useState("")
    const [works, setworks] = useState([])
    const [loading, setloading] = useState(true)

    

    useEffect(() => {

        //fetch all documents from db (using snapshot allows for a realtime db)
        onSnapshot(collection(db, "works"), (snapshot) => {
        setworks(snapshot.docs.map(doc => ({
            //generate array and populate with id and doc data
            ID: doc.id,
            ...doc.data(),
        })))
        setloading(false)})
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  


    const handleSubmit = async (e) => {
        e.preventDefault()
        //if ID is null then add new document else update document
        if(ID == null){
            try{
                //add document with desc and image
                await addDoc(collection(db, "works"), {
                  Description: description,
                  Image: img
                })  
                console.log("document added")
               
              } catch(e){
                  console.log(e)
                  window.alert("Something went wrong (image sizes need to be less than 1mb), contact alex")
              }  
        }
        else{
            try{
                //update doc based off ID, can only change description
                await updateDoc(doc(db, "works", `${ID}`), {
                  Description: description,
                })  
                console.log("document updated")
              } catch(e){
                  console.log(e)
                  window.alert("Something went wrong, contact alex")
              }  
        }
         
    }


    const handleClear = (e) => {
        e.preventDefault()
        setID()
        setdescription("")
    }

    async function logoutUser(e){
        e.preventDefault()
        try{
         await logout()
        } catch{
            window.alert("Failed To log out!")
        }
        
        
    }
    return (
        <section className='dashboard'>
            <h1>Dashboard  <button onClick={logoutUser}>logout</button></h1>

            <div className='dashboard__main'>
                <div>
                {
                // only show works when done loading
                loading ?  <p>Loading</p> :  works.map((imgobj) =>{
                return   <WorksCard key={imgobj.ID} imgobj={imgobj} setID={setID} setdescription={setdescription}/>
                })
                }
                </div>
                <div>
                <form onSubmit={handleSubmit}>
                <h2>{ ID ? "Editing Works" : "Adding Works"}</h2>
            <p>Description</p>
            <textarea required name="description" value={description} onChange={e => setdescription(e.target.value)}></textarea>
            <p>File</p>
            
            <FileBase 
            type="file"
            multiple={false}
            onDone={({base64})=>  setimg(base64)}
            />

            <button onClick={handleSubmit}>{ID ? "Edit" : "Add"}</button>
            <button onClick={handleClear}>Clear</button>
            </form>
            </div>
            </div>


           
        </section>
    );
}

export default DashBoard;
