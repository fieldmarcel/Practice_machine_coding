import React from 'react'
import {    useState, useEffect} from 'react';
// import axios from "axios";
const Api = () => {

const [data, setData] = useState([])
const  [loading, setloading]= useState(true)
const  [search, setsearch]= useState("")
const [input, setInput] = useState(""); 

const handlechange=(e)=>{
  setInput(e.target.value);
}


const handlesubmit=(e)=>{
    e.preventDefault();
setsearch(input);
setInput("");
}
const handledata= async()=>{
try {
    
    const res= await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data= await res.json();

    // const limitdata= data.slice(0,3).map((item)=>(
    //     {
    //           name:item.name.toUpperCase(),
    //         email:item.email.toLowerCase()
    //     }
    // ))
     setData(data);
}

 catch (error) {
    console.log( "erro in fetching data",error)
}
finally{
    setloading(false);
}
}
useEffect(()=>{
    handledata();
},[])
if(loading){
    return <h1>loading...</h1>
}

const q= search.toLowerCase();
const selected= data.filter((item)=>(
    item.name.toLowerCase().includes(q) ||
    item.email.toLowerCase().includes(q)
))
  return (
    <div>
<div>
<h1 className='text-3xl fornt-bold text-red-400'>api data</h1>

<form onSubmit={handlesubmit} >
<label > search here </label> 
 <input onChange={handlechange}  type="text"  placeholder='input' value={input} />

<button type='submit'> submit</button>

</form>


<div className='flex flex-wrap justify-center items-center w-3/4 '> {
selected.map((item)=>{
        return(
        <div key={item.id} className='flex flex-col'>
            <h1 >{item.name.toUpperCase()}</h1>
            <h1 >{item.email.toUpperCase()}</h1>
            <h1 >{item.phone}</h1>
            <hr/>
        </div>

        )
    })
    
    }</div>

</div>



    </div>
  )
}

export default Api