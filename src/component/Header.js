import React ,{useState} from 'react';
import logo from '../image/logo.jpg';
import './header.css'
function Header(props) {


    
    const [header, setHeader] = useState([]);
    const itemEvent = (value) => {
        if(value.length!=0){
            props.search(false,header);
           }
           else{
            props.search(true); 
            //window.location.reload() 
           }
        fetch("http://localhost:8000/api/search",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:value
        
            })
        }).then((data)=>data.json()).then(result=>{
           console.log(result.user)
            setHeader(result.user)
            
        })
       
       };



    return (
 <>
<div className="header">

    <labe>Todolist</labe>
    
    </div>




 </> 
 );
}

export default Header;
