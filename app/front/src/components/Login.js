import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit=(e) => {
    //再読み込みさせない
    // e.preventDefault()

    //emain, passwordをアラート
    alert(`メールアドレス:${email} パスワード:${password}`)

    //email, password変数を初期化
    setEmail("")
    setPassword("")

  }

  return (
    <div className="flex flex-col h-screen">
        <div className="flex-auto">
            <div className="flex justify-center mt-20">
                <div className="w-9/12 border bg-white">
                    <div className="my-16 text-center">
                        <h2>ログインフォーム</h2>
                        <form>
                            <input type="email" placeholder="メールアドレス" className="p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" onChange={(e)=>setEmail(e.target.value)} />
                                <br/>
                            <input type="password" placeholder="パスワード" className="p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" onChange={(e)=>setPassword(e.target.value)} />
                                <br/>
                            <Link onClick={(e)=>handleSubmit(e)} to={`/home`} className="ml-4 py-2 px-6 group relative bg-gray-700 text-white rounded hover:bg-gray-800 focus:bg-gray-800 duration-300 inline-flex items-center shadow hover:shadow-lg">ログイン</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Login
