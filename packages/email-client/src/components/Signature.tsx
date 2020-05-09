import React from "react";
import { Div, Table, Tr, Td } from "@email/element";
import { withCss, css } from "@email/css/";

export type SignatureElementProps = {};

const styles = css({
    signature: {
        backgroundColor: "red",
    },
    myDivOne: {
        backgroundColor: "red",
    },
    myDivTwo: {
        backgroundColor: "green",
    },
});

const SignatureElement = (props: SignatureElementProps) => {
    const classes = styles.classNames;
    return (
        <Table className={classes.signature}>
            <Tr>
                <Td>
                    <Div
                        className={classes.myDivOne}
                        style={{
                            fontSize: 200,
                        }}
                    >
                        Hello
                    </Div>
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <Div className={classes.myDivTwo}>Hello</Div>
                </Td>
            </Tr>
        </Table>
    );
};

const Signature = withCss(styles)(SignatureElement);

export { Signature };
