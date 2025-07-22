import { useState } from 'react'
import './App.css'
import UserContext from './Context/UserContext'
import Login from "./components/Login" ;
import Profile from './components/Profile';
import { UserProvider } from './Context/UserContext';

function App() {
  // Approach 1:
  // const [user,setuser] = useState({
  //   username: '',
  //   password: '',
  // })

  // const [isLoggedIn,setLogin] = useState(false)

  // return ( 
  //   <UserContext.Provider value={{user,setuser,setLogin,isLoggedIn}}>
  //       <h1>Hello World</h1>
  //       <Login/>
  //       <Profile/>
  //   </UserContext.Provider>
  // )

  // Approach 2:
  return(
    <UserProvider>
      <Login/>
      <Profile/>
    </UserProvider>
  )
}

export default App;
// either do this and give it value here as well or make a seperate function/like a component and simply export it. and then import it here in this file.
