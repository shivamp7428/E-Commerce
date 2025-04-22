import { PhoneCall, SendHorizontal } from 'lucide-react';
import React from 'react';
import { FaGooglePlay, FaApple, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoQrCodeOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h1 className="text-xl font-bold">Exclusive</h1>
          <h2 className="text-lg font-semibold mt-5">Subscribe</h2>
          <p className="text-sm mt-6 text-white/80">Get 10% off your first order</p>
          <div className="flex items-center gap-2 mt-10 border  p-2 rounded bg-gray-800">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 w-full bg-transparent outline-none text-white"
            />
            <SendHorizontal className="text-gray-400 text-lg cursor-pointer" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold">Support</h1>
          <p className="flex items-center gap-2 mt-2 text-white/90">
            <FaMapMarkerAlt /> Bhopal, Madhya Pradesh, <br /> India
          </p>
          <p className="flex items-center gap-2 mt-6 text-white/90">
            <FaEnvelope /> Exclusive@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-6 text-white/90">
            <PhoneCall /> +91 8871736638
          </p>
        </div>

        <div>
          <h1 className="text-xl font-bold">Account</h1>
          <p className="mt-5 text-white/90">My Account</p>
          <p className="text-white/90 mt-5">Login / Register</p>
          <p className="text-white/90 mt-5">Cart</p>
          <p className="text-white/90 mt-5">Wishlist</p>
          <p className="text-white/90 mt-5">Shop</p>
        </div>

        <div>
          <h1 className="text-xl font-bold ">Quick Links</h1>
          <p className="mt-5 text-white/90">Privacy Policy</p>
          <p className="text-white/90 mt-5">Terms of Use</p>
          <p className="text-white/90 mt-5">FAQ</p>
          <p className="text-white/90 mt-5">Contact</p>
        </div>

        <div>
          <h1 className="text-xl font-bold">Download App</h1>
          <p className="mt-2 text-white/80">Save $3 with App for New Users</p>
          <div className="flex items-center mt-5 gap-4">
            <IoQrCodeOutline className="text-8xl text-white" />
            <div className="w-full">
              <div className="flex items-center gap-2 border p-3 rounded-md bg-gray-800 border-gray-600 cursor-pointer text-green-500">
                <FaGooglePlay className="text-2xl" />
                <div>
                  <p className="text-xs text-gray-400">GET IT ON</p>
                  <h1 className="text-sm font-bold text-white">Google Play</h1>
                </div>
              </div>
              <div className="flex items-center gap-2 border p-3 mt-5 rounded-md bg-gray-800 border-gray-600 cursor-pointer text-white">
                <FaApple className="text-2xl " />
                <div>
                  <p className="text-xs text-gray-400">Download on the</p>
                  <h1 className="text-sm font-bold">App Store</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-3">
              <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full">
                 <FaFacebook className="text-xl" />
            </div>
             <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full">
              <FaTwitter className="text-xl" />
            </div>
            <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full">
              <FaInstagram className="text-xl" />
           </div>
            <div className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full">
              <FaLinkedinIn className="text-xl" />
           </div>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;