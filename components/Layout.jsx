import Head from "next/head"
import Footer from '@/components/ui/Footer'
import Navbar from "@/components/ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Urbnseek</title>
                <meta name='description' content='Urbnseek making it simple to connect your local people and get local services.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout