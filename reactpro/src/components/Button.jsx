import React, { useState } from "react";
function Button() {


  const [count, setCount] = useState(0);  
  const [countdec, setCountdec] = useState(0);  
  function handleClick() {
    setCount(count + 1);
  }  

  function handledecClick() {
    setCount(count - 1);
  } 



  return <div>

     <h2> {count} </h2>
     <button onClick={handleClick}>Click Me Increment </button>
     <button className="mt-4" onClick={handledecClick}>Click Me Decrement</button>
  
   </div>;
  
}

export default Button;