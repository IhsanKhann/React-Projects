import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import "./ToggleTheme.css" ;

function ToggleTheme(){
    let {setLightTheme,setDarkTheme,Theme} = useContext(ThemeContext);

    const handleClick = () => {
        if(Theme === 'light'){
            setDarkTheme();
        }
        else{
            setLightTheme();
        }
    }
   
    return (
        <div className="toggle-container">
            <label className="switch">
            <input type="checkbox" checked={Theme === 'dark'} onChange={handleClick} />
                <span className="slider round"></span>
            </label>
        </div>
  );
}

export default ToggleTheme;