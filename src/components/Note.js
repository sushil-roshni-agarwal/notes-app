import React from "react"
const Note=({input,setInput,addHandler,charLen})=>{
    const addChange=(e)=>{
        if(charLen-e.target.value.length>=0){
        setInput(e.target.value)
        }
    }
    return(
        <>
        <div className="new-note">
            <textarea placeholder="please type here" value={input} onChange={addChange}></textarea>
            <div className="note-footer">
            <small>{charLen-input.length} Remaining</small>
            <button className="save" onClick={addHandler}>Save</button>
            </div>
        </div>
        </>
    )
}
export default Note;