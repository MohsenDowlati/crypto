import { useRouter } from "next/router";
import Details from "../components/details/Details";
import Head from "next/head";
import Footer from "../components/Footer";

export default function IdPage() {
    const router = useRouter();
    const { id } = router.query;

    const title = "Bitcoin"

    return (

        <>
            <Head>
                <title>{`MagnetXt | ${title}`}</title>
            </Head>
            <main style={{width:'100vw'}}>
                <article style={{width: '100%'}}><Details id={id}/></article>
            </main>
            <Footer />
        </>
    );
}