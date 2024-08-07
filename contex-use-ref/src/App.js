import React, { useRef, useState } from 'react'
import Component1 from './Component1'

const App = () => {
  const valueRef = useRef(10)
  const [valueState, setValueState] = useState(20)
  let valueNormal = 30;

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)

  

    const handleFocus =()=>{
      inputRef1.current.focus();
    }
    const handleFocus2 =()=>{
      inputRef2.current.focus();
    }
    console.log('=================================================')
    console.log('gia tri useRef',valueRef.current)
    console.log('gia tri cua useState' , valueState)
    console.log('gia tri cua bien bth' , valueNormal)

    //* Đối với biến bình thường
	// => Khi thay đổi giá trị => không gây ra re-render (render lại)
	// => Khi componenent render lại => biến đó sẽ bị reset lại (khởi tạo lại)

	//* Đối với giá trị được khởi tạo từ state
	// => Khi thay đổi giá trị => render lại component
	// => Khi component render lại => biến đó vẫn giữ nguyên giá trị (không bị khởi tạo lại)

	//* Đối với giá trị được khởi tạo từ useRef
	// => Khi đổi giá trị => không gây ra re-render 
	// => Khi component render lại => biến đó vẫn giữ nguyên giá trị (không bị khởi tạo lại)
    const handleChangeValueRef=()=>{
      valueRef.current = valueRef.current+1
    }
    const handleChangeValueState=()=>{
      setValueState(valueState +1)
    }
    const handleChangeValueNormal=()=>{
      valueNormal =valueNormal + 1;
    }

  return (
    <>
    <div>
      <button onClick={handleChangeValueRef}>thay doi valueRef</button>
      <button onClick={handleChangeValueState}>thay doi va;ueState</button>
      <button onClick={handleChangeValueNormal}>thay doi valueNormal</button>
    </div>
    <br/>
      <div>
        <div>
              <input ref={inputRef1} type='text'/>
              <button onClick={handleFocus}>Focus vao input 1</button>
        </div>
              <input ref={inputRef2} type='text'/>
              <button onClick={handleFocus2}>Focus vao input 2</button>
      </div>
      <h1>tree Component</h1>
      <Component1/>

      
    </>
  )
}

export default App