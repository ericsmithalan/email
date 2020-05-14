import { HelmetData } from "react-helmet";
import { StyleManager } from "./lib";
import { DocumentProps } from "next/document";
import { Theme } from "./lib";

export type DocProps = {
    helmet: HelmetData;
    stylesheets: StyleManager;
    theme: Theme;
} & DocumentProps;
