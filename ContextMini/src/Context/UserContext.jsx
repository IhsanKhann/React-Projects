import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";
const UserContext = createContext()
 // the attribues and functions come here.

const UserProvider = ({children}) => {
    let [user,setuser] = useState({
        username: "",
        password: ""
    })

    let [isLoggedIn,setLogin] = useState(false) ;

    return(
        <UserContext.Provider value={{user,setuser,isLoggedIn,setLogin}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider} ;
export default UserContext ;

// we can intilize the context empty as well, as well as put some kind of variables/parameters in it as well.