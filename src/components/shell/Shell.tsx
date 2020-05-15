import Link from "next/link";
import { Layout } from "../types";
import { FC } from "react";

export interface ShellProps extends Layout<ShellProps> {}

const Shell: FC<ShellProps> = (props: ShellProps) => {
    return (
        <div className="email-app">
            <div className="email-bar">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/basicEmail">
                    <a>Basic Email</a>
                </Link>
            </div>
            <div className="email-content">
                <div className="email-border">
                    <div className="email-isolate">
                        <div id="contentRoot">{props.children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Shell };
