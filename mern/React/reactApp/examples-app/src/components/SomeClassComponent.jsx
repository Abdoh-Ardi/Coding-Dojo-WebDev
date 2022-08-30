import React, { Component } from "react";
// const { Component } = require("react");

class SomeClassComponent extends Component {
    render() {

        return <button onClick={() => alert("THis button has been clicked!")}> button </button>

    }

}
// neccessary
export default SomeClassComponent;