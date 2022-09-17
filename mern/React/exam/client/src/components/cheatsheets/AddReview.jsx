import React, { useEffect, Componenet, useState } from "react";
import axios from "axios";
function AddReview(props) {
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

    //1: get current record url from params
    return (
        <>
            {/* TODO insert movie name */}
            <h1>Add a Review for </h1>
            <div style={{ maxWidth: "100px", margin: "auto" }}>

                <div>

                    <form >
                        {/* TODO  validations show here */}
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                            <p>Your Name</p>
                                            <input type="text" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Rating</p>
                                        <select name="" id="">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <p>Your Review</p>
                                        <textarea name="reviewText" id="" cols="30" rows="10"></textarea>
                                        {/* <input type="text" name="" id="" /> */}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" />
                        <a href="/" >Cancel</a>

                    </form>
                </div>
            </div >
        </>);
}
export default AddReview;