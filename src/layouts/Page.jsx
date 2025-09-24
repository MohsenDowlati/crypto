import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page({ title, className, children, nav }) {
    const pageTitle = title === 'Home' ? 'MagnetXt' : `MagnetXt | ${title}`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <main style={{width:'100%'}}>
                <Navbar children={nav} />
                <article className={className}>{children}</article>
            </main>
            <Footer />
        </>
    );
}

export default Page;