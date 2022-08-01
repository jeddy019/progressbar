import React, { Component } from "react";
import Progressbar from "./component/Progressbar";

class App extends Component {
  render() {
    return (
      <>
        <Progressbar
          steps={[
            {
              label: "First Step",
              content: "First Content",
            },
            {
              label: "Second Step",
              content: "Second Content",
            },
            {
              label: "Third Step",
              content: "Third Content",
            },
          ]}
        />
      </>
    );
  }
}

export default App;
