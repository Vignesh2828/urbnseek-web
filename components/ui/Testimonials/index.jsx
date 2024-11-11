import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {

    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Alex Wonderson",
            title: "Founder of Lyconf",
            quote: "As a local business owner, I struggled to connect with my neighborhood customers. This app helped me reach the right audience, saving time and growing my business within the community."
        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Karim Ahmed",
            title: "DevOps Engineer",
            quote: "I was able to find a reliable local plumber through the app when my pipes broke. The service was quick and affordable, and now I can always find the best local services when I need them."
        },
        {
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            name: "Lysa Stian",
            title: "System Manager",
            quote: "This app has been a lifesaver for finding local service providers. It helped me book a highly rated electrician within minutes, and I trust the app's reviews and ratings."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela Stian",
            title: "Product Designer",
            quote: "My neighborhood had a lot of great services, but I never knew where to find them. This app connected me with the right people and helped me save so much time!"
        },
        {
            avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            name: "Jurica Koletic",
            title: "Founder of Let’s Code",
            quote: "With this app, I found reliable contractors for my home improvement projects in my local area. It’s easy to use, and it saved me a lot of hassle."
        },
        {
            avatar: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Kavi Laron",
            title: "Full Stack Engineer",
            quote: "I moved to a new city and had no idea where to find trustworthy services. This app helped me find reliable cleaners, tutors, and even pet care, all within my neighborhood!"
        },
    ];

    return (
        <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8 relative p-5 mt-10 rounded-2xl overflow-hidden">
        <div className="relative z-10 max-w-2xl sm:text-center md:mx-auto">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                See what others are saying about our Neighborhood Service Finder
            </h2>
            <p className="mt-3 text-gray-600">
                Hear from local residents and service providers on how our app is connecting the community.
            </p>
        </div>
        <div className="mt-12 relative z-10">
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    testimonials.map((item, idx) => (
                        <li key={idx} className="bg-white border p-4 rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            <figure>
                                <div className="flex items-center gap-x-4">
                                    <img src={item.avatar} className="w-14 h-14 object-cover rounded-full" alt={item.name} />
                                    <div>
                                        <span className="block text-gray-800 font-semibold">{item.name}</span>
                                        <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="mt-6 text-gray-700">
                                        {item.quote}
                                    </p>
                                </blockquote>
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    
    )
}

export default Testimonials;
