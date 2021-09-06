import React from "react";
import  './Header.scss'
import {ThemeContext} from "../../context/ThemeContext";

function Header() {

    const [darkMode, setDarkMode] = React.useState(false);

    const color = React.useContext(ThemeContext);

    const handleClik = ()=>{
        setDarkMode(!darkMode)
    }

    return(
        <div className='Header'>
            <h1 style={{color}}>REACT HOOKS</h1>
            <button type='button'
                    className='btn btn-primary'
                    onClick={handleClik}>
                {darkMode ? 'dark mode' : 'light mode'}
            </button>
        </div>
    )
}

export {Header}
