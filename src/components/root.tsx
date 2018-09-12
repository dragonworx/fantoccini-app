import * as React from "react";

export interface RootProps { 
}

export class Root extends React.Component<RootProps, {}> {
  render() {
    return <div className="container"></div>;
  }
}