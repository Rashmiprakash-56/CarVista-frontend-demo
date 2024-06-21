import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-700 pt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start pt-10 mb-0 md:pt-10 md:space-x-10 px-4">
        {/* Logo and Subscribe */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Your Logo</h2>
          <p>Your Tagline here</p>
          <h3 className="text-lg font-semibold">Subscribe Now</h3>

          <div className="flex items-center border-b border-gray-300 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your Email"
              aria-label="Email"
            />
          </div>
          <button className="bg-black text-white px-4 py-2 mt-2">
            Subscribe
          </button>
        </div>

        {/* Information */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Information</h3>
          <NavLink to="/about-us" className="hover:underline">
            About Us
          </NavLink>
          <NavLink to="/more-search" className="hover:underline">
            More Search
          </NavLink>
          <NavLink to="/blog" className="hover:underline">
            Blog
          </NavLink>
          <NavLink to="/testimonials" className="hover:underline">
            Testimonials
          </NavLink>
          <NavLink to="/events" className="hover:underline">
            Events
          </NavLink>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Helpful Links</h3>
          <NavLink to="/services" className="hover:underline">
            Services
          </NavLink>
          <NavLink to="/supports" className="hover:underline">
            Supports
          </NavLink>
          <NavLink to="/terms-condition" className="hover:underline">
            Terms & Condition
          </NavLink>
          <NavLink to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </NavLink>
        </div>

        {/* Our Services */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Our Services</h3>
          <NavLink to="/brands-list" className="hover:underline">
            Brands list
          </NavLink>
          <NavLink to="/order" className="hover:underline">
            Order
          </NavLink>
          <NavLink to="/return-exchange" className="hover:underline">
            Return & Exchange
          </NavLink>
          <NavLink to="/fashion-list" className="hover:underline">
            Fashion list
          </NavLink>
          <NavLink to="/blog" className="hover:underline">
            Blog
          </NavLink>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <span>+91 9999 999 999</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>carplace@gmail.com</span>
          </div>
        </div>
      </div>

      {/*bottom part*/}
      <div className="container mx-auto px-4 pt-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 mt-10">
        <p className="text-sm text-gray-600">
          &copy; 2024 company, Ltd. | All Right reserved
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <NavLink to="/faq" className="text-sm text-gray-600 hover:underline">
            FAQ
          </NavLink>
          <NavLink
            to="/privacy"
            className="text-sm text-gray-600 hover:underline"
          >
            Privacy
          </NavLink>
          <NavLink
            to="/terms-condition"
            className="text-sm text-gray-600 hover:underline"
          >
            Terms & Condition
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
