import React from "react";

export const FrameContext = React.createContext<FrameProviderProps>({ doc: null, win: null });

export interface FrameProviderProps {
    doc: Document | null;
    win: Window | null;
}

export class FrameProvider extends React.Component<FrameProviderProps> {
    render() {
        return (
            <FrameContext.Provider
                value={{
                    doc: document,
                    win: window
                }}
            >
                {this.props.children}
            </FrameContext.Provider>
        );
    }
}
