import React, { useEffect, Componenet, useState } from "react";
import axios from "axios";
function Users(props) {
    const { usersList, setUsersList } = useState([]);
    const { isLoaded, setLoaded } = useState(false);
    function handleDelete(user) {
        //prints user object
        console.log(user + "To delete");
        axios.delete("http://localhost:8000/api/users/deletebyname/" + user.name).then(res => {
            // axios.delete("http://localhost:8000/api/users/deletebyID/" + user._id).then(res => {
            setUsersList(usersList.filter(u => u.id !== user.id));
        });
    }
    function handleDetails(user) {
        console.log("move To Another Page with :", user);
    }


    useEffect(() => {
        axios.get("http://localhost:8000/api/users").then(response => {
            //problem
            console.log(response.data.records);
            setTimeout(() => {
                setUsersList(response.data.records);
                setLoaded(true);

            }, 200);

            // }, 2000);
            // })
            console.log("useEffect");
        })
    }, [setLoaded, setUsersList]);
    //
    return (<div style={{ maxWidth: "100px", margin: "auto" }}>
        {!isLoaded ? <div>Loading...</div> :
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList === undefined ? console.log(usersList) : usersList.map(
                            (user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.age}</td>
                                    <td><button onClick={(e) => handleDetails(user)}>Details</button>|<button onClick={(e) => handleDelete(user)}>Delete</button></td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        }</div >);
}
export default Users;