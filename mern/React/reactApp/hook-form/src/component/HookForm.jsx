import React, { useState } from "react";

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value !== "" && e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("")
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value !== "" && e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value !== "" && e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value !== "" && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== "" && e.target.value !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div >
                    <label >FirstName</label>
                    <input type="text" onChange={handleFirstName} value={firstName} />
                    {
                        firstNameError ?
                            <p style={{ color: 'red' }}>{firstNameError}</p> : ''
                    }
                </div>
                <div>
                    <label >LastName</label>
                    <input type="text" onChange={handleLastName} value={lastName} />
                    {
                        lastNameError ?
                            <p style={{ color: 'red' }}>{lastNameError}</p> : ''
                    }
                </div>
                <div>
                    <label >email</label>
                    <input type="text" onChange={handleEmail} value={email} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> : ''
                    }
                </div>
                <div>
                    <label >password</label>
                    <input type="password" onChange={handlePassword} value={password} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> : ''
                    }
                </div>
                <div>
                    <label >Confirm Password</label>
                    <input type="password" onChange={handleConfirmPassword} value={confirmPassword} />
                    {
                        confirmPasswordError ?
                            <p style={{ color: 'red' }}>{confirmPasswordError}</p> : ''
                    }
                </div>

            </form>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div><p>Your Form Data</p></div>
                <div>
                    <p>FirstName: {firstName}</p>
                </div>
                <div>
                    <p>LastName: {lastName}</p>
                </div>
                <div><p>Email: {email}</p></div>
                <div><p>Password: {password}</p></div>
                <div><p>Confirm Password: {confirmPassword}</p></div>
            </div>
        </>

    );

};

export default HookForm;