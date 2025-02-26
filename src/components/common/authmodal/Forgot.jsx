import React from 'react'
import { useState } from 'react';

import {
    Eye, ShowEye
} from "../../../icons/icons";

import facebook from "../../../assets/images/Facebook (Button).png"
import google from "../../../assets/images/Google (Button).png"
import apple from "../../../assets/images/Apple (Button).png"
import OtpVerification from './OtpVerification';



function Forgot({ onSwitch }) {


    const [showPassword, setShowPassword] = useState(false);



    return (


        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Forgot Password?
            </h2>
            <h2 className="text-sm  text-gray-500 mb-6">
                Don't worry! It occurs. Please enter the email address linked with your account.
            </h2>


            {/* Email Field */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-1">
                    Enter your email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 outline-none focus:border-gray-400"
                />
            </div>
            <div className="text-right ">
                <button className="text-gray-800 hover:text-gray-700 text-sm"
                >
                    Send code
                </button>
            </div>

            <div className='mb-4 relative'>
                <OtpVerification />

            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
                <label htmlFor="password" className="block text-gray-600 mb-1">
                    Enter New password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 outline-none focus:border-gray-400 pr-10"
                />
                {/* Eye Icon for toggling password */}
                <button
                    type="button"
                    className="absolute right-3 top-9 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <Eye />
                    ) : (
                        <ShowEye />
                    )}
                </button>
            </div>
            {/*confirm Password Field */}
            <div className="mb-4 relative">
                <label htmlFor="confirmPassword" className="block text-gray-600 mb-1">
                    Confirm New password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 outline-none focus:border-gray-400 pr-10"
                />
                {/* Eye Icon for toggling password */}
                <button
                    type="button"
                    className="absolute right-3 top-9 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <Eye />
                    ) : (
                        <ShowEye />
                    )}
                </button>
            </div>



            {/* Login Button */}
            <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition-colors">
                Reset Password
            </button>



            {/* Bottom text */}
            <div className="text-center mt-6 text-sm text-gray-500">
                Remember password?{" "}
                <button className="text-blue-600 hover:underline font-medium"

                    onClick={() => onSwitch("login")}>
                    Login Now
                </button>
            </div>
        </div>
    );
}


export default Forgot
