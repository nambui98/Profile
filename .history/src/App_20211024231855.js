import './App.css';
import './index.scss';
import { FaFacebookF } from "react-icons/fa";
function App() {
    return (

        <div className="App">
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="rounded-3xl w-6/12 p-6 h-96 m-4 bg-app shadow flex justify-center items-center flex-col">
                    <h1 className="text-black dark:text-white text-3xl text-center font-extrabold">Bùi Văn Nam</h1>
                    <p className="text-gray-400 dark:text-white tracking-widest font-bold">Hưng Yên</p>
                    <div className="">
                        <button className="btn-shadow rounded-full"><FaFacebookF style={{ fill: "colors.coolGray" }} /></button>
                    </div>
                </div>
                <div className="rounded-3xl w-4/12 p-6 h-96 m-4 bg-app shadow flex items-center">
                </div>
            </div>
        </div >
    );
}

export default App;
