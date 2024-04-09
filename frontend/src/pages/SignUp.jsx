import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
    }
    const handleSubmit = async(e) => {
      e.preventDefault()
    // there should be something here i will comeback later
      try{
        setLoading(true)
        setErrorMessage(null)
     const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
     })
     const data = await res.json()
     if(data.success===false){
      return setErrorMessage(data.message)
     }
     setLoading(false)
     if(res.ok){
      navigate('/sign-in')
     }
      }catch(error){
        setErrorMessage(error.message)
        setLoading(false)
      }
    }
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value='Your username' />
            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange} />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput type='email' placeholder='email@company.com' id='email' onChange={handleChange} />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput type='password' placeholder='Password' id='password'  className="w-full" onChange={handleChange}/>
          </div>
          <Button className="bg-gradient-to-r from-purple-400 via-violet-600 to-pink-500 p-3" type="submit" disabled={loading}>
            {
              loading ? (
                <div className="flex">
                <Spinner size="sm"/>
                <span className="pl-3">Loading...</span>
                </div>
              ) : 'Sign Up'
            }
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account</span>
          <Link to={'/sign-in'} className="text-blue-500">Sign in</Link>
        </div>
        {
          errorMessage && (
            <Alert className="mt-5" color={'failure'}> 
            {errorMessage}
            </Alert>
          )
        }
      </div>
      </div>
    </div>
  )
}

export default SignUp







{/* 

  if(!formData.username || !formData.email || formData.password){
      return setErrorMessage('Please fill out all fields')
      }



*/}