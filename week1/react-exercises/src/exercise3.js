import React, { useState } from 'react'
function Counter() {
     const [count, setCount] = useState(0);
     const value = count > 10 ? 'It is higher than 10!' : 'Keep...';
     return (
       <div className="counter">
           <p>{count} </p>
         <button onClick={() => setCount((count + 1))}>
         Add 1!
        </button>
     <p>{value}</p>
      </div>
    );
  }

  export default Counter;