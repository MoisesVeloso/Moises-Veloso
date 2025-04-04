import React  from 'react'
import Marquee from 'react-fast-marquee';

function Techstack() {

  return (
    <div className='flex items-center flex-col py-10 px-2  w-full font-jost'>
        <p className='font-bold pb-10 md:text-2xl text-xl'>Techstack and Tools</p>
        
        <Marquee pauseOnHover gradient gradientWidth={100} gradientColor='#1d232a'>
          <div className="flex md:justify-evenly ">
            <div className='flex flex-col gap-2 items-center md:mx-20 mx-10'>
              <img src='html.svg' className='md:h-16 md:w-16 h-14 w-14' alt='HTML' />  
            </div>
            <div className='flex flex-col gap-2 items-center md:mx-20 mx-10'>
              <img src='css.svg' className='md:h-16 md:w-16 h-14 w-14' alt='CSS' /> 
            </div>
            <div className='flex flex-col gap-2 items-center md:mx-20 mx-10'>
              <img src='tailwindcss.svg' className='md:h-16 md:w-16 h-14 w-14' alt='Tailwind CSS' /> 
            </div>
            <div className='flex flex-col gap-2 items-center md:mx-20 mx-10'>
              <img src='react.svg' className='md:h-16 md:w-16 h-14 w-14' alt='React' /> 
            </div>
            <div className='flex flex-col gap-2 items-center md:mx-20 mx-10'>
              <img src='sql.svg' className='md:h-16 md:w-16 h-14 w-14' alt='SQL' /> 
            </div>
            <div className='flex flex-col gap-2 items-center md:mx-20 mx-10'>
              <img src='gpt.svg' className='md:h-16 md:w-16 h-14 w-14' alt='chatgpt' />
            </div>
            <div className='flex flex-col gap-2 items-center md:mx-20 mx-10'>
              <img src='vscode.svg' className='md:h-16 md:w-16 h-14 w-14' alt='Visual Studio Code' /> 
            </div>
            <div className='flex flex-col gap-2 items-center md:mx-20 mx-10'>
              <img src='figma.svg' className='md:h-16 md:w-16 h-14 w-14' alt='Figma' /> 
            </div>
          </div>
        </Marquee>
       
    </div>
    
  )
}

export default Techstack