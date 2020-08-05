import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Checkbox } from '@material-ui/core';
import './note.css'
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';



const Note = (prop) => {
  const [title, setTitle] = useState(prop.obj.title)
  const [note, setNote] = useState(prop.obj.note)
  const [date, setDate] = useState(prop.obj.date)
  const [edit, setEdit] = useState(true)
  const [user, setUser] = useState({})
  const primary = blue[500];
  const g = green[700];
  const r = red[700]


  const deletenode = () => {
    console.log(prop.id);
    prop.deleteiteam(prop.id);
  }


  const itemEvent = (event) => {
    const { name, value } = event.target;


    let obj = {
      [name]: value
    }

    prop.change(obj, prop.id);


  };
  const Edit = () => {
    if (edit) {
      //  console.log(title)
      console.log(prop.id)

      setEdit(false);
    }
    else {
      setEdit(true)
      fetch("http://localhost:8000/api/edit", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          note,
          id: prop.id
        })
      })



    }
  }



  const complete=()=>{
    
  
      
      fetch("http://localhost:8000/api/complete",{
         method:"post",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
      
             id:prop.id
         })
     }).then(data=>data.json()).then(result=>{
       setUser(result.user)
       //console.log(result.user)
     })
   
   window.location.reload()
   
    
     }






  // const complete = () => {

  //   setCom(true)

  // }

  const render = () => {
    if (prop.obj.complete) {
      return (
        <>
          <Checkbox
            defaultChecked
            style={{ color: g }}

          />
          <Button onClick={deletenode} ><DeleteIcon /></Button>
        </>
      )
    }
    else {


      return (
        <>
          <Button onClick={deletenode} ><DeleteIcon /></Button>
          <Button onClick={Edit} ><EditIcon /></Button>
          <Button onClick={complete} style={{ color: r }}>{"complete "}</Button>
        </>
      )
    }
  }

  return (
    <>
      <div className="notemain">
        <form>
          <span >{date}</span>
          <input type="text" name="title" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} value={title} readOnly={edit} />
          <textarea placeholder="Write A Note" name="text" onChange={(e) => { setNote(e.target.value) }} value={note} readOnly={edit} />
          {render()}

        </form>

      </div>
    </>
  );
}

export default Note;
