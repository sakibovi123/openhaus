import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import BgBg from "../Assets/Images/newbg.png"
import {Link, useNavigate} from "react-router-dom";
import AuthUser from "../Context/Auth";

export default function Signin(){
    const navigate = useNavigate()
    const { http, setToken } = AuthUser()
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleLogin = async() => {
        try{
            await http.post("/login", {
                email: email,
                password: password
            })
                .then((response) => {
                    // console.log(response.data.access_token)
                    setToken(response.data.user, response.data.access_token)
                })
        }
        catch(e) {
            return e
        }
    }
    return (
        <div className="min-h-screen bg-slate-100">
            <Header />
            <div className="w-full flex items-center h-full p-7">
                <img src={BgBg} alt="" className="w-[60%]"/>
                <div className="w-[40%] bg-white h-[700px] my-7 rounded shadow-xl">
                    <div className="w-full flex flex-col justify-start p-5 my-[32px]">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">SIGNIN FORM</h2>
                            <Link to="/signup" className="bg-blue-700 p-2 w-[90px] text-center text-white rounded">Signup</Link>
                        </div>
                        <div className="w-full flex flex-col my-4">
                            <label htmlFor="Email">Email</label>
                            <input required onChange={(e)=>setEmail(e.target.value)}
                                type="email" placeholder="Enter Email" className="p-2 border shadow-sm outline-blue-700"/>
                        </div>
                        <div className="w-full flex flex-col my-4">
                            <label htmlFor="Password">Password</label>
                            <input required onChange={(e)=>setPassword(e.target.value)}
                                type="password" placeholder="Enter Password" className="p-2 border shadow-sm outline-blue-700"/>
                        </div>
                        <div className="w-full flex my-4">
                            <input required type="checkbox" placeholder="Enter Password" className="p-2 border shadow-sm outline-blue-700"/>
                            <p className="mx-3">Remember me</p>
                        </div>
                        <div className="w-full flex flex-col my-4">
                            <button onClick={handleLogin}
                                className="w-full bg-blue-700 p-2 rounded transition-all hover:bg-blue-600 text-white">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
