import { useRouter } from "next/router";
import Details from "../components/details/Details";

export default function IdPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <article>
            <Details id={id}/>
        </article>
    );
}