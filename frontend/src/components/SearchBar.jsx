import React from 'react';

import { query } from '../store/actions/itemsActions'


import { useDispatch } from 'react-redux'
import { useState } from 'react';

export function SearchBar() {



    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const onHandleChange = ({ target }) => {
        const search = target.value
        setSearch(search)
    }

    const onSearchItem = (ev) => {
        ev.preventDefault()
        dispatch(query(search))
    }

    return (
        <div className="search-section container flex justify-center ">
            <form className=" flex justify-center" onSubmit={onSearchItem}>
                <input autoComplete="off" type="text" name="searchKey" onChange={onHandleChange} placeholder="Looking for..." />
                <button onClick={onSearchItem} className="pink">Go</button>
            </form>
        </div>

    );
}