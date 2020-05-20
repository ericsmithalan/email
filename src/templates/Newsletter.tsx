import React, { ReactNode } from "react";

import { Header } from "../components/Header";
import { hasValue } from "../lib/utils/validation";
import { NewsletterModel } from "../models/Newsletter";

const newsletter: NewsletterModel = {
    header: {
        title: "My Title",
        date: new Date(),
        image: {
            alt: "test alt",
            src: "https://via.placeholder.com/150",
            width: 150,
            height: "auto"
        }
    }
};

export const NewsletterTemplate = () => {
    let header: ReactNode;

    const render = (model: NewsletterModel) => {
        if (hasValue(model.header)) {
            return <Header {...model.header} />;
        }

        return <div></div>;
    };

    return render(newsletter);
};
