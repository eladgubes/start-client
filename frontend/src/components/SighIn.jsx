import React from 'react';

import { login } from '../store/actions/authActions'

import { useDispatch } from 'react-redux'
import { useState } from 'react';

export function SighIn() {

    const [userCred, setCred] = useState({})

    const dispatch = useDispatch()

    const onHandleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        setCred(prevState => ({ ...prevState, [name]: value }))

    }

    const onLogin = (ev) => {
        ev.preventDefault()
        dispatch(login(userCred))

    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Mail" name="mail" onChange={onHandleChange} />
            <input type="text" placeholder="Password" name="password" onChange={onHandleChange} />
            <button onClick={onLogin}>Login</button >
        </div>
    );
}