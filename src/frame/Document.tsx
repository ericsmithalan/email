import React, { Component, ReactNode } from "react";

import { Head, Style } from "../lib/primitives";
import { Body } from "../lib/primitives/Body";
import { Html } from "../lib/primitives/Html";
import { Injectables, InjectableStyle } from "./types";

export interface DocumentProps {
    children?: ReactNode;
    injectables?: Injectables;
    subject?: string;
}

export interface DocumentState {}

export default class Document extends Component<DocumentProps, DocumentState> {
    constructor(props: DocumentProps) {
        super(props);
    }

    render() {
        const { injectables, subject } = this.props;

        return (
            <Html>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="x-apple-disable-message-reformatting" />
                    <meta
                        name="format-detection"
                        content="telephone=no,address=no,email=no,date=no,url=no"
                    />
                    <meta name="color-scheme" content="light" />
                    <meta name="supported-color-schemes" content="light" />

                    <title>{subject}</title>

                    {injectables?.styles.map((style: InjectableStyle) => (
                        <Style id={style.id} key={style.target}>
                            {style.css}
                        </Style>
                    ))}
                </Head>
                <Body id="frameRoot">{this.props.children}</Body>
            </Html>
        );
    }
}
