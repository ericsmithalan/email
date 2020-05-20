import React, { FC, ReactNode } from "react";

import { Header } from "../components/Header";
import { style } from "../lib/css-js/style";
import { useClassNames } from "../lib/hooks/useClassNames";
import { useStyle2 } from "../lib/hooks/useStyle2";
import { Table, Td, Tr } from "../lib/primitives";
import { Styleable } from "../lib/types";
import { hasValue } from "../lib/utils/validation";
import { NewsletterModel } from "../models/Newsletter";

const styles = style({
    newsletterTable: {
        backgroundColor: "#ccc",
        width: 800
    }
});

const newsletter: NewsletterModel = {
    header: {
        title: "My Title",
        date: new Date(),
        image: {
            alt: "test alt",
            width: 600,
            height: 200
        }
    }
};

export interface NewsletterTemplateProps extends Styleable {
    model?: NewsletterModel;
}

export const NewsletterTemplate: FC<NewsletterTemplateProps> = (props: NewsletterTemplateProps) => {
    const { newsletterTable } = useClassNames(styles);

    NewsletterTemplate.defaultProps = {
        className: newsletterTable
    };

    const merged = useStyle2(styles, props, NewsletterTemplate.defaultProps);

    const render = (model: NewsletterModel) => {
        if (hasValue(model.header)) {
            return <Header {...model.header} />;
        }
    };

    return (
        <Table align="center" {...merged}>
            <Tr>
                <Td>{render(newsletter)}</Td>
            </Tr>
        </Table>
    );
};
