import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile(){
    const {user,isLoggedIn} = useContext(UserContext) ;

    
    if(!isLoggedIn) return <h2> Please Login!</h2>
    else{
    return(
        <>
            <div>
                <h2> Username: {user.username} </h2>
                <h2> Password: {user.password} </h2>
            </div>
        </>
    )}
}

export default Profile;