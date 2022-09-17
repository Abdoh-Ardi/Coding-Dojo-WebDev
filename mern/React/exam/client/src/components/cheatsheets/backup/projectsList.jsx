import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
function ProjectsList(props) {
    // const [projectsList, setProjectList] = useState([]);
    const [backlog, setBackLog] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);
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
        axios.get("http://localhost:8000/api/projects").then(response => {

            setTimeout(() => {
                const allProjects = response.data;
                // console.log(response.data);
                // console.log(Object.entries(allProjects));
                // const backLog = allProjects.find();
                const backlog = allProjects.filter(obj => {
                    return obj.status === "backlog"
                });
                const inProgress = allProjects.filter(obj => {
                    return obj.status === "in-progress"
                });
                const completed = allProjects.filter(obj => {
                    return obj.status === "Completed"
                });

                setBackLog(backlog)
                setInProgress(inProgress)
                setCompleted(completed)
                setLoaded(true);

            }, 200);
        })
    }, [backlog, inProgress, completed]);
    // useEffect(() => {

    // }, [backlog, inProgress, completed]);
    function handleBackLogProject(e, _id) {
        //     console.log(user + "To delete");
        // console.log(_id);
        axios.post("http://localhost:8000/api/updateProjectStatus", { _id: _id }).then(response => {
            // console.log(response);
            setBackLog(backlog.filter(u => u.id !== _id));
        }).catch(err => console.log(err));
        // setUsersList(usersList.filter(u => u.id !== user.id));
    }
    function handleCompletedProject(e, _id) {
        //     console.log(user + "To delete");
        console.log(_id);
        axios.post("http://localhost:8000/api/updateProjectStatus", { _id: _id }).then(response => {
            // console.log(response);
            setInProgress(inProgress.filter(u => u.id !== _id));
        }).catch(err => console.log(err));
    }
    function handleRemoveProject(e, _id) {
        //     console.log(user + "To delete");
        console.log(_id);
        axios.post("http://localhost:8000/api/deleteProject", { _id: _id }).then(response => {
            // console.log(response);
            setCompleted(completed.filter(u => u.id !== _id));
        }).catch(err => console.log(err));
    }


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
            <h1>Project Manager</h1>
            {/* FIXME */}
            {/* {!isLoaded ? "Loading..." : moviesList?.map(movie => <p key={movie._id}>{movie.title} - {movie.rating}</p>)} */}
            <div style={{ maxWidth: "600px", margin: "auto" }}>
                <div style={{ display: "flex", flexDirection: "row", }}>
                    <div style={{ border: "1px solid black", margin: "0px 10px", padding: "10px" }}><h1>Backlog</h1>
                        {/* loop */}
                        {!isLoaded ? "Loading..." : backlog?.map(b =>
                            // <p key={movie._id}>{movie.title} - {movie.rating}</p>
                            <div key={b._id} style={{ border: "1px solid black ", padding: "5px" }}>
                                <h3>{b.name}</h3>
                                <p>{b.due}</p>
                                <button onClick={(e) => handleBackLogProject(e, b._id)}> Start Project {">"} </button>
                            </div>
                        )}
                        {/* end loop */}
                    </div>
                    <br />

                    <div style={{ border: "1px solid black", margin: "0px 10px", padding: "10px" }}><h1>In progress</h1>
                        {/* loop */}
                        {!isLoaded ? "Loading..." : inProgress?.map(b =>
                            // <p key={movie._id}>{movie.title} - {movie.rating}</p>
                            <div key={b._id} style={{ border: "1px solid black ", padding: "5px" }}>
                                <h3>{b.name}</h3>
                                <p>{b.due}</p>
                                <button onClick={(e) => handleCompletedProject(e, b._id)}> Move to Completed {">"} </button>
                            </div>
                        )}
                        {/* end loop */}
                    </div>
                    <br />
                    <div style={{ border: "1px solid black", margin: "0px 10px", padding: "10px" }}><h1>Completed</h1>
                        {/* loop */}
                        {!isLoaded ? "Loading..." : completed?.map(b =>
                            // <p key={movie._id}>{movie.title} - {movie.rating}</p>
                            <div key={b._id} style={{ border: "1px solid black ", padding: "5px" }}>
                                <h3>{b.name}</h3>
                                <p>{b.due}</p>
                                <button onClick={(e) => handleRemoveProject(e, b._id)} >X Remove Project </button>
                            </div>
                        )}
                        {/* end loop */}
                    </div>
                </div>
            {/* <button className="btn btn-primary"> button</button> */}
            <a href="/projects/new" className="btn btn-primary"> + Add New Project</a>
            {/* <a href="" class></a> */}
            </div >
        </>);
}
export default ProjectsList;