import React from 'react'
import { FaMoon, FaRegSun, FaSun } from 'react-icons/fa'
import colors from 'tailwindcss/colors'
import { ThemeContext } from '../ThemeContext';

export default function Index() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <div>
            <button className="btn-shadow rounded-full text-center w-14 h-14">
                <FaRegSun class="animate-spin duration-1000 text-3xl" style={{ animationDuration: "2s" }} fill={colors.coolGray[400]} />
            </button>
            <div className="transition btn-shadow-darklight duration-500 ease-in-out rounded-full p-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
                <FaSun
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer dark"
                />
            ) : (
                    <FaMoon
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer light"
                    />
                )}
        </div>
        </div>
    )
}
