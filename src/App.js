import { useState,useEffect } from 'react';
import './App.css';
import AllNotes from './components/AllNotes';
import Search from './components/Search';
import { v4 as uuidv4 } from "uuid"; 

function App() {
  const [input,setInput]=useState("")
  const [note, setNote]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [clear,setClear]=useState(false);
  let charLen=200;

  const addHandler=(e)=>{
    e.preventDefault();
    setNote([
        ...note,{text: input,id:uuidv4()}
    ]);
    setInput("");
  }

  const deleteHandler=(id)=>{
   const newNotes= note.filter((n)=>n.id!==id);
   setNote(newNotes);
  }

  const updateHandler=(id,newtext)=>{
    const updatedNotes=note.map((n)=> n.id===id ? {...n,text:newtext} : n );
    setNote(updatedNotes);
  }

  useEffect(()=>{
    if(clear){
      setNote([]);
      localStorage.setItem("notes-key",JSON.stringify(note));
      setClear(false);
    }
  },[clear]);

  useEffect(()=>{
    let stored_notes=JSON.parse(localStorage.getItem("notes-key"));
    if(stored_notes){
      setNote(stored_notes);
    }
  },[]);

  useEffect(() => {
   localStorage.setItem("notes-key",JSON.stringify(note));
  },[note]);

  return (
    <>
    <div className='note-taking-app'>
      <div className='header'>
        <Search handleSearch={setSearchText}/>
        <button type='submit' onClick={()=>{setClear(true)}}>CLEAR ALL NOTES</button>
      </div>
      <div className='main-content'>
        <AllNotes note={note.filter((n)=>n.text.toLowerCase().includes(searchText))} setNote={setNote} input={input} setInput={setInput} addHandler={addHandler}
          handleDelete={deleteHandler} handleUpdate={updateHandler} charLen={charLen}/>
      </div>
    </div>
    </>
  );
}

export default App;