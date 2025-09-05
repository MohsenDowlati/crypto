import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Page({ title, className, children }) {
    const pageTitle = title === 'Home' ? 'MagnetXt' : `MagnetXt | ${title}`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Navbar />
            <main>
                <article className={className}>{children}</article>
            </main>
            <Footer />
        </>
    );
}

export default Page;