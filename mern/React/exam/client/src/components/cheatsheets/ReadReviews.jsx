import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
function ReadReviews(props) {
    // const [review, setReviewList] = useState([]);
    const [movie, setMovie] = useState({
        title: '',

    });
    const [isLoaded, setLoaded] = useState(false);
    const params = useParams();

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

    useEffect(() => {
        axios.get("http://localhost:8000/api/getMovie", params.movieID).then(response => {
            //problem
            console.log(response.data.records);
            
            setTimeout(() => {
                console.log(response.data.records);
                setMovie(response.data.records)
                // setReviewList(response.data.records);
                setLoaded(true);

            }, 200);

            // }, 2000);
            // })
            console.log("useEffect");
        })
    }, [params.movieID]);
    //

    return (
        <>
            <h1>Reviews for {movie.title}</h1>
            <div style={{ maxWidth: "100px", margin: "auto" }}>
                <div>

                    <table>
                        <thead>
                            <tr>
                                <th>Reviewer</th>
                                <th>Rating</th>
                                <th>Review</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* loop through database data here  */}
                            {!isLoaded ? "loading..." :
                                <tr>
                                    <td>
                                        <div>
                                            {/* TODO get user name */}
                                            <p>reviewer Name</p>
                                            {/* <input type="text" /> */}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {/* TODO get user rating */}
                                            <p>Reviewer Rating</p>
                                            {/* <input type="text" /> */}
                                        </div>
                                    </td>
                                    {/* Avg rating here td*/}
                                    <td>
                                        <div>
                                            <p>Reviewer Review</p>
                                        </div>
                                    </td>
                                </tr>
                            }
                            {/* end loop */}

                        </tbody>
                    </table>
                    <form action="">
                        <input type="button" value="Delete Movie" />
                    </form>
                </div>
            </div >
        </>);
}
export default ReadReviews;