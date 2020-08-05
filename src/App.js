import React ,{useState,useEffect}from 'react';
import axios from "axios";
import logo from './logo.svg';
import Createnote from './component/CreateNote';
import Header from './component/Header';
import Note from './component/Note';
import './App.css';

function App() {
  //const [users, setUsers] = useState([]);
  const [total, setTotal] = useState([]);
  const [postTotal,setpostTotal]=useState([])
  const [to, setTo] = useState();
  const [search,setSearch]=useState(true)
  const [header,setHeader]=useState(true)

 let value=[];

 const change=(val,total)=>{
    setSearch(val)
    if(val==false){
    setTotal(total)
    }
    else{
       setTotal(postTotal)
    }
    console.log("changing")
 }

// const header=(val)=>{
// setTotal(value)
// }

 useEffect(() => {
   
  axios.get('http://localhost:8000/api/getAll')
      .then(res => {
          setTotal(res.data.result);
          setpostTotal(res.data.result);
         
      })
      .catch(err => {
         console.log(err.message);
         
      })
   
}, []);
 

 console.log("hellossss")
  const add=(note)=>{
  //   setTotal((data)=>{
  //     if(note.title.length>0 && note.text.length>0)
  //    return [...data,note];
  //    else{
  //      return [...data];
  //    }

  // })
  }


  const ondelete=(id)=>{
   
    
      axios.delete('http://localhost:8000/api/'+id)
          .then(res => {
            // setTo(res.data.result);
             window.location.reload ()
             console.log(res);
             
          })
          .catch(err => {
             console.log(err.message);
             
          })
    
         
             
  
  
   }

   const edit=(obj,id)=>{
    //alert(obj,id)
   }



   
  return (
    <>
   
    <div className="headerflex">
    

    <Createnote/>

    
    
     </div>

     <div className="headerflex">
 
     {

total.map((obj,index)=>{
   
//console.log(obj._id);
return <Note  key={index} id={obj._id} deleteiteam={ondelete} obj={obj} change={edit} />;
})

}
     </div>
     </>
  );
}

export default App;
