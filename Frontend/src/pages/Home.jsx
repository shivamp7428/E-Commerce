import { Camera, Eye, Headset, Heart, Laptop, Smartphone, Watch  , Gamepad, Car ,  ShieldCheck} from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
   <>
   <div className='hidden md:block'>
   <div className='flex    gap-15 '>
         <div className=' ml-20 flex  tracking-wide'>
             <div className='m-10 ml-15'>
             <a href="#"><h1 className='flex gap-20'>Woman's Fashion <p className='font-extrabold text-xl'>{">"}</p></h1></a>
             <a href="#"><h1 className='mt-2 flex gap-26 '>Men's Fashion  <p className='font-extrabold text-xl'>{">"}</p></h1></a>
             <a href="#"><h1 className='mt-2'>Electronics</h1></a>
             <a href="#"><h1 className='mt-3'>Home & Lifestyle</h1></a>
             <a href="#"><h1 className='mt-4'>Medicine</h1></a>
             <a href="#"><h1 className='mt-4'>Sports & Outdoor</h1></a>
             <a href="#"><h1 className='mt-4'>Baby's & Toys</h1></a>
             <a href="#"><h1 className='mt-4'>Groceries & Pets</h1></a>
             <a href="#"><h1 className='mt-4'>Helth & Beauty</h1></a>
             </div>
             <div className="w-px mb-10 bg-gray-300 font-extralight h-auto "></div>
          </div>
          <div className='m-10'>
            <img src="a1.png" alt="img" />
          </div>
      </div>
   </div>

      <div className='md:hidden '>
      <div className="w-full bg-white border-b border-gray-200">
        <div className="mx-auto px-4 py-3 overflow-x-auto custom-scroll">
          <div className="flex gap-5 text-sm tracking-wide whitespace-nowrap text-gray-700">
      <a href="#" className="hover:border">Woman's Fashion</a>
      <a href="#" className="hover:border">Men's Fashion</a>
      <a href="#" className="hover:border">Electronics</a>
      <a href="#" className="hover:border">Home & Lifestyle</a>
      <a href="#" className="hover:border">Medicine</a>
      <a href="#" className="hover:border">Sports & Outdoor</a>
      <a href="#" className="hover:text-black hover:border">Baby's & Toys</a>
      <a href="#" className="hover:border">Groceries & Pets</a>
      <a href="#" className="hover:border">Health & Beauty</a>
         </div>
         </div>
       </div>
       <div className='m-1 mt-5'>
            <img src="a1.png" alt="img" />
         </div>
      </div>

      <div className='md:mt-20 md:ml-33'>
             <p className='text-red-500 m-2 md:m-0 font-bold flex gap-4'><p className='w-4 h-8 rounded bg-red-500'></p>Today's</p>
             <div className='flex md:gap-20 gap-2'>
                <h1 className='md:text-4xl font-bold md:mt-4 m-2 md:m-0'>Flash Sales</h1>
                <div className='flex mt-3 '>
                <h1 className='text-sm'>Days <p className='md:text-4xl font-bold'>03</p></h1>
                <h1 className='text-2xl md:mt-5 md:m-3 mt-3 m-1'> : </h1>
                <h1 className='text-sm '>Hours <p className='md:text-4xl font-bold'>23</p></h1>
                <h1 className='text-2xl md:mt-5 md:m-3 mt-3 m-1'> : </h1>
                <h1 className='text-sm'>Minutes <p className='md:text-4xl font-bold'>19</p></h1>
                <h1 className='text-2xl md:mt-5 md:m-3 mt-3 m-1'> : </h1>
                <h1 className='text-sm'>Seconds <p className='md:text-4xl font-bold'>56</p></h1>
              </div>
             </div>

      </div>

    <div className='md:flex mt-15'>
     <div className='md:ml-33  '>
        <div className="w-72 bg-gray-100">
          <div className="relative  h-full rounded-xl p-2 overflow-hidden">
            <img  src="f1.png" alt="Gamepad" className="md:w-50  md:h-full md:m-12 p-10 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <div className="absolute top-2  text-center space-x-2">
             <h1 className='bg-red-500 w-15  h-auto text-white'>-40%</h1>
         </div>
        </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">HAVIT HV-G92 Gamepad</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$120</h1>
           <p className="line-through text-sm text-gray-500">$160</p>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-gray-500'>(88)</p></h1>
       </div>
      </div>
      <div className='md:ml-10 '>
        <div className="w-72 bg-gray-100  ">
          <div className="relative  h-full   overflow-hidden">
            <img  src="f2.png" alt="Gamepad" className="w-50 h-full   m-7 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <div className="absolute top-2 ml-2 text-center space-x-2">
             <h1 className='bg-red-500 w-15  h-auto text-white'>-35%</h1>
         </div>
           <h1 className='bg-black text-white text-center p-2'>Add to Cart</h1>
        </div>
       </div>

      <div>
           <h1 className="text-lg font-semibold mt-4">AK-900  Wired Keyboard</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$960</h1>
           <p className="line-through text-sm text-gray-500">$1160</p>
        </div>
            <div className='flex'>
            <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-1">★★★★<p className='text-gray-600'>★ (75)</p></h1>
         
            </div>
        </div>
    </div>
    <div className='md:ml-10 '>
        <div className="w-72 bg-gray-100  p-">
          <div className="relative  h-full rounded-xl p-2 overflow-hidden">
            <img  src="f3.png" alt="Gamepad" className="w-50 p-4 h-full m-7 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <div className="absolute top-2  text-center space-x-2">
             <h1 className='bg-red-500 w-15  h-auto text-white'>-30%</h1>
         </div>
         
        </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">IPS LCD Gaming Monitor</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$370</h1>
           <p className="line-through text-sm text-gray-500">$400</p>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-gray-500'>(99)</p></h1>
       </div>
      </div>
      <div className='md:ml-10 '>
        <div className="w-72 bg-gray-100  p-">
          <div className="relative  h-full rounded-xl p-2 overflow-hidden">
            <img  src="f4.png" alt="Gamepad" className="w-50 p-4 h-full m-4 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <div className="absolute top-2  text-center space-x-2">
             <h1 className='bg-red-500 w-15  h-auto text-white'>-25%</h1>
         </div>
         
        </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">S-Series Comfort Chair</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$375</h1>
           <p className="line-through text-sm text-gray-500">$400</p>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★ <p className='text-gray-500'>★★(99)</p></h1>
       </div>
      </div>
    </div>
    <div className="flex justify-center">
       <h1 className="bg-red-500 text-white font-bold text-center rounded m-15 w-50 p-3"> <a href="/Wishlist">View all Product</a> </h1>
    </div>
  <hr className='mb-20 ml-33 mr-30 text-gray-300' />
      
    <div className='ml-35 m-15'>
     <p className='text-red-500 font-bold flex gap-4'><p className='w-4 h-8 rounded bg-red-500'></p>Categories</p>
     <h1 className='text-4xl font-bold mt-5'>Browse By Category</h1>
     <div className='mt-15 m-5 flex gap-20'>
       <div className='w-35 hover:bg-red-500 h-30 hover:text-white hover:border-red-500  justify-center text-center rounded border '>
       <Smartphone width={60 } height={60} className='ml-10 mt-5 '/>
       <h1 className='font-bold'>Phones</h1>
       </div>
       <div className='w-35 h-30 hover:bg-red-500  hover:text-white hover:border-red-500  justify-center text-center rounded border'>
       <Laptop width={60 } height={60} className='ml-10 mt-5 '/>
       <h1 className='font-bold'>Computer</h1>
       </div>
       <div className='w-35 h-30  justify-center hover:text-white hover:bg-red-500  hover:border-red-500  text-center rounded border'>
       <Watch width={60 } height={60} className='ml-10 mt-5 '/>
       <h1 className='font-bold'>SmartWatch</h1>
       </div>
       <div className='w-35 h-30  justify-center hover:text-white hover:bg-red-500  hover:border-red-500  border text-center rounded '>
       <Camera width={60 } height={60} className='ml-10 mt-5 '/>
       <h1 className='font-bold'>Camera</h1>
       </div>
       <div className='w-35 h-30  justify-center hover:text-white text-center hover:bg-red-500  hover:border-red-500  rounded border'>
       <Headset width={60 } height={60} className='ml-10 mt-5 '/>
       <h1 className='font-bold'>HeadPhone</h1>
       </div>
       <div className='w-35 h-30  justify-center hover:text-white text-center hover:bg-red-500  hover:border-red-500  rounded border'>
       <Gamepad width={60 } height={60} className='ml-10 mt-5 '/>
       <h1 className='font-bold'>Gaming</h1>
       </div>
    </div>
    </div>
    <hr className='mb-20 ml-33 mr-30 text-gray-300' />

  <div className='ml-35'>
    <p className='text-red-500 font-bold flex gap-4'><p className='w-4 h-8 rounded bg-red-500'></p>This Month</p>
    <h1 className='text-4xl font-bold mt-5'>Best Selling Products</h1>

    <div className='mt-10 flex'>
     <div>
        <div className="w-72 bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f5.png" alt="Gamepad" className="w-50 p-7 h-full m-2 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">The north coat</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$260</h1>
           <p className="line-through text-sm text-gray-500">$360</p>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-black'>(65)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f6.png" alt="Gamepad" className="w-50  h-full m-12 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Gucci duffle bag</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$960</h1>
           <p className="line-through text-sm text-gray-500">$1160</p>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black'>★(95)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f7.png" alt="Gamepad" className="w-50  h-full m-17 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">RGB liquid CPU Cooler</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$160</h1>
           <p className="line-through text-sm text-gray-500">$170</p>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black '>★(85)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f8.png" alt="Gamepad" className="w-50  h-full m-4 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Small BookSelf</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$360</h1>
           <p className="line-through text-sm text-gray-500">$560</p>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-black'>(75)</p></h1>
       </div>
      </div>
    </div>
  </div>



    <div className='ml-35 mr-27 mt-20 '>
      <img src="a2.png" alt="img" className='w-full' />
    </div>
  

   <div className='ml-35 mt-15'>
      <p className='text-red-500 font-bold flex gap-4'><p className='w-4 h-8 rounded bg-red-500'></p>Our Products</p>
      <h1 className='text-4xl font-bold mt-5'>Explore Our Products</h1>
      <div className='mt-10 flex'>
     <div>
        <div className="w-72 bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f9.png" alt="Gamepad" className="w-50 p-15 h-full  object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Breed Dry Dog Food</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$100</h1>
          
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black'>★(35)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative     overflow-hidden">
            <img  src="f10.png" alt="Gamepad" className="w-50  h-full m-10 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <h1 className='bg-black text-white text-center p-2'>Add To Cart </h1>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">CANON EOS DSLR Camera</h1>
         <div className=" items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$360</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black'>★(95)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f11.png" alt="Gamepad" className="w-50  h-full m-9 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">ASUS FHD Gaming Laptop</h1>
         <div className="items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$700</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-black '>(325)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f16.png" alt="Gamepad" className="w-50  h-full m-8 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Curology Product Set</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$500</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black'>★(145)</p></h1>
       </div>
      </div>
    </div>
    
    <div className='mt-10 flex'>
     <div>
        <div className="w-72 bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f12.png" alt="Gamepad" className="w-50 p-5 m-13 h-full  object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <div className="absolute top-2  text-center space-x-2">
             <h1 className='bg-green-500 w-15  h-auto text-white'>New</h1>
         </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Kids Electric Car</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$960</h1>
          
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-black'>(65)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative     overflow-hidden">
            <img  src="f13.png" alt="Gamepad" className="w-50  h-full m-8 p-3 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Jr. Zoom Soccer Cleats</h1>
         <div className=" items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$1160</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★★ <p className='text-black'>(35)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f14.png" alt="Gamepad" className="w-50  h-full m-10 p-3 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
          <div className="absolute top-2  text-center space-x-2">
             <h1 className='bg-green-500 w-15  h-auto text-white'>New</h1>
         </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">GP11 Shooter USB Gamepad</h1>
         <div className="items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$660</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black '>★(55)</p></h1>
       </div>
      </div>
      <div className='ml-10'>
        <div className="w-72  bg-gray-200">
          <div className="relative   rounded-xl p-2 overflow-hidden">
            <img  src="f15.png" alt="Gamepad" className="w-50  h-full m-3  p-5 object-cover" />
          <div className="absolute top-2 right-0  space-x-2">
             <Heart className='bg-white justify-between items-center rounded-2xl'/>
             <Eye className='bg-white rounded-2xl mt-2'/>
          </div>
       </div>
       </div>
      <div>
           <h1 className="text-lg font-semibold mt-4">Quilted Satin Jacket</h1>
         <div className="flex items-center space-x-2 mt-1">
           <h1 className="text-sm  text-red-600">$660</h1>
        </div>
          <h1 className="text-yellow-500 mt-1 text-xl tracking-wider font-bold flex gap-2">★★★★ <p className='text-black'>★(55)</p></h1>
       </div>
      </div>
    </div>
   </div>
   <div className="flex justify-center">
       <h1 className="bg-red-500 text-white font-bold text-center rounded m-15 w-50 p-3"> <a href="/Wishlist">View all Product</a> </h1>
    </div>

    <div className='ml-35'>
    <p className='text-red-500 font-bold flex gap-4'><p className='w-4 h-8 rounded bg-red-500'></p>Featured</p>
    <h1 className='text-4xl font-bold mt-5'>New Arrival</h1>
    <div className='mr-29 mt-15'>
      <img src="a3.png" alt="img" className='w-full ' />
    </div>
    </div>

    <div className='m-30 flex gap-30 justify-center'>
     <div>
       <div className='w-40 h-40 ml-8 bg-gray-300 rounded-full  justify-center flex items-center '>
        <div className='w-30 h-30   bg-black text-white flex justify-center items-center  rounded-full'>
        <Car width={60 } height={60} />
       </div>
     </div>
        <h1 className='font-bold text-xl tracking-wider'> Free And Fast DELIVERY</h1>
        <p className='text-sm ml-2'>Free delivery for all orders over $140</p>
     </div>
     <div>
       <div className='w-40 h-40 ml-8 bg-gray-300 rounded-full  justify-center flex items-center '>
        <div className='w-30 h-30   bg-black text-white flex justify-center items-center  rounded-full'>
        <Headset width={60 } height={60} />
       </div>
     </div>
        <h1 className='font-bold text-xl'>24/7 CUSTOMER SERVICE</h1>
        <p className='text-sm ml-7'>Friendly 24/7 customer support</p>
     </div>
     <div>
       <div className='w-40 h-40 ml-8 bg-gray-300 rounded-full  justify-center flex items-center '>
        <div className='w-30 h-30   bg-black text-white flex justify-center items-center  rounded-full'>
        <ShieldCheck width={60 } height={60} />
       </div>
     </div>
        <h1 className='font-bold text-xl'>MONEY BACK GUARANTEE</h1>
        <p className='text-sm ml-8'>We reum money within 30 days</p>
     </div>
    </div>
   </>
  )
}

export default Home
