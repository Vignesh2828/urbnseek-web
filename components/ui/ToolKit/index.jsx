import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import downloadIcon from "../../../public/icons/download.svg";
import profileIcon from "../../../public/icons/profile.svg";
import connectIcon from "../../../public/icons/connect.svg";
import exploreIcon from "../../../public/icons/explore.svg";
import notifyIcon from "../../../public/icons/notify.svg";
import engageIcon from "../../../public/icons/engage.svg";
import verifiedIcon from "../../../public/icons/verify.svg"

const HowItWorks = () => {
    const steps = [
        {
            icon: downloadIcon,
            title: "Download the App",
            desc: "Get the app from the App Store or Google Play to get started with our community."
        },
        {
            icon: profileIcon,
            title: "Create Your Profile",
            desc: "Set up your profile to personalize your experience and connect with neighbors."
        },
        {
            icon: connectIcon,
            title: "Connect with Neighbors",
            desc: "Easily find and connect with nearby residents to build community bonds."
        },
        {
            icon: exploreIcon,
            title: "Explore Local Services",
            desc: "Discover trusted local services and businesses right in your neighborhood."
        },
        {
            icon: notifyIcon,
            title: "Stay Informed with Notifications",
            desc: "Receive real-time updates on events, safety alerts, and community news."
        },
        {
            icon: engageIcon,
            title: "Engage & Participate",
            desc: "Join events, participate in discussions, and contribute to a safer neighborhood."
        },
    ];

    return (
        <SectionWrapper>
            <div id="how-it-works" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        How It Works
                    </h2>
                    <p>
                        Follow these simple steps to make the most of our neighborhood service app.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            steps.map((step, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
                                        <Image src={step.icon} alt={step.title} width={24} height={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {step.title}
                                        </h4>
                                        <p className="mt-3 text-gray-600">
                                            {step.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default HowItWorks;
