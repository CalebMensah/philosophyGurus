import { Navbar,NavbarCollapse,NavbarLink} from 'flowbite-react/components/Navbar'
import { TextInput} from 'flowbite-react/components/TextInput'
import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from "react-icons/fa";
import { Button } from 'flowbite-react/components/Button'


const Header = () => {
  return (
    <Navbar className="fluid rounded border-b-2 ">
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>PHILOSOPHY</span>GURU
      </Link>
      <form>
        <TextInput 
          type='text' 
          placeholder='search'
          className='hidden lg:inline-flex ml-5 w-1/2 justify-center items-center'
        />
      </form>
      <Button className='w-10 h-8 lg:hidden items-center justify-center' color={"gray"} >
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className=' items-center justify-center  w-12 h-10 hidden sm:inline' color={'gray'} pill>
          <FaMoon className="h-4 w-4"/>
        </Button>
        <Link to={"/sign-in"}>
        <Button className='text-black-500 bg-gradient-to-r from-purple-400 to-blue-500 w-16 h-10 items-center mt-1 mb-1'>Sign In</Button>
        </Link>
        <Navbar.Toggle defaultValue={'false'}/>
      </div>
      <NavbarCollapse >
        <NavbarLink  as={'div'} className='text-black-500 mr-4'active>
          <Link to={"/"} className='hover:text-blue-700'>Home</Link>
        </NavbarLink>
        <NavbarLink active as={'div'} className='text-black-500 mr-4'>
          <Link to={"/about"} className='hover:text-blue-700'>About</Link>
        </NavbarLink>
        <NavbarLink active as={'div'} className='text-black-500'>
          <Link to={"/projects"} className='hover:text-blue-700'>Projects</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

export default Header