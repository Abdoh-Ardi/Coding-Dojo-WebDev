import React, { useEffect, Componenet, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// import { Redirect } from "react-router-dom";
// import { response } from "express";
// import e from "express";
function AddProject(props) {
    // const { usersList, setUsersList } = useState([]);
    // const { isLoaded, setLoaded } = useState(false);
    // function handleDelete(user) {
    //     //prints user object
    //     console.log(user + "To delete");
    //     axios.delete("http://localhost:8000/api/users/deletebyname/" + user.name).then(res => {
    //         // axios.delete("http://localhost:8000/api/users/deletebyID/" + user._id).then(res => {
    //         setUsersList(usersList.filter(u => u.id !== user.id));
    //     });
    // // }
    // function handleDetails(user) {
    //     console.log("move To Another Page with :", user);
    // }
    // const [movieCreated, setMovieCreated] = useState(false);
    const history = useHistory();
    const [projectCreated, setProjectCreated] = useState(false);
    const [validationError, setValidationError] = useState({
        name: '',
        due: undefined,
    });
    const [formValue, setformValue] = useState({
        name: '',
        due: undefined,
    });
    const handleChange = (e) => {
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }
    function handleCreate(e) {

        e.preventDefault();
        console.log(e);
        setProjectCreated(false);
        // const daa = null;
        axios.post("http://localhost:8000/api/addProject", formValue).then(response => {
            console.log(response);
            setProjectCreated(true);
            history.push('/')
            history.goBack()
        }).catch(err => {
            console.log("error", err);

        });

    }

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/users").then(response => {
    //         //problem
    //         console.log(response.data.records);
    //         setTimeout(() => {
    //             setUsersList(response.data.records);
    //             setLoaded(true);

    //         }, 200);

    //         // }, 2000);
    //         // })
    //         console.log("useEffect");
    //     })
    // }, [setLoaded, setUsersList]);
    // //
    return (
        <>
            <h1>Project Manager</h1>
            <a href="../">back to dashboard</a>
            <h2>Plan a new project</h2>
            <div style={{ maxWidth: "200px", margin: "auto" }}>
                <div>
                    <form onSubmit={handleCreate} >
                        {/* TODO  validations show here */}
                        {/* redirect if successfull otherwise display errors */}
                        {projectCreated ? "project created" : <div><p>{validationError.name}</p><p>{validationError.due}</p></div>}
                        <table>
                            <tbody>

                                <tr>
                                    <td><p>Project</p></td>
                                    <td>
                                        <input required={true} minLength={3} type="text" name="name" value={formValue.name} onChange={handleChange} />
                                    </td>

                                </tr>
                                <tr>
                                    <td><p>Due Date</p></td>
                                    <td>
                                        <input required={true} type="date" name="due" id="due" value={formValue.due} onChange={handleChange} />
                                        {/* <textarea name="review" cols="30" rows="10" value={formValue.review} onChange={handleChange}></textarea> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" />
                        {/* <a href="/" >Cancel</a> */}

                    </form>
                </div>
            </div ></>);
}


export default AddProject;