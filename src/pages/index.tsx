import Link from "next/link";

export default function Home() {
    return (
        <ul>
            <li>
                <Link href="newsletters/basicNewsletter">Newsletters</Link>
            </li>
            <li>
                <Link href="business/basicEmail">Business</Link>
            </li>
        </ul>
    );
}
