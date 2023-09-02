import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import AuthUser from '../Context/Auth'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FiCopy } from "react-icons/fi"
import { BiShow } from "react-icons/bi"

export default function Dashboard() {
  const [ questions, setQuestions ] = useState([])
  const { http, user } = AuthUser()
  const formSlug = useParams()


  useEffect(() => {

  }, [])


  return (
    <div className="bg-slate-100">
      <Header />
      <div className="container mx-auto my-9 h-screen w-[50%]">
        <div className="flex items-start justify-between bg-white shadow-md rounded p-5 h-full">
          <div className="w-full mx-5">
              <h2 className="text-3xl font-bold">
                  Welcome {user.name} Thanks for registering!
              </h2>
          </div>
        </div>
      </div>

    </div>
  )
}
