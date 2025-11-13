import React from 'react'
import { useState,useEffect } from 'react'

const Form3 = () => {

    const [name, setname]=useState("")
    const [pass, setpass]= useState("")
    
    const [x, setx]=useState("")
    const [y, sety]= useState("")
    
// const[arr,setarr] = useState([])

    

    const handlesubmit=(e)=>{
e.preventDefault()
setx(name)
sety(pass)
setname("");
setpass("")
    }

  return (
    <div>
<div className='flex  items-center justify-center'>

<form onSubmit={handlesubmit} className='flex flex-row'  action="submit">

    <label htmlFor="" >Username</label>
<input type="text"  value={name} onChange={(e)=>setname(e.target.value)} placeholder='name' />
<label htmlFor="">Password</label>
<input type="text"  onChange={(e)=>setpass(e.target.value)} value={pass} placeholder='password' />


<button type='submit'>Submit</button>
</form>
</div>

<div>
    <h2>{x}</h2>
    <h2>{y}</h2>
  
</div>

    </div>
  )
}

export default Form3