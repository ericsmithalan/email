import { Container, Signature, Spacer } from "../components";
import { useStyle, Img, P, A } from "src/lib";
import { styleable } from "src/lib/css-js/styleable";
import Link from "next/link";

const styles = styleable({
    cornerImage: {
        width: 118,
        height: "auto",
        "@tablet": {
            width: "100%",
        },
        "@phone": {
            width: "100%",
        },
    },
});

export default function Home() {
    const { cornerImage } = useStyle(styles);

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
