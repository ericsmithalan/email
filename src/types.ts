import { HelmetData } from "react-helmet";
import { StyleSheets } from "./lib";
import { DocumentProps } from "next/document";
import { Theme } from "./lib";

export type DocProps = {
    helmet: HelmetData;
    stylesheets: StyleSheets;
    theme: Theme;
} & DocumentProps;
