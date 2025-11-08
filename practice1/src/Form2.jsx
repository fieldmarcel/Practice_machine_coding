import React from 'react'
import { useState,useEffect } from 'react'


const Form2 = () => {

const [data, setdata]= useState([])


    const handledata= async()=>{
        try {
            
const res= await fetch(`https://dummyjson.com/comments`)
const data= await res.json();

const limitdata= data.comments.slice(0,10);
setdata(limitdata);

        } catch (error) {
            console.error("xgeting error ", error)
        }
    }


    useEffect(()=>{
        handledata();
    },[])

let x=0;

for(let i=0;i<data.length;i++){
    x= x+data[i].postId;
    x= x+data[i].likes;
}

let y=[];

for( let i=0;i <data.length;i++){
    if(data[i].postId >=200){
        y.push(data[i]);
    }
}

y.sort((a,b)=> a.user.username.localeCompare(b.user.username));

 const reducedata= data.reduce((sum ,item)=>sum+item.likes +item.postId,0)


const filtered= data.filter(item=> item.likes >=3)

 const sorted= [...filtered].sort((a,b)=>a.user.username.localeCompare(b.user.username))

// const filterAndSorted= [...data].filter(item=> item.postId %2===0)
//                             .sort((a,b)=> a.postId - b.postId)
return (
    <div>


return (
  <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
    <div className="w-full max-w-3xl space-y-6">

      {/* Totals */}
      <div className="bg-white shadow-md rounded-lg p-4 flex justify-between text-lg font-semibold">
        <div>Sum (x): <span className="text-blue-600">{x}</span></div>
        <div>Reduce Sum: <span className="text-green-600">{reducedata}</span></div>
      </div>

      {/* List Items */}
      <div className="space-y-4">
        {y.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="text-gray-800 font-medium mb-2">{item.body}</div>

            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Likes: <span className="text-purple-600 font-semibold">{item.likes}</span></span>
              <span>Post ID: <span className="text-blue-600 font-semibold">{item.postId}</span></span>
            </div>

            <div className="text-sm text-gray-700 mt-2">
              <div>Username: <span className="font-semibold text-gray-900">{item.user.username}</span></div>
              <div>Name: <span className="font-semibold text-gray-900">{item.user.fullName}</span></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);

{/* 
<div>
<div>xxxx{x}</div>
<div>xxxx{reducedata}</div>

    {
       y.map((item)=>(
            <div key={item.id}>

<div >{item.body}</div>
<div >{item.likes}</div>

<div >{item.user.username}</div>
<div >{item.user.fullName}</div>

<div >{item.postId}</div>
            </div>
        ))
    }
</div> */}


    </div>
  )
}

export default Form2