import { useState } from "react";
import {MdDeleteForever} from "react-icons/md"

const Notes=({notee,idd,handleDelete,handleUpdate,charLen})=>{
    const [edit,setEdit]=useState(notee);
    const handleEditClick = () => {
        handleUpdate(idd, edit);
      };
    return(
        <>
            <textarea placeholder="please type here" onChange={(e)=>{if(charLen-e.target.value.length>=0){setEdit(e.target.value)}}} value={edit}></textarea>
            <div className="note-footer">
                <small>{charLen-edit.length} Remaining</small>
                <MdDeleteForever className="delete-icon"  onClick={()=>handleDelete(idd)}/>
                <button className="save" onClick={handleEditClick}>SAVE</button>
            </div>
        </>
    )
}
export default  Notes;