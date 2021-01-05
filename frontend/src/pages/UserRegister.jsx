import React from 'react';

import { SighIn } from '../components/SighIn'
import { SighUp } from '../components/SighUp'


import { useState } from 'react';


export function UserRegister() {

    const [isNewForm, setForm] = useState(false)

    const changeForm = (isNewForm) => {
        setForm(isNewForm)
    }

    return (
        <div className="container">
            <h1>register</h1>
            <div>
                <div>
                    <h3 onClick={() => changeForm(true)}>new client</h3>
                </div>
                <div>
                    <h3 onClick={() => changeForm(false)}>old client</h3>

                </div>
            </div>

            {!isNewForm && <SighIn />}
            {isNewForm && <SighUp />}


        </div>
    );
}