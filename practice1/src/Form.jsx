import React from 'react'
import {useState} from 'react'

const form = () => {

    const [name,setname]= useState("");
    const [pass,setpass]= useState("");
    const [submit,setsubmit]= useState(false);
    const [arr,setarr]= useState([]);
const handlename=(e)=>{
    setname(e.target.value);

}
const handlepass=(e)=>{
    setpass(e.target.value);
}

const handlesubmit=(e)=>{
    e.preventDefault();
setsubmit(true);
setarr([...arr,{ name,pass}])
setname("");
setpass("");
}


  return (
    <div>
<h1>FORM</h1>

<form onSubmit={handlesubmit} className='border-red-300 border-2 flex-col w-2/5 flex justify-center items-center'>
<div className='flex flex-col pb-2'>
    <label > Name</label>
<input onChange={handlename} type="text" value={name} placeholder='enter name'
 />
 </div>

 <div className='flex flex-col pb-2'>
    <label >Password</label>
<input onChange={handlepass} type="password" value={pass} placeholder='enter pass'
 />
 </div>

<button type='submit'  className=' bg-green-300 p-2'>Submit</button>

</form>

<div> 
<h1>result</h1>

{
    submit && (
        <div>
{arr.map((item,index)=>(
   <div> <h2 key={index}>{item.name}</h2>
        <h2 key={index}>{item.pass}</h2>
</div>
   
))}

            </div>
    )
}


</div>


    </div>

    
  )
}

export default form