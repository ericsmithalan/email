import React from "react";
import { Div, Table, Tr, Td } from "@email/element";
import { withCss, css } from "@email/css/";
import { useCssContext, useRepository } from "@email/css/src";

export type SignatureElementProps = {};

const styles = css({
    signature: {
        backgroundColor: "red",
        fontSize: 30,
    },
    myDivOne: {
        fontSize: 50,
    },
    myDivTwo: {
        backgroundColor: "green",
    },
});

const SignatureElement = (props: SignatureElementProps) => {
    return (
        <Table className={styles.classNames().signature}>
            <Tr>
                <Td>
                    <Div className={styles.classNames().myDivOne}>Hello</Div>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <Div className={styles.classNames().myDivTwo}>Hello</Div>
                </Td>
            </Tr>
        </Table>
    );
};

const Signature = withCss(styles)(SignatureElement);

export { Signature };
