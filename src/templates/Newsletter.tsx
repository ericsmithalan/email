import React, { ReactNode } from "react";

import { Header } from "../components/Header";
import { Table, Td, Tr } from "../lib/primitives";
import { hasValue } from "../lib/utils/validation";
import { NewsletterModel } from "../models/Newsletter";

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

export const NewsletterTemplate = () => {
    let header: ReactNode;

    const render = (model: NewsletterModel) => {
        if (hasValue(model.header)) {
            return <Header {...model.header} />;
        }
    };

    return (
        <Table>
            <Tr>
                <Td>{render(newsletter)}</Td>
            </Tr>
        </Table>
    );
};
