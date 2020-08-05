import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import './createnote.css'
import { TextField } from '@material-ui/core';



 const CreateNote=(props)=> {
    
    const obj={
        title:"",
        text:""
    }
    const [note, setNote] = useState(obj);

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    console.log(date)
   
    const itemEvent = (event) => {
     const {name,value}=event.target;
        setNote((prev)=>{
           return {...prev,
            [name]:value
            }

        });


    };

    const setIteam=()=>{ 
       //props.pass(note)
       setNote(obj);
       axios.post('http://localhost:8000/api/postNote', {
         title: title,
         note: text,
         date:date
       })
       .then(function (response) {
       window.location.reload();
         
         console.log(response);
         console.log(date);
       })

    }



    return (
 <>
 
<div className="main">
   
Todolist
       <input type="text" placeholder="Title" name="title" autoComplete="off" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
       <textarea  placeholder="Write A Note" name="text" onChange={(e)=>{setText(e.target.value)}} value={text}/>
       <TextField
     id="date"
     label="Select deadLine"
     type="date"
     defaultValue="-- -- --"
     onChange={(e)=>{setDate(e.target.value)}} value={date}
     InputLabelProps={{
      shrink: true,
    }}
   
  />
   <br/>
      <Button onClick={setIteam}><AddIcon /></Button>
       
      
    
</div>

 </> 
 );
}

export default  CreateNote;
