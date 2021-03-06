import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from '../ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <button className="transition btn-shadow duration-500 ease-in-out rounded-full p-2 "onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
                <FaSun
                    
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            ) : (
                    <FaMoon
                        
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                )}
        </button>
    );
};

export default Toggle;