import React from 'react';
import {MdDelete} from 'react-icons/md'
import {RiEdit2Line} from 'react-icons/ri'
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const WorksCard = ({imgobj}) => {
    const db = getFirestore();
    const deleteWork = async () => {
        try{
         await deleteDoc(doc(db, "works", `${imgobj.ID}`));
         console.log("deleted")
         document.location.reload()
        } catch(e){
            console.log(e)
        }
        
    }


    return (
        <div className='card'>
            <img src={imgobj.Image} alt="worksimage"></img>
                <div className='card__buttons'>
                    <MdDelete onClick={deleteWork}/>
                    <RiEdit2Line/>
                </div>
                <p>
                    {imgobj.Description}
                </p>
        </div>
    );
}

export default WorksCard;
