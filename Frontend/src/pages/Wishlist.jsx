import React from 'react'
import {ShoppingCart, Trash2 , Eye} from 'lucide-react'
const Wishlist = () => {
  return (
    <>
     <div className='ml-35'>
   
   <div className='flex m-20 ml-0'>
   <h1 className='text-xl mt-5'>Wishlist(4)</h1>
   <a href='#' className='border rounded p-7 pb-3 absolute right-27 pt-3 font-bold'>Move All To Bag</a>
   </div>
    <div className='mt-10 gap-10 flex'>
     <div>
        <div className="w-72 bg-gray-200">
          <div className="relative     overflow-hidden">
            <img  src="f6.png" alt="Gamepad" className="w-50  h-full m-12 object-cover" />
          <div className="absolute top-2 right-2 w-8 bg-white p-1 rounded-full space-x-2">
             <Trash2/>
          </div>
          <div className="absolute top-2  w-12 text-center ml-2 text-white  bg-red-500 space-x-2">
             -35%
          </div>
          <a href='#' className=" bg-black text-white flex justify-center p-2 space-x-2">
             <ShoppingCart/>
             <h1>Add To Cart</h1>
          </a>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Gucci duffle bag</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$260</h1>
           <p className="line-through text-sm text-gray-500">$360</p>
        </div>
      </div>
      </div>
      <div>
        <div className="w-72  bg-gray-200">
          <div className="relative    overflow-hidden">
            <img  src="f1.png" alt="Gamepad" className="w-50 p-2  h-full m-11 object-cover" />
          <div className="absolute top-2 right-2  w-8 bg-white p-1 rounded-full space-x-2">
          <Trash2/>
          </div>
          <a  href='#' className=" bg-black text-white flex justify-center p-2 space-x-2">
             <ShoppingCart/>
             <h1>Add To Cart</h1>
          </a>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Gucci duffle bag</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$960</h1>
           <p className="line-through text-sm text-gray-500">$1160</p>
        </div>
       </div>
      </div>
      <div>
        <div className="w-72  bg-gray-200">
          <div className="relative  overflow-hidden">
            <img  src="f7.png" alt="Gamepad" className="w-50  h-full m-17 object-cover" />
          <div className="absolute top-2 right-2  w-8 bg-white p-1 rounded-full space-x-2">
          <Trash2/>
          </div>
          <a href='#' className=" bg-black text-white flex justify-center p-2 space-x-2">
             <ShoppingCart/>
             <h1>Add To Cart</h1>
          </a>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">GP11 Shooter USB  Gamepad</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$160</h1>
           <p className="line-through text-sm text-gray-500">$170</p>
        </div>
       </div>
      </div>
      <div>
        <div className="w-72  bg-gray-200">
          <div className="relative    overflow-hidden">
            <img  src="f5.png" alt="Gamepad" className="w-50  h-full m-2 p-2 object-cover" />
          <div className="absolute top-2 right-2  w-8 bg-white p-1 rounded-full space-x-2">
          <Trash2/>
          </div>
          <a href='#' className=" bg-black text-white flex justify-center p-2 space-x-2">
             <ShoppingCart/>
             <h1>Add To Cart</h1>
          </a>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Quilted  Satin Jacket</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$360</h1>
           <p className="line-through text-sm text-gray-500">$560</p>
        </div>
       </div>
      </div>
    </div>
  </div>


  <div className='ml-35 mt-15'>
     <div className='flex m-20 ml-0'>
     <p className='text-red-500 font-bold flex gap-4'><p className='w-4 h-8 rounded bg-red-500'></p>Just for you</p>
     <a href='#' className='border rounded p-7 pb-3 absolute right-27 pt-3 font-bold'>See All</a>
     </div>
    <div className='mt-10 mb-30 flex'>
     <div>
        <div className="w-72 bg-gray-200">
          <div className="relative    overflow-hidden">
            <img  src="f11.png" alt="Gamepad" className="w-50 p-5 m-7 h-full  object-cover" />
          <div className="absolute top-2 right-2  space-x-2">
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <a href='#' className=" bg-black text-white flex justify-center p-2 space-x-2">
             <ShoppingCart/>
             <h1>Add To Cart</h1>
          </a>
          <div className="absolute top-2 ml-2 text-center space-x-2">
             <h1 className='bg-red-500 w-15   h-auto text-white'>-45%</h1>
         </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Asus FHD Gaming Laptop</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$960</h1>
           </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-black'>(65)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative     overflow-hidden">
            <img  src="f3.png" alt="Gamepad" className="w-50  h-full m-7 p-3 object-cover" />
          <div className="absolute top-2 right-2  space-x-2">
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <a href='#' className=" bg-black text-white flex justify-center p-2 space-x-2">
             <ShoppingCart/>
             <h1>Add To Cart</h1>
          </a>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">IPS LCD Gaming Moniter</h1>
         <div className=" items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$1160</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-black'>(35)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative    overflow-hidden">
            <img  src="f14.png" alt="Gamepad" className="w-50  h-full m-8 p-5 object-cover" />
          <div className="absolute top-2 right-2  space-x-2">
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <a href='#' className=" bg-black text-white flex justify-center p-2 space-x-2">
             <ShoppingCart/>
             <h1>Add To Cart</h1>
          </a>
          <div className="absolute top-2 ml-2 text-center space-x-2">
             <h1 className='bg-green-500 w-15  h-auto text-white'>New</h1>
         </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">HAVIT HV-G92 Gamepad</h1>
         <div className="items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$660</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black '>★(55)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative    overflow-hidden">
            <img  src="f2.png" alt="Gamepad" className="w-50  h-full m-10  p-3 object-cover" />
          <div className="absolute top-2 right-2  space-x-2">
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <a href='#' className=" bg-black text-white flex justify-center p-2 space-x-2">
             <ShoppingCart/>
             <h1>Add To Cart</h1>
          </a>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">AK-900 Wired keyboard</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$200</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black'>★(55)</p></h1>
       </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default Wishlist
