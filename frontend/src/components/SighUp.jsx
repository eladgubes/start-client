import React from 'react';

import { sighUp } from '../store/actions/authActions'

import { useDispatch } from 'react-redux'
import { useState } from 'react';

export function SighUp() {

    const [userCred, setCred] = useState({})

    const dispatch = useDispatch()

    const onHandleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        setCred(prevState => ({ ...prevState, [name]: value }))

    }

    const onSighUp = (ev) => {
        ev.preventDefault()
        dispatch(sighUp(userCred))

    }

    return (
        <div>
            <h1>sighUp</h1>
            <input type="text" placeholder="Name" name="name" onChange={onHandleChange} />
            <input type="text" placeholder="Mail" name="mail" onChange={onHandleChange} />
            <input type="text" placeholder="Password" name="password" onChange={onHandleChange} />
            <input type="text" placeholder="re-Password" name="re-password" onChange={onHandleChange} />
            <button onClick={onSighUp}>SighUp</button >
        </div>
    );
}