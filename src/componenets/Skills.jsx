import React from 'react'

const Skills = () => {
  return (
    <div id='skils' className='bg-[#0a192f] text-gray-300 pt-5 sm:pb-[2.5cm]'>
         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl text-gray-300 py-1 px-2 font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-7 '>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-3 cursor-pointer'>
                <div className='shadow-md shadow-[#040616] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="/images/html.png" alt="" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040616] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="/images/css.png" alt="" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040616] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="/images/javascript.png" alt="" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040616] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="/images/react.png" alt="" />
                    <p className='my-4'>REACT JS</p>
                </div>
                <div className='shadow-md shadow-[#040616] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="/images/tailwind.png" alt="" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-md shadow-[#040616] hover:scale-110 duration-500'>
                   
                    <img className='w-20 mx-auto' src="/images/node.png" alt="" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040616] hover:scale-110 duration-500'>
                 
                    <img className='w-20 mx-auto' src="/images/mongo.png" alt="" />
                    <p className='my-4'>MONGODB</p>
                </div>
                <div className='shadow-md shadow-[#040616] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src="/images/github.png" alt="" />
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
         </div>
    </div>
  )
} 
 

export default Skills