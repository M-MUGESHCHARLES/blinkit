import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

export const AddCartButton = (ProductName) => {
   const [count, setCount] = useState(0);

   useEffect( () => {
      console.log('Product Name : ', ProductName);
   }, []);

   const handleClick = () => {
    console.log(`Add to Cart Button clicked : ${ProductName}` );
   };

   return (
     <Button
       variant={count > 0 ? "contained" : "outlined"}
       color="success"
       className="m-0 p-0 ms-auto"
       onClick={handleClick}
     >
       {count === 0 ? (
         <span className="py-2 w-100" onClick={() => setCount(1)}>
           ADD
         </span>
       ) : (
         <div className="d-flex align-items-center w-100">
           <span
             style={{ cursor: "pointer", minWidth: "fit-content" }}
             className="p-0 m-0 py-2 px-2 h-100 w-auto"
             onClick={() => setCount(count - 1)}
           >
             -
           </span>
           <span className="mx-auto">{count}</span>
           <span
             style={{ cursor: "pointer", minWidth: "fit-content" }}
             className=" p-0 m-0 py-2 px-2 h-10 w-auto"
             onClick={() => setCount(count + 1)}
           >
             +
           </span>
         </div>
       )}
     </Button>
   );
 };
