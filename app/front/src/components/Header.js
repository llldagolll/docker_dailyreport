import React from "react";
import { Link } from 'react-router-dom';
import "../tailwind.css";

const Header = () => {
    return (
            <nav className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2xl w-screen">
                <div>
                     <button>
                        <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                        </svg>
                    </button>
                </div>
                <div>
                    <p className="text-2xl text-white font-semibold">WithUs</p>
                </div>
                <div className="text-2xl text-white font-semibold inline-flex items-center">
                    <Link to={`/`}>
                        <a className="ml-5 px-2 py-1">Logout</a>
                    </Link>
                </div>
            </nav>
    )
}



export default Header;
