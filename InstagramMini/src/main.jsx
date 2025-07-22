import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' ;
import { router } from './Router.jsx'; // ✅ Correct: named import
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './components/Context/UserContext.jsx';
import { ThemeProvider } from "./components/Context/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </ThemeProvider>
)

// you have to wrap the routes inside the router. We gonna use the path,element,children syntax and not the <Routes> <Route></Route> </Routes> 
