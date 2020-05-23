import * as React from "react";

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
) => void
    ? I
    : never;

export type PropsOf<
    E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export interface PrimitiveOwnProps<E extends React.ElementType = React.ElementType> {
    as?: E;
}

export type PrimitiveProps<E extends React.ElementType> = PrimitiveOwnProps<E> &
    Omit<PropsOf<E>, keyof PrimitiveOwnProps>;

export interface Primitive {
    children: React.ReactNode;
}
