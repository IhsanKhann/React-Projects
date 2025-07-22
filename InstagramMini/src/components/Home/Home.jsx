// import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx" 
import './Home.css' ;

function Home(){
    return(
        <>  
            <div className="home"> 
                <Header/>
                <h2>Welcome to Instagram</h2> 
            </div>
        </>
    )
}

export default Home ;
// I am using this as my Layout basically.