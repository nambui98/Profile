import './App.css';
import './index.scss';
import { FaFacebookF, FaFilePdf, FaGoogle, FaInstagram, FaInstagramSquare, FaPrint } from "react-icons/fa";
import avatar from './assets/img/Logo.jpg'
const colors = require('tailwindcss/colors')
console.log(colors.amber[300]);
function App() {
    return (

        <div className="App">
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="relative rounded-3xl w-6/12 p-6 h-3/6 m-4 bg-app shadow flex justify-center items-center flex-col">
                    <h1 className="text-black dark:text-white text-3xl text-center font-extrabold">Bùi Văn Nam</h1>
                    <p className="text-gray-400 dark:text-white tracking-widest font-bold">Hưng Yên</p>
                    <div className="flex mt-4">
                        <button className="btn-shadow rounded-full text-center w-14 h-14"><FaFacebookF className="text-3xl" fill={colors.coolGray[400]} /></button>
                        <button className="btn-shadow rounded-full text-center w-14 h-14 mx-5"><FaInstagramSquare className="text-3xl" fill={colors.coolGray[400]} /></button>
                        <button className="btn-shadow rounded-full text-center w-14 h-14"><FaGoogle className="text-3xl" fill={colors.coolGray[400]} /></button>
                    </div>
                    <div className="absolute bottom-10 right-20 left-20 flex items-center justify-between">
                        <span className="flex items-center"><button className="btn-shadow rounded-full text-center w-12 h-12"><FaFilePdf className="text-xl" fill={"#e74c3c"} /></button><span className="ml-3">Download my CV</span></span>
                        <span className="flex items-center"><button className="btn-shadow rounded-full text-center w-12 h-12"><FaPrint className="text-xl" fill={"#e74c3c"} /></button><span className="ml-3">Print my resume</span></span>
                    </div>
                </div>
                <div className="rounded-3xl w-4/12 h-auto m-4 bg-app shadow flex items-center flex-col py-10 px-6">
                    <div className="wrap-avatar">
                        <div class="avatar">
                            <img src={avatar} alt="" />
                        </div>
                    </div>
                    <h1 className="text-gray-400">Nam Bùi</h1>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default App;
