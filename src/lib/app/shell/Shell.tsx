import React, { useState } from "react";
import Link from "next/link";
import { Layout } from "../../../components/types";
import { FC } from "react";
import { useRouter, NextRouter } from "next/router";
import { useEffect } from "react";
import { format } from "url";
import { Toolbar } from "../toolbar/Toolbar";

export interface ShellProps extends Layout<ShellProps> {}

let isUI: boolean = false;

export async function getServerSideProps() {
    return { props: { initialUI: isUI } };
}

const Shell: FC<ShellProps> = (props: ShellProps) => {
    const [isUI, setIsUI] = useState(true);

    const router: NextRouter = useRouter();
    const { pathname, query } = router;

    const reload = () => {
        router.push(format({ pathname, query }));
    };

    const setUIState = () => {
        if (isUI) {
            setIsUI(false);
        } else {
            setIsUI(true);
        }
    };

    return (
        <>
            <Toolbar />
            <div className="email-app">
                <div className="email-content">
                    <div className="email-border">
                        <div className="email-isolate">
                            <div id="contentRoot">{props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Shell };
