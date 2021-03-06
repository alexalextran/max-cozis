import React from 'react';
import {MdDelete} from 'react-icons/md'
import {RiEdit2Line} from 'react-icons/ri'
import { doc, deleteDoc, getFirestore } from "firebase/firestore";


const WorksCard = ({imgobj, setID, setdescription }) => {

    const db = getFirestore();


    const deleteWork = async () => {
        try{
         await deleteDoc(doc(db, "works", `${imgobj.ID}`));
         console.log("deleted")
        } catch(e){
            console.log(e)
        }
        
    }


    return (
        <div className='card'>
            <img src={imgobj.Image} alt="worksimage"></img>
                <div className='card__buttons'>
                    <MdDelete onClick={deleteWork} className="card__button"/>
                    <RiEdit2Line className="card__button" onClick={() => {
                        setdescription(imgobj.Description)
                        setID(imgobj.ID)}}/>
                </div>
                <p>
                    {imgobj.Description}
                </p>
        </div>
    );
}

export default WorksCard;
