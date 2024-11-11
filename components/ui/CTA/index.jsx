import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image 
                            src={ctaImage} 
                            className="rounded-lg md:max-w-lg" 
                            alt="Connect with Your Community Easily" 
                        />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Bringing Your Neighborhood Together
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Discover and connect with trusted local services, stay updated on neighborhood events , and engage with your community like never before. Our platform is dedicated to making your neighborhood feel closer, safer, and more connected.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-orange-500 hover:bg-orange-700 active:bg-orange-800 rounded-lg px-4 py-2"
                        >
                            Join the Community
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA
