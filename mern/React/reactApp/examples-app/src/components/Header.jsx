import React, { Component } from "react";

class Header extends Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <div>
                {/* // By inheriting from React.Component all we need is the "this" keyword in front of props. */}
                <h1>My name is {firstName} {lastName}</h1>
            </div>
        );
    }
}

export default Header;