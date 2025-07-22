import { createContext } from 'react' ;
import { useState } from 'react';

const UserContext = createContext({});

const UserProvider = ({children}) => {
    let [user,setuser] = useState({
        username: '',
        password: '',
    })

    let [isLoggedIn,setlogin] = useState(false);

    return(
        <>
            <UserContext.Provider value={{user,setuser,isLoggedIn,setlogin}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export {UserProvider} ;
export default UserContext;