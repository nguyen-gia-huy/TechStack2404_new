import { useEffect, useState } from "react";
import Count from "./Count";


const App=()=>{
  // const[count, setCount] =useState(1);
  // const[count2, setCount2] = useState(1)
  const [showCount, setShowCount] = useState(false)  
    
    console.log('noi dung ngoai useEffect'); //out

    //useEffect se dc chay khi component render xong

    //useEffect(callback) => dependentce khong truyen gi
    //useEffect(callback,[]) => dependence la mang rong ([])
    //useEffect(callback,[param1,param2,...,paramN])=> dependence la mot mang va cac phan tu trong mang la cac param

    // const heading = document.getElementById('heading') //null
    // heading.innerHTML = 'th3'

//     useEffect(()=>{
//        console.log("useEffect khong truyen dependence" )//in  
//        // => se dc chay sau moi lan render
//     })

//     useEffect(()=>{
//       console.log("useEffect co dependence la mang rong []" )
//       //=>se dc chay sau lan render dau tien
//    },[])

//    useEffect(()=>{
//     console.log("useEffect co dependence la  [count2]" ) 
//     //=> se duoc chay sau lan render dau tien & se chay tiep sau nhung lan render ma count 2 thay doi
//  },[count2])

 

    return<div id="container">
      {/* <h1>bo dem count 1</h1>
      <h1 id="heading">{count}</h1>
      <button onClick={()=>setCount(count+1)}>thay doi count</button>

      <h1>bo dem count 2</h1>
      <h1 >{count}</h1>
      <button onClick={()=>setCount2(count2+1)}>thay doi count</button> */}


      {showCount && <Count/> }
      <button onClick={()=> setShowCount(!showCount)}>
        thay doi showCount
      </button>
    </div>

  }
export default App;