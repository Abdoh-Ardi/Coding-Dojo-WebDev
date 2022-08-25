import { Component, useState } from "react";

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return (
        <>
            <form>
                <div>
                    <label >FirstName</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div>
                    <label >LastName</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <label >email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label >password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label >Confirm Password</label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>

            </form>
            <div >
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