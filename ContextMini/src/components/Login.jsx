// Here values are set while in the Profile we get the values.

import { useState,useContext } from "react";
import UserContext from "../Context/UserContext.jsx";

function Login(){
    // let user = useContext(UserContext);

    let [username,setUserName] = useState('')
    let [password, setPassword] = useState('')
   
    
    const {setuser,setLogin}  = useContext(UserContext) ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        setuser({username,password}) ;
        console.log(username,password) ;
    }

    const handleUserName = (e) => {
        setUserName(e.target.value) ;
        setLogin(true);
    } 

    return(
        <>  
            <form onSubmit={handleSubmit}>
                <input
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e)=> handleUserName(e)}
                />


                <input type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" >
                    Login
                </button>
            </form>
        </>
    )
}

export default Login ;