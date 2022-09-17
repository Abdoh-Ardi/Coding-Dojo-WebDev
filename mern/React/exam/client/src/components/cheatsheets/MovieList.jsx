import React, { useEffect, useState } from "react";
import axios from "axios";
function MovieList(props) {
    const [moviesList, setMoviesList] = useState([]);

    const [isLoaded, setLoaded] = useState(false);
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
        axios.get("http://localhost:8000/api/movies").then(response => {

            setTimeout(() => {
                setMoviesList(response.data);
                // console.log(response);
                // console.log("data",moviesList["title"]);
                setLoaded(true);

            }, 200);

            console.log("useEffect");
        })
    }, []);
    // // //

    // const [books, setBooks] = useState([])
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     console.log("#1 useEffect is called")
    //     setIsLoading(true)
    //     fetch("http://localhost:8080/books")
    //         .then(res => res.json())
    //         .then(data => {
    //             setIsLoading(false)
    //             setBooks(data)
    //         })
    // }, []);

    return (
        <>
            <h1>Movie List</h1>
            {/* FIXME */}
            {/* {!isLoaded ? "Loading..." : moviesList?.map(movie => <p key={movie._id}>{movie.title} - {movie.rating}</p>)} */}
            <div style={{ maxWidth: "100px", margin: "auto" }}>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Movie Title</th>
                                <th>Actions</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* loop through database data here  */}
                            {!isLoaded ? "Loading..." : moviesList?.map(movie =>
                                // <p key={movie._id}>{movie.title} - {movie.rating}</p>
                                <tr key={movie._id}>
                                    <td>
                                        <div>
                                            <p>{movie.title}</p>

                                        </div>
                                    </td>
                                    {/* Avg rating here td*/}
                                    <td>
                                        <a href={"/movies/" + movie._id}>Read Reviews</a>
                                        <br />
                                        <a href={"/movies/" + movie._id + "/new"}>Write Reviews</a>
                                    </td>
                                </tr>
                            )}
                            {/* end loop */}

                        </tbody>
                    </table>


                </div>
            </div >
        </>);
}
export default MovieList;