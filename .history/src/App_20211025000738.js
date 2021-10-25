import './App.css';
import './index.scss';
import { FaFacebookF, FaFilePdf, FaGoogle, FaInstagram, FaInstagramSquare } from "react-icons/fa";
const colors = require('tailwindcss/colors')
console.log(colors.amber[300]);
function App() {
    return (

        <div className="App">
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="relative rounded-3xl w-6/12 p-6 h-96 m-4 bg-app shadow flex justify-center items-center flex-col">
                    <h1 className="text-black dark:text-white text-3xl text-center font-extrabold">Bùi Văn Nam</h1>
                    <p className="text-gray-400 dark:text-white tracking-widest font-bold">Hưng Yên</p>
                    <div className="flex mt-4">
                        <button className="btn-shadow rounded-full text-center w-14 h-14"><FaFacebookF className="text-3xl" fill={colors.coolGray[400]} /></button>
                        <button className="btn-shadow rounded-full text-center w-14 h-14 mx-5"><FaInstagramSquare className="text-3xl" fill={colors.coolGray[400]} /></button>
                        <button className="btn-shadow rounded-full text-center w-14 h-14"><FaGoogle className="text-3xl" fill={colors.coolGray[400]} /></button>
                    </div>
                    <div className="absolute bottom-10 right-20 left-20 flex items-center justify-between">
                        <span className="flex items-center"><button className="btn-shadow rounded-full text-center w-10 h-10"><FaFilePdf className="text-xl" fill={colors.coolGray[400]} /></button><span className="ml-2">Download my CV</span></span>
                        <span className="flex items-center"><button className="btn-shadow rounded-full text-center w-10 h-10"><FaFilePdf className="text-xl" fill={colors.coolGray[400]} /></button><span className="ml-2">Download</span></span>
                    </div>
                </div>
                <div className="rounded-3xl w-4/12 p-6 h-96 m-4 bg-app shadow flex items-center">
                </div>
            </div>
        </div >
    );
}

export default App;
