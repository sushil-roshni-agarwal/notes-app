import Notes from "./Notes";
import Note from "./Note";
const AllNotes=({note,setNote,input,setInput,addHandler,handleDelete,handleUpdate,charLen})=>{
    return(
        <>
        <div className="grid-container">
            <div >
                <Note input={input} setInput={setInput} note={note} setNote={setNote} addHandler={addHandler} charLen={charLen}/>
            </div>
            {
                note.map((n)=>(
                    <div className="new-note" key={n.id}>
                        <Notes notee={n.text} idd={n.id} handleDelete={handleDelete} handleUpdate={handleUpdate} charLen={charLen}/>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default AllNotes;