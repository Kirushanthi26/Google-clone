import React,{useState} from 'react';
import './CreateNote.css';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const[isExpanded,setIsExpanded] = useState(false);

    const[note,setNote]= useState({
        title:"",
        content:""
    });

    const expand =()=>{
        setIsExpanded(true);
    };

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value,
            }
        })
    }
    const submitNote = (event)=>{
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        setIsExpanded(false);
    }


    return (
        <div>
            <form className="create-note">
                {isExpanded &&
                <input name="title" placeholder="Title" type="text" 
                onChange={handleChange}
                value={note.title}/>}
                <textarea name="content" placeholder="Take a Note.." 
                onClick={expand} 
                onChange={handleChange}
                rows={isExpanded ? 3:1}
                value={note.content}/>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateNote
