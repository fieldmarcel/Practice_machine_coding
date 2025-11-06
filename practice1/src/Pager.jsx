import React from 'react'
import { useState } from 'react'

const data = [
    {
        "id": 1,
        "title": " React",
        "para": "React is a JavaScript library used for building reusable UI components. It uses a component-based architecture and a virtual DOM for efficient rendering."
    },
    {
        "id": 2,
        "title": "State",
        "para": "Props are inputs passed from parent to child components, while state is managed internally within a component. State changes trigger UI re-renders."
    },
    {
        "id": 3,
        "title": "Hooks ",
        "para": "Hooks like useState and useEffect allow functional components to manage state and side effects. They simplify code and reduce dependency on class components."
    },
    {
        "id": 4,
        "title": " Router",
        "para": "React Router is a library that enables navigation between pages in a React application without refreshing the browser, maintaining a single-page application behavior."
    }
]




const Pager = () => {
    const [toggle, settoggle] = useState(null);


    const handlebutton = (goods) => {

        settoggle(goods);
// setpara(data.title)
 console.log(goods);
 
    }



    return (
        <div>
            <h1>pager</h1>
            <div className='flex flex-row' >
                {
                data.map((item, index) => (
<div  className=" cursor-pointer w-[200px] mx-auto flex-row flex  justify-between border p-3 rounded-md bg-gray-50"
>
    {/* //argument to handlebutton function  */}
<button onClick={()=>handlebutton(item)} key={index.id}>{item.title}</button>
     </div>  ))}
            </div>
            {
            (
                toggle &&    <div>   
        {/* <div className=' bg-neutral-200  m-4' >{toggle.title}</div> */}
        <div className=' bg-neutral-200  m-4'>{toggle.para}</div>
</div>
          ) }


        </div>
    )
}

export default Pager