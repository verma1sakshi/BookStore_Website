import React from 'react'
import { Link } from "react-router-dom";

function Contactus() {
    
  return (
    <>
            {/* contact div */}
            <div className="mt-28 ml-60 modal-box ">
            <h3 className=" rounded py-5 text-white  text-center justify-between  text-2xl bold">
              Contact Us
            </h3>
              {/* name div */}
              <div className=" px-4 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="enter your name"
                  className="w-80 px-3 py-3 border rounded outline-none "/>
               </div>
               <br />
                {/* email div */}
              <div className=" px-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 py-3 border rounded outline-none "
                />
              </div>
              <br />
              {/* message div */}
              <div className="mb-4 px-4 ">
                <span>Message</span>
                <br />
                <input
                  type="text"
                  placeholder="enter your Message"
                  className="w-80 px-3 py-3 border rounded outline-none"
                />
              </div>
              {/* button */}
              <div className="flex  mt-6 justify-start">
                <Link to="/"
                  className="bg-pink-500 btn border text-white px-4 py-1 hover:bg-pink-600 "
                >
                  Submit
                </Link>
              </div>
            </div>
    </>
  )
}

export default Contactus