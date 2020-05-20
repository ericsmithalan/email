import React, { ReactNode } from "react";

export interface Image {
    alt: string;
    source: string;
}

export interface Header {
    image?: Image;
    title?: string;
    date?: Date;
}

export interface Footer {
    image: Image;
}

export interface Hero {
    image: Image;
}

export interface Blurb {
    hero: Hero;
    title: string;
    subTitle: string;
    paragraphs: string[];
}

export interface NewsletterModel {
    header: Header;
    blurb?: Blurb[];
    footer?: Footer;
}

const newsletter: NewsletterModel = {
    header: {
        title: "My Title",
        date: new Date()
    }
};

export const Newsletter = () => {
    const render = (model: NewsletterModel) => {
        if (hasValues(model.header)) {
            console.log(model.header);
        }
        return <div></div>;
    };

    return render(newsletter);
};

const hasValues = (value: any) => {
    if (value !== null || value !== undefined || value !== "") {
        if (typeof value === "object") {
            if (Object.keys(value).length > 0) {
                return true;
            }

            return false;
        }

        return true;
    }

    return false;
};
