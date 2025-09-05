import Link from 'next/link';

/**
 * "Custom 404 page."
 * It returns a div with a cat SVG, a 404 message, a paragraph, and a link to return home
 * @returns A div with a cat, a 404, and a link to return home.
 */
export default function FourOFour(){
    return (
        <div>
            <div>
                <p>Page Not Found</p>
                <p>404</p>
                <Link href="/" title="Return Home">
                    <span>Return Home</span>
                </Link>
            </div>
        </div>
    );
}