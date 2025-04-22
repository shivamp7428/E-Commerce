import { BadgeDollarSign, DollarSign, Gift, Home , Car , Headset , ShieldCheck, Twitter} from 'lucide-react'
import { FaInstagram ,  FaLinkedinIn} from 'react-icons/fa';
import React from 'react'
import { useState } from 'react';

const About = () => {
    const images = [
        { src: 'f20.avif', caption: 'Tom Cruise ' , description:"CEO & Founder"},
        { src: 'f19.avif', caption: 'Emma Waston' , description:" Managing Director" },
        { src: 'f22.avif', caption: 'Will Smith' , description:"Product Designer" },
        { src: 'f21.avif', caption: 'Laily bon'  , description:"Product Saler"},
        { src: 'f23.avif', caption: 'John ' , description:"Amployee" },
        { src: 'f24.avif', caption: 'Aaisha ', description:"Amployee" },
      ];    const [currentIndex, setCurrentIndex] = useState(0);
  
    const itemsPerPage = 3;
    const totalPages = Math.ceil(images.length / itemsPerPage);
  
    const startIndex = currentIndex * itemsPerPage;
    const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);
  
  return (
   <>
     <h1 className='flex ml-35 mt-20'>Home / <p className='font-black'>About</p></h1>
     <div className='flex ml-35 mt-10'>
            <div className='min-w-xl mt-30 w-0'>
                <h1 className='text-4xl font-bold tracking-wider'>Our Story</h1>
                <p className='mt-15 tracking-wider'>Launched in 2025, Exclusive is India Asia's premier online shopping<p className='tracking-wider'>makterplace  with  an active presense in India. Supported</p> by
                    wide range  of tailored marketing, data and service soluations,<br /> Exclusive has 10,500 sallers and 300 brands and  serves 3 <br /> millioons customers
                    cross the region.
                </p>
                <p className='mt-7 tracking-wider'>
                    Exclusive has more than  1 million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in  categories <br /> ranging from 
                    consumer.
                </p>
            </div>
            <div className='m-30 mt-0 mr-0'>
                <img src="f18.png" alt="img" />
            </div>
      </div>

    <div className='m-35 mt-0 flex gap-10 justify-center'>
    <div className='border w-full hover:bg-red-500 hover:text-white hover:border-red-500 rounded border-gray-300 p-5 flex justify-center text-center items-center'>
    <div>
       <div className='w-30 h-30 ml-2 bg-gray-300 rounded-full  justify-center flex items-center '>
        <div className='w-25 h-25   bg-black text-white flex justify-center items-center  rounded-full'>
        <Home width={60 } height={60} />
       </div>
     </div>
        <h1 className='font-bold text-2xl'>10.5k</h1>
        <p className='text-sm '>Sallers active our site</p>
     </div>
    </div>
     <div className='border w-full hover:bg-red-500 hover:text-white hover:border-red-500  rounded p-5 border-gray-300 flex justify-center text-center items-center'>
     <div>
       <div className='w-30 h-30 ml-5 bg-gray-300 text-white rounded-full  justify-center flex items-center '>
        <div className='w-25 h-25 bg-black   flex justify-center items-center  rounded-full'>
        <BadgeDollarSign width={60 } height={60} />
       </div>
     </div>
        <h1 className='font-bold text-2xl'>33k</h1>
        <p className='text-sm ml-7'>Monthly Product Sale</p>
     </div>
     </div>
    <div className='border w-full hover:bg-red-500 hover:text-white hover:border-red-500  rounded border-gray-300 flex p-5 justify-center text-center items-center'>
    <div>
       <div className='w-30 h-30 ml-7 bg-gray-300 rounded-full  justify-center flex items-center '>
        <div className='w-25 h-25   bg-black text-white flex justify-center items-center  rounded-full'>
        <Gift width={60 } height={60} />
       </div>
     </div>
        <h1 className='font-bold text-xl'>45.5k</h1>
        <p className='text-sm '>Customer active in our site</p>
     </div>
    </div>
   <div  className='border w-full hover:bg-red-500 hover:text-white hover:border-red-500  rounded border-gray-300 flex p-5 justify-center text-center items-center'>
   <div>
       <div className='w-30 h-30 ml-6 bg-gray-300 rounded-full  justify-center flex items-center '>
        <div className='w-25 h-25   bg-black text-white flex justify-center items-center  rounded-full'>
        <DollarSign width={60 } height={60} />
       </div>
     </div>
        <h1 className='font-bold text-xl'>25k</h1>
        <p className='text-sm '>Anual gross sale in our site</p>
     </div>
   </div>
    </div>

    <div className="relative  w-[1235px] h-[750px] mx-auto overflow-hidden  ">
      
      <div className="flex gap-4 justify-center items-center mb-4">
        {visibleImages.map((item, index) => (
        <div>
              <img
            key={index}
            src={item.src}
            alt={`img-${startIndex + index}`}
            className="w-full h-[600px]  object-cover "
          />
          <div >
            <p className="text-3xl font-bold ">{item.caption}</p>
            <p className="text-sm ">{item.description}</p>
              <div className="flex mt-2 gap-2">   
                   <Twitter className="text-xl " />
                   <FaInstagram className="text-xl" />
                   <FaLinkedinIn className="text-xl" />
                
            </div>
          </div>

        </div>

        ))}
      </div>

      <div className="flex justify-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>

    <div className='m-30 mt-25 flex gap-30 justify-center'>
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

export default About
