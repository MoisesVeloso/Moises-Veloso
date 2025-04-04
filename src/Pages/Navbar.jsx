import React from 'react'
import Marquee from 'react-fast-marquee'

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sm:px-10 fixed z-10">
  <div className="navbar">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2.5">
          <li><a href='hero' className='font-bold uppercase'>Home</a></li>
          <li><a className='font-bold uppercase'>Timeline</a></li>
          <li><a className='font-bold uppercase'>Projects</a></li>
          <li><a className='font-bold uppercase'>About Me</a></li>
      </ul>
    </div>
    <a className="font-bold rounded-full">MV</a>
  </div>
  <div className="navbar-center hidden lg:flex fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
    <ul className="navbar bg-base-300 rounded-full gap-10 px-10">
      <li><a className='font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      </a></li>
      <li><a className='font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
      </a></li>
      <li><a className='font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </a></li>
      <li><a className='font-bold uppercase'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
      </a></li>
    </ul>
  </div>
  <div className='navbar md:w-1/4 w-1/2'>
    <Marquee gradient gradientWidth={50} gradientColor='#1d232a' className='font-bold'>Manila, Philippines</Marquee>
  </div>
</div>
  )
}

export default Navbar