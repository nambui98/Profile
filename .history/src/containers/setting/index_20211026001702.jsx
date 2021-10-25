import React, { useState } from 'react'
import { FaMoon, FaRegSun, FaSun } from 'react-icons/fa'
import colors from 'tailwindcss/colors'
import { ThemeContext } from '../ThemeContext';

export default function Setting() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    const [active, setActive] = useState(false)
    return (<div className={`relative transform duration-500 ${active?"translate-x-0":"translate-x-48"}`}>
            <button className="btn-shadow setting -left-52 top-8 rounded-full text-center w-10 h-10" onClick={()=>setActive(!active)}>
                <FaRegSun class="animate-spin duration-1000 text-3xl" style={{ animationDuration: "2s" }} fill={colors.coolGray[400]} />
            </button>
        <div className={`absolute top-0 right-0 rounded-3xl flex justify-center  p-7  shadow `} >
            {/* <div className={`absolute `}> */}

                <button className="btn-shadow-darklight btn-setting rounded-full text-center w-12 h-12" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? (
                    <FaSun
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer dark"
                    />
                ) : (
                        <FaMoon
                            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer light"
                        />
                    )}
                </button>
                <button className="btn-shadow-darklight btn-setting rounded-full text-center w-12 h-12">
                    <FaRegSun class="animate-spin duration-1000 text-3xl" style={{ animationDuration: "2s" }} fill={colors.coolGray[400]} />
                </button>
            {/* </div> */}
        </div>
        </div>
    )
}
