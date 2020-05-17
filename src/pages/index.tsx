import { Container, Signature, Spacer } from "../components";
import { useStyle, Img, P, A } from "src/lib";
import { styleable } from "src/lib/css-js/styleable";
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
