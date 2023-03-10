import React, { useContext } from "react";
import { AccountContext } from "./account-context";

export default function Home() {
    const {value, setValue} = useContext(AccountContext);
    return (
        <>
            <h1 style={{marginTop: '10%'}}>Welcome to Boys On Trial's Website.</h1>
<h2>20 Years in the making.</h2>
            <p>H.O.M.E.</p>
            <h1>{value}</h1>
            <button onClick={() => setValue('hey chump')}>Change Value</button>
        </>
        
    );
}