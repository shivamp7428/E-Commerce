import { Heart, ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-300 shadow-md px-6 py-4 bg-white">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-xl md:ml-29 font-bold">Exclusive</h1>

          {/* Hamburger Icon - Visible on Mobile */}
          <div className="md:hidden">
            <Menu
              className="w-8 h-8 text-gray-700 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Nav Links - Hidden on Mobile */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:underline hover:text-black">Home</a>
            <a href="/Contact" className="text-gray-700 hover:underline hover:text-black">Contact</a>
            <a href="/About" className="text-gray-700 hover:underline hover:text-black">About</a>
            <a href="/Sign" className="text-gray-700 hover:underline hover:text-black">Sign Up</a>
          </div>

          {/* Search & Icons - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-10 pr-4 py-2 w-[260px] border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Icons */}
            <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer" />
            <ShoppingCart className="w-7 h-7 text-gray-700 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="flex flex-col mt-4 space-y-3 md:hidden">
            <a href="/" className="text-gray-700 hover:underline hover:text-black">Home</a>
            <a href="/Contact" className="text-gray-700 hover:underline hover:text-black">Contact</a>
            <a href="/About" className="text-gray-700 hover:underline hover:text-black">About</a>
            <a href="/Sign" className="text-gray-700 hover:underline hover:text-black">Sign Up</a>

            {/* Search on Mobile */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Icons on Mobile */}
            <div className="flex items-center space-x-4 pt-2">
              <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer" />
              <ShoppingCart className="w-7 h-7 text-gray-700 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        )}
      </nav>

      {/* Dummy content spacer to push rest of page below fixed navbar */}
      <div className="mt-24" />
    </>
  );
};

export default Navbar;
