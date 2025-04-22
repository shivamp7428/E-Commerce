import React from 'react'

const Sign = () => {
  return (
   <>
     <div className='flex mt-20'>
        <div>
        <img src="f17.png" alt="img" className='m-20 ml-0 mt-0 mr-0'/>
        </div>
        
        <div class="max-w-sm mx-auto mt-20 p-6 bg-white  space-y-3">
           <h1 class="text-2xl font-bold text-gray-800">Create an account</h1>
           <p class="text-black ">Enter your details below</p>

       <form class="space-y-4 mt-10">
           <input type="text" placeholder="Name" class="w-full p-3 border-b border-gray-400 pl-0 focus:outline-none focus:border-blue-500  " />
           <input  type="text"  placeholder="Email or Phone Number"  class="w-full p-3 pl-0  border-b border-gray-400 focus:outline-none focus:border-blue-500"/>
           <input type="password"  placeholder="Password"  class="w-full p-3 pl-0 border-b border-gray-400 focus:outline-none focus:border-blue-500"  />
           <button  type="submit"  class="w-full bg-red-500 p-3 cursor-pointer rounded text-white mt-5  " >
           Create an account
          </button>
       </form>
         <h1 className='text-center font-bold'>OR</h1>
          <button  type="button" class="w-full flex cursor-pointer items-center justify-center gap-2 p-3 rounded border mt-2" >
            <svg class="w-5 h-5" viewBox="0 0 488 512"  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" >
              <path  d="M488 261.8c0-17.8-1.5-35.6-4.7-52.9H249v99.9h134.6c-5.9 31.6-23.4 58.4-49.9 76.4v63.2h80.8c47.4-43.7 74.5-108.1 74.5-186.6z"  fill="#4285F4" />
              <path d="M249 492c66.7 0 122.8-22.1 163.7-60.1l-80.8-63.2c-22.5 15.1-51.3 24-82.9 24-63.8 0-117.9-43.1-137.3-101.1H28.2v63.4C68.9 439.6 151.9 492 249 492z" fill="#34A853" />
              <path  d="M111.7 291.6c-5.4-15.9-8.5-32.9-8.5-50.6s3.1-34.7 8.5-50.6V127H28.2C10.1 165.1 0 207.1 0 241s10.1 75.9 28.2 114l83.5-63.4z"  fill="#FBBC05"  />
              <path d="M249 100.2c36.4 0 69.1 12.5 94.9 36.9l71-71C380.8 24.3 324.6 0 249 0 151.9 0 68.9 52.4 28.2 127l83.5 63.4C131.1 143.3 185.2 100.2 249 100.2z" fill="#EA4335"/>
           </svg>
           Sign up with Google
         </button>
         <h1 className='text-center mt-5 '>Already have account? <a href="/Login" className='hover:border-b  p-1 ml-2'>Log in</a></h1>
     </div>
    </div>
   </>
  )
}

export default Sign
