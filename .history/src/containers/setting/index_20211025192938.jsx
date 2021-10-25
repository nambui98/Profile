import React from 'react'
import { FaRegSun } from 'react-icons/fa'
import colors from 'tailwindcss/colors'

export default function index() {
    return (
        <div>
            <button className="btn-shadow rounded-full text-center w-14 h-14">
                <FaRegSun class="animate-spin duration-1000 text-3xl" style={{ animationDuration: "2s" }} fill={colors.coolGray[400]} />
            </button>
        </div>
    )
}
