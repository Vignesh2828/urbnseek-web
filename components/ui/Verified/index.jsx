import React from 'react'
import Image from "next/image";

import verifiedIcon from "../../../public/icons/verify.svg"
const VerifiedPage = () => {
  return (
    <div>
    {/* Service Provider Verification Section */}
    <div className="mt-16 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                All Service Providers Are Verified
            </h2>
            <p className="text-lg text-gray-600">
                Your safety is our priority. All service providers on our platform are verified through Aadhar and PAN video verification, ensuring only trusted individuals are part of our community.
            </p>
        </div>
        <div className="mt-8 text-center">
            <div className="flex justify-center gap-x-4">
                <div className="flex-none w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Image src={verifiedIcon} alt="Verified" width={24} height={24} />
                </div>
                <p className="text-lg text-gray-800 font-semibold mt-2">
                    Verified Service Providers for Your Peace of Mind
                </p>
            </div>
        </div>
    </div></div>
  )
}

export default VerifiedPage