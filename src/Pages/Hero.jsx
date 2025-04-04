import React from 'react'
import TypewriterComponent from 'typewriter-effect'

function Hero() {
  return (
    <div className="hero min-h-dvh font-jost">
  <div className="hero-content text-center">
    <div className="w-full">
    <div className='w-full py-5 mb-5 flex justify-center'>
        <img src="" alt="profile" className='md:h-38 md:w-38 h-32 w-32 rounded-full border-4' />
    </div>
    <div className='md:text-5xl font-bold text-3xl'>
      <p>Carl Moises Veloso</p>
    </div>
      
      <p className="py-6 md:text-2xl text-xl font-semibold">
        <TypewriterComponent options={{
          strings: ['I Build.', 'I Learn.', 'I Create' ],
          autoStart: true,
          loop: true
        }} />
      </p>
      <div className='flex justify-center p-5 w-full'>
        <p className='font-semibold md:text-2xl text-xl md:w-1/2'>I’m constantly exploring new technologies, tools, and ideas to bring creative concepts to life.</p>
      </div>
      <a className="btn btn-lg p-5 rounded-xl" href="Moises_Resume.pdf" download="Moises_Resume.pdf">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Download CV
        </a>
    </div>
  </div>
</div>
  )
}

export default Hero