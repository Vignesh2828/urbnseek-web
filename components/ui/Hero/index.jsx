import NavLink from "../NavLink"
import { FaGooglePlay } from "react-icons/fa"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Find What You Need, Right Where You Are
                </h1>
                <p className="max-w-xl mx-auto">
                    Discover services, local events, and connect with neighbors using UrbnSeek. Built to bring communities closer, helping you find trusted professionals, nearby happenings, and more right in your neighborhood.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 px-6 py-3 rounded-full"
                    >
                        <FaGooglePlay className="mr-2 " />
                        Download app now
                    </NavLink>
                    
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50 px-6 py-3 rounded-full"
                        scroll={false}
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero;
