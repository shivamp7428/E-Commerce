import React from 'react'

const Login = () => {
  return (
 <>
 <div className='flex mt-20'>
        <div>
        <img src="f17.png" alt="img" className='m-20 ml-0 mt-0 mr-0'/>
        </div>
        
        <div class="max-w-sm mx-auto mt-45 p-6 bg-white  space-y-3">
           <h1 class="text-2xl font-bold text-gray-800">Log in to Exclusive</h1>
           <p class="text-black ">Enter your details below</p>

       <form class="space-y-4 mt-10" method='GET' action={"/Account"}>
           <input  type="text"  placeholder="Email or Phone Number"  class="w-full p-3 pl-0  border-b border-gray-400 focus:outline-none focus:border-blue-500"/>
           <input type="password"  placeholder="Password"  class="w-full p-3 pl-0 border-b border-gray-400 focus:outline-none focus:border-blue-500"  />
          <div className='flex mt-5 gap-20'>
              <button  type="submit"  class="w-auto bg-red-500 p-3 pl-10 pr-10 cursor-pointer rounded text-white   " >
                Log in
             </button>
             <h1 className='text-red-500 mt-3 p-1'>Forget Password?</h1>
          </div>
       </form>
     </div>
    </div>
 </>
  )
}

export default Login
