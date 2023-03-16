// import { useBankContext } from "../utils/BankContext";
import React, {useContext} from 'react';
import { UserContext } from '../utils/UserContext';


export default function About() {
    const { user } = useContext(UserContext);
    // const msg = useContext(UserContext);

    return (
        <>
        <div style={{marginTop: '20%'}}>
            <p>I'm the All Data Page Actually</p>
            <h1>{JSON.stringify(user, null)}</h1>
            {/* {JSON.stringify(bank, null, 2)} */}
        </div>    
        </>
        
    );
}