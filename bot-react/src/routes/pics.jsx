import React, { useContext, useState } from "react";
import { AccountContext } from "./account-context";

export default function Pics() {
    const {value, setValue} = useContext(AccountContext);
    return (
        <>
            <p style={{margin: '15%'}}>PICS PICS PICS PICS</p>
            <h1>{value}</h1>
            <button onClick={() => setValue('hey chump')}>Change Value</button>
        </>
        
    );
}
// import { useContext } from "react";

// export default function AllData(){
//     // const user = useContext(UserContext);
//     return (
//       <>
//       <h5>All Data in Store</h5>
//       {JSON.stringify()}<br/>
//       {/* <h1>{user.name}</h1> */}
//       </>
//     );
//   }
  