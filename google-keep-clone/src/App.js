import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import CreateNote from './components/CreateNote/CreateNote';
import Note from './components/Note/Note';
import Fooder from './components/Fooder/Fooder';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote)=>{
    setNotes((prevNotes)=>{
      return[...prevNotes, newNote]
    })
  }
  const deleteNote =(id)=>{
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem, index)=>{
        return index!==id
      })
    })
  }
  return (
    <div className="App">
      <Header/>
      <CreateNote onAdd={addNote}/>
      {notes.map((note, index)=>{
        return(<Note id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
          )
      })}
      <Fooder/>
    </div>
  );
}

export default App;
