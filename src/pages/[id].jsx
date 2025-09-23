import { useRouter } from "next/router";

export default function IdPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Dynamic Page</h1>
            <p>ID: {id}</p>
        </div>
    );
}