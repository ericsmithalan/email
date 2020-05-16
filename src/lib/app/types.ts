import { HelmetData } from "react-helmet";
import { StyleManager } from "..";
import { DocumentProps } from "next/document";
import { Theme } from "../types";
import { ReactNode } from "react";

export type DocProps = {
    helmet: HelmetData;
    stylesheets: React.ReactElement[] | React.ReactFragment;
    theme: Theme;
} & DocumentProps;
