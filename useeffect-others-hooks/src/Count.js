import React, { useEffect, useState } from "react"

const Count = ()=>{
    const[count, setCount] =useState(1);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('update count')
            setCount(count+1)
        },1000)
   
        return()=>{
           clearInterval(timer)          
        }
      },[count])
    

    return(
        <>
        <h1>bo dem count 1</h1>
        <h1 id="heading">{count}</h1>
        <button onClick={()=>setCount(count+1)}>thay doi count</button>
        </>
    )
}
export default Count