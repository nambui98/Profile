import React, { useState } from 'react'
import { FaMoon, FaRegSun, FaSun } from 'react-icons/fa'
import colors from 'tailwindcss/colors'
import { ThemeContext } from '../ThemeContext';

export default function Setting() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    const [active, setActive] = useState(false)
    return (
        <div className={`relative rounded-3xl flex transform py-7 duration-500 shadow ${active?"translate-x-0":"translate-x-32"}`} >
            <button className="absolute -left-8 -top-0 btn-shadow rounded-full text-center w-10 h-10" onClick={()=>setActive(!active)}>
                <FaRegSun class="animate-spin duration-1000 text-3xl" style={{ animationDuration: "2s" }} fill={colors.coolGray[400]} />
            </button>
            {/* <div className={`absolute `}> */}

                <div className="transition duration-500 w-10 h-10 ease-in-out rounded-full p-2 mt-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
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
                <button className="btn-shadow rounded-full text-center w-10 h-10">
                    <FaRegSun class="animate-spin duration-1000 text-3xl" style={{ animationDuration: "2s" }} fill={colors.coolGray[400]} />
                </button>
            {/* </div> */}
        </div>
    )
}
