import React, { useState } from 'react';


const UserForm2 = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <form onSubmit={createUser}>
            <h3>{formMessage()}</h3>
            <h3>  {
                //ternary alternative
                hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
            }
            </h3>
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm2;
