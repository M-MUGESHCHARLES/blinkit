import React, { useState } from 'react'

export const AddCartButton = () => {
   const [count, setCount] = useState(0);

   return (
     <div className="ms-auto">
       {count === 0 ? (
         <button
           className="btn btn-outline-success h-100 "
           onClick={() => setCount(1)}
         >
           ADD
         </button>
       ) : (
         <div className="btn btn-success h-100 d-flex align-items-center" style={{width:'fit-content'}} >
           <button
             className="btn btn-success p-0 m-0"
             onClick={() => setCount(count - 1)}
           >
             -
           </button>
           <span className="mx-2">{count}</span>
           <button
             className="btn btn-success p-0 m-0"
             onClick={() => setCount(count + 1)}
           >
             +
           </button>
         </div>
       )}
     </div>
   );
 };
