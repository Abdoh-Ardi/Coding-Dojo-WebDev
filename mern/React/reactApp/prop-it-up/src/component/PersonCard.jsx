import "./PersonCard.css";
// import './App.css';
const { Component } = require("react");
class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Age: props.age,
        };


    }
    incrementAge = () => { this.setState({ Age: this.state.Age + 1 }) };

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <>
                <div className="center">
                    <h1>{firstName},{lastName}</h1>
                    <p>Age: {this.state.Age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={this.incrementAge}>BirthDay Button for {firstName} {lastName}</button>
                </div>
            </>

        );
    }
}

export default PersonCard;