import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import BgBg from "../Assets/Images/newbg.png"
import {Link, useNavigate} from "react-router-dom";
import AuthUser from "../Context/Auth";

export default function Signup(){
    const navigate = useNavigate()
    const { http, setToken } = AuthUser()
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")


    const handleSignup = async() => {
        try{
            await http.post("/register", {
                email: email,
                name: name,
                password: password
            })
            .then((response) => {
                navigate("/signin")
            })
        } catch(error){
            return error
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
                            <h2 className="text-2xl font-bold">SIGNUP FORM</h2>
                            <Link to="/signin" className="bg-blue-700 p-2 w-[90px] text-center text-white rounded">Signin</Link>
                        </div>
                        <div className="w-full flex flex-col my-4">
                            <label htmlFor="Name">Name</label>
                            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" className="p-2 border shadow-sm outline-blue-700"/>
                        </div>
                        <div className="w-full flex flex-col my-4">
                            <label htmlFor="Email">Email</label>
                            <input onChange={(e)=>setEmail(e.target.value)}
                                type="email" placeholder="Enter Email" className="p-2 border shadow-sm outline-blue-700"/>
                        </div>
                        <div className="w-full flex flex-col my-4">
                            <label htmlFor="Password">Password</label>
                            <input onChange={(e)=>setPassword(e.target.value)}
                                type="password" placeholder="Enter Password" className="p-2 border shadow-sm outline-blue-700"/>
                        </div>
                        <div className="w-full flex flex-col my-4">
                            <button onClick={handleSignup} className="w-full bg-blue-700 p-2 rounded transition-all hover:bg-blue-600 text-white">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
