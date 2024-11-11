import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import { FaGooglePlay } from "react-icons/fa"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-10 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center text-white">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    Join Our Neighborhood Service Finder Today!
                </h2>
                <p className="mt-3 text-lg sm:text-xl">
                    Discover local services, connect with your community, and get the help you need – all in one app.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-6 inline-flex items-center font-medium text-sm text-gray-800 bg-white hover:bg-gray-200 active:bg-gray-300 rounded-full px-8 py-3"
                >
                    <FaGooglePlay className="mr-2 text-green-600" />
                    Download now
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA;
