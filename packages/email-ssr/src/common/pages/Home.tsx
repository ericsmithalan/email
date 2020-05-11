import * as React from "react";

interface HomeProps {
    title: string;
    updateTitle: any;
}

class Home extends React.Component<HomeProps> {
    public render() {
        return <div>Hello Home</div>;
    }
}

export default Home;
