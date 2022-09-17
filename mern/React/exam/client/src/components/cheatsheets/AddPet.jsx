import React, { useEffect, Componenet, useState } from "react";
import axios from "axios";
function AddPet(props) {
    const { usersList, setUsersList } = useState([]);
    const { isLoaded, setLoaded } = useState(false);
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
    // const { userCreated, setUserCreated } = useState(false);

    // function handleCreate(user) {
    //     setUserCreated(false);
    //     const mypostdatahere = null;
    //     axios.post("urlhere", mypostdatahere).then(response => {
    //         setUserCreated(true);
    //     });

    // }

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
    return (<div style={{ maxWidth: "100px", margin: "auto" }}>

        <div>
            <form >
                <table>
                    <thead>
                        <tr>
                            <th>Pet Name:</th>
                            <th>Skills (optional):</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <p>Pet Name:</p>
                                    <input type="text" />
                                </div>
                            </td>
                            <td>
                                <p>Skill 1:</p>
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <p>Pet Type:</p>
                                <input type="text" />
                            </td>
                            <td>
                                <p>Skill 2:</p>
                                <input type="text" name="" id="" />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>Pet Description:</p>
                                    <input type="text" />
                                </div>
                            </td>
                            <td>
                                <p>Skill 3:</p>
                                <input type="text" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" />

            </form>
        </div>
    </div >);
}
export default AddPet;