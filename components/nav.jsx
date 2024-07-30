'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  // const [providers, setProviders] = useState(null)

  // useEffect(() => {
  //   const setProviders = async () => {
  //     const response = await getProviders()

  //     setProviders(response)
  //   }

  //   setProviders()
  // }, [])


  return (
    <nav className="nav_bar">
      <div className="flex">
        <Link href="/" className="gap-2 flex-center px-2">
          <h1 className="text-3xl font-medium font-roboto">apitesting.com</h1>
        </Link>
        <Link href="/" className="gap-2 flex-center px-5">
          <h1 className="text-xl font-thin font-roboto hover:text-white">Home</h1>
        </Link>
        <Link href="/about" className="gap-2 flex-center px-5">
          <h1 className="text-xl font-thin font-roboto hover:text-white">About</h1>
        </Link>
        <Link href="/pricing" className="gap-2 flex-center px-5">
          <h1 className="text-xl font-thin font-roboto hover:text-white">Pricing</h1>
        </Link>
      </div>


      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <>
            <button onClick={() => setIsUserLoggedIn(false)} className="flex gap-2 flex-center black_btn px-3">
              <p>Sign Out</p>
            </button>
            <Link href="/profile" className="flex gap-2 flex-center px-2">
              <p>natedoesthings</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </Link>
          </>
        ) : (
          <>
            <button onClick={() => setIsUserLoggedIn(true)} className="flex gap-2 flex-center black_btn">
              <p>Sign Up!</p>
            </button>

          </>

        )
        }

      </div >


    </nav >
  )
}

export default Nav


// {providers && Object.values(providers).map(provider => (
//   <Link href="/signup" className="flex gap-2 flex-center black_btn">
//     <p>Sign Up!</p>
//   </Link>
// ))}