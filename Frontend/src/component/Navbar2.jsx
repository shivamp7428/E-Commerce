import { Heart, ShoppingCart, Search, Menu, User, ArchiveIcon, CircleXIcon,  Star, LogInIcon } from "lucide-react";
import { useState } from "react";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center px-6 py-4 border border-gray-400 justify-between shadow-md ">
  
      <h1 className="text-xl font-bold md:ml-30">Exclusive</h1>

     
      <div className="md:hidden">
        <Menu 
          className="w-8 h-8 cursor-pointer text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

    
      <div className={`space-x-6 md:flex ${menuOpen ? "flex flex-col absolute top-14 left-0 w-full bg-gray-100 p-4 shadow-md" : "hidden"}`}>
        <a href="/" className="text-gray-700 hover:underline hover:text-black">Home</a>
        <a href="/Contact" className="text-gray-700 hover:underline hover:text-black">Contact</a>
        <a href="/About" className="text-gray-700 hover:underline hover:text-black">About</a>
        <a href="/Sign" className="text-gray-700 hover:underline hover:text-black">Sign Up</a>
      </div>

   
      <div className="flex items-center gap-6 md:mr-20">
        
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-10 p-2 w-70 border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

       
        <div className="flex items-center space-x-4">
          <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer" />
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-8 h-8 text-gray-700 hover:text-blue-500" />
          </div>
          <div className="relative">
      <div
        className={`w-8 justify-center flex p-1 rounded-full  cursor-pointer transition-colors ${
          open ? 'bg-red-500' : 'bg-white'
        }`}
        onClick={() => setOpen(!open)}
      >
        <User />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 bg-opacity-90 backdrop-blur-2xl text-white shadow-md rounded p-2 w-60 z-10">
          <ul className="space-y-3">
            <li><a href="#" className="flex gap-2"><User/> Manage My Account</a></li>
            <li><a href="#" className="flex gap-2"><ArchiveIcon/>My Order</a></li>
            <li><a href="#" className="flex gap-2"><CircleXIcon/>  My Cancellations</a></li>
            <li><a href="#" className="flex gap-2"> <Star/>   My Reviews</a></li>
            <li><a href="#" className="flex gap-2"> <LogInIcon/> Logout</a></li>
          </ul>
        </div>
      )}
    </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
