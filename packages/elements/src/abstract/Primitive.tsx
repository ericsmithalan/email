import React from "react";

export interface PrimitiveProps {}
export interface PrimitiveState {}

export abstract class Primitive extends React.Component<PrimitiveProps, PrimitiveState> {
    private _elements: JSX.Element[] = [];
    static emailAttributes = {};
    static webAttributes = {};

    abstract renderBefore(): JSX.Element;
    abstract renderElement(): JSX.Element;
    abstract renderAfter(): JSX.Element;

    render = () => {
        this._elements.push(this.renderBefore());
        this._elements.push(this.renderElement());
        this._elements.push(this.renderAfter());

        return this._elements;
    };
}
