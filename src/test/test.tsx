import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser, setName} from "../store/reducers/user/user.reducer";
import React from "react";

export default function Test() {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser);
    const { name } = currentUser;

    const onNameChange = (e: any) => dispatch(setName(e.target.value));

    return (
        <div>
            <h1>{name}</h1>

            <input type={"text"} value={name} onChange={onNameChange} />
        </div>
    )
}