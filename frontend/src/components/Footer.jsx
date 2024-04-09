import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/x'
import 'react-social-icons/telegram'

const FooterComponent = () => {
  return (
    <Footer className='border border-t-8 border-teal-500 p-4 '>
        <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full'>
                <div className=''>
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
        <span className='py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>PHILOSOPHY</span>GURU
      </Link>
                </div>
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                <Footer.Title title='Info' className='mt-4'/>
                    <Footer.LinkGroup col className='mt-2'>
                        <Footer.Link href='https://google.com' target='_blank' rel='noopener noreferrer' className=' hover:text-blue-500'>
                            100 JS Projects
                        </Footer.Link>
                        <Footer.Link href='/about' target='_blank' rel='noopener noreferrer' className='mt-2 hover:text-blue-500'>
                            About us
                        </Footer.Link>
                        <Footer.Link href='/contacts' target='_blank' rel='noopener noreferrer' className='mt-2 hover:text-blue-500'>
                            Contact Us
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='Follow Us' className='mt-4'/>
                    <Footer.LinkGroup col className='mt-2'>
                        <Footer.Link href='https://www.github.com/CalebMensah' target='_blank' rel='noopener noreferrer' className=' hover:text-blue-500'>
                            Instagram
                        </Footer.Link>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer' className='mt-2 hover:text-blue-500'>
                            Facebook
                        </Footer.Link>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer' className='mt-2 hover:text-blue-500'>
                            Telegram
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='Legal' className='mt-4'/>
                    <Footer.LinkGroup col className='mt-2'>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer' className=' hover:text-blue-500'>
                            Privacy
                        </Footer.Link>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer' className='mt-2 hover:text-blue-500'>
                            Terms and Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                </div>
            </div>
            <Footer.Divider className='mt-4 w-full sm:flex sm:items-center sm:justify-center'/>
            <div>
                <Footer.Copyright href='#' by='philosophyGuru' year={new Date().getFullYear()} className='mt-4'/>
                <div className='flex gap-4 sm:mt-0 mt-4 sm:justify-center'>
                    <SocialIcon url='www.facebook.com' style={{ width: 20 }}/>
                    <SocialIcon url='www.telegram.com' style={{ width: 20 }}/>
                    <SocialIcon url='www.instagram.com' style={{ width: 20 }}/>
                    <SocialIcon url='www.x.com' style={{ width: 20 }}/>
                </div>
            </div>
            </div>
    </Footer>
  )
}

export default FooterComponent