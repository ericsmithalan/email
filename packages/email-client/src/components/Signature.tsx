import React from "react";
import { Div, Table, Tr, Td } from "@email/element";
import { withCss, css } from "@email/css/";

export type SignatureElementProps = {};

const styles = css({
    myDiv: {
        backgroundColor: "red",
    },
});

const SignatureElement = (props: SignatureElementProps) => {
    return (
        <Table>
            <Tr>
                <Td>
                    <Div className={styles.classNames.myDiv}>Hello</Div>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <Div className={styles.classNames.myDiv}>Hello</Div>
                </Td>
            </Tr>
        </Table>
    );
};

const Signature = withCss(styles)(SignatureElement);

export { Signature };
