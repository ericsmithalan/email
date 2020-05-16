import React, { useState } from "react";
import Link from "next/link";
import { Layout } from "../../../components/types";
import { FC } from "react";
import { useRouter, NextRouter } from "next/router";
import { useEffect } from "react";
import { format } from "url";

export interface ToolbarProps {}

let isUI: boolean = false;

export async function getServerSideProps() {
    return { props: { initialUI: isUI } };
}

const Toolbar: FC<ToolbarProps> = (props: ToolbarProps) => {
    const router: NextRouter = useRouter();
    const { pathname, query } = router;

    const reload = () => {
        router.push(format({ pathname, query }));
    };

    const toggleUI = () => {
        router.push(format({ pathname, query }));
    };

    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/basicEmail">
                <a>Basic Email</a>
            </Link>
            <button onClick={reload}>Reload</button>
            <button onClick={toggleUI}>Toggle UI</button>
        </div>
    );
};

export { Toolbar };
