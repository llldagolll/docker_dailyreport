import React from "react";
import { Link } from 'react-router-dom';
import "../tailwind.css";

const Layout = () => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
                <nav className="bg-green-800 w-screen">
                    <div className="flex items-center pl-8 h-14">
                        <div className="flex space-x-4">
                            <Link to={`/home`}>
                                <a className="text-green-300 hover:bg-green-700 px-3 py-2 rounded">Home</a>
                            </Link>
                            <Link to={`/home`}>
                                <a className="text-green-300 hover:bg-green-700 px-3 py-2 rounded">ブログ</a>
                            </Link>
                            <Link to={`/home`}>
                                <a className="text-green-300 hover:bg-green-700 px-3 py-2 rounded">問い合わせ</a>
                            </Link>
                        </div>
                    </div>
                </nav>
        </div>
    )
}



export default Layout;
