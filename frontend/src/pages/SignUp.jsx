import { Button, Label, TextInput } from "flowbite-react"
import React from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div  className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-16">
    {/* left */}
      <div className="flex-1">
      <Link to="/" className=' text-4xl font-bold dark:text-white'>
        <span className='py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>PHILOSOPHY</span>GURU
      </Link>
      <p className="text-sm mt-5">Welcome to PHILOSOPHYGURU. Sign up with your email ans password and get daily notifications.</p>
      </div>
      {/* right */}

      <div className="flex-1">
        <form className="flex flex-col gap-4">
          <div>
            <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username' required/>
          </div>
          <div>
            <Label value='Your email' />
            <TextInput type='text' placeholder='email@company.com' id='email' required/>
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='text' placeholder='Password' id='password' required className="w-full"/>
          </div>
          <Button className="bg-gradient-to-r from-purple-400 via-violet-600 to-pink-500 p-3" type="submit">Sign Up</Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account</span>
          <Link to={'/sign-in'} className="text-blue-500">Sign in</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp