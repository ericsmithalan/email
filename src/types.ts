import { HelmetData } from "react-helmet";
import { StyleManager } from "./lib";
import { DocumentProps } from "next/document";
import { Theme } from "./lib/core/types/theme.types";
import { ReactNode } from "react";

export type DocProps = {
    helmet: HelmetData;
    stylesheets: React.ReactElement[] | React.ReactFragment;
    theme: Theme;
} & DocumentProps;
