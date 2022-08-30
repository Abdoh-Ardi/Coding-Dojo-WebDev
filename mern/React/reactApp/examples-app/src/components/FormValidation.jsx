import React, { useReducer, useState } from "react";

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};
function reducer(state, action) {
    switch (action.type) {
        case 'firstName':
            if (action.payload.length < 8) {

                return { ...state, [state.firstName.error]: "first name cant be less than 8" };
            } else {
                return { ...state, [state.firstName.error]: null }
            }
        case 'lastName':
            if (action.payload.length < 8) {

                return { ...state, error: "last name cant be less than 8" };
            } else {
                return { ...state, error: null }
            }
        case 'email':
            if (action.payload.length < 8) {

                return { ...state, error: "email cant be less than 8" };
            } else {
                return { ...state, error: null }
            }

        // default:
        //     throw new Error();
    }
}

const FormValidation = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }


    return (
        <>
            {JSON.stringify(state)}
            <br />
            <label>First Name</label>
            <input onChange={handleChange} name="firstName" ></input>
            {
                state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )
            }

            <label>Last Name</label>
            <input onChange={handleChange} name="lastName" value={state.lastName.value}></input>
            {
                state.lastName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )
            }
            <label>Email </label>
            <input onChange={handleChange} name="email" value={state.email.value}></input>
            {
                state.email.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )
            }
        </>
    );
}

export default FormValidation;