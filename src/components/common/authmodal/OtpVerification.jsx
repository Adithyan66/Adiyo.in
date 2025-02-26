import React, { useState, useRef } from "react";

function OtpVerification() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    // Handle digit change in a specific index
    const handleChange = (value, index) => {
        // Only allow digits
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to next input if not the last
        if (value && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Handle backspace to move focus backward
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Example verification handler
    const handleVerify = () => {
        alert(`OTP Entered: ${otp.join("")}`);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            {/* OTP Inputs */}
            <div className="flex space-x-4">
                {otp.map((digit, idx) => (
                    <input
                        key={idx}
                        ref={(el) => (inputRefs.current[idx] = el)}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className="w-12 h-12 text-center text-xl border-2 border-black-300 
                       focus:outline-none focus:border-cyan-500 rounded"
                    />
                ))}
            </div>

            {/* Verify Button */}
            <button
                onClick={handleVerify}
                className="bg-gray-900 text-white py-2 px-6 rounded 
                   hover:bg-gray-800 transition-colors"
            >
                Verify OTP
            </button>
        </div>
    );
}

export default OtpVerification;
