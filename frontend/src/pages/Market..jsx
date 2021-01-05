import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

import { getItems } from '../store/actions/itemsActions'

import { ItemList } from '../components/ItemList'


export function Market() {

    const items = useSelector((state) => state.items.items)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems())
    })



    return (
        <div className="container">
            <div className="market container grid">
                {items && <ItemList items={items} />}
            </div>
        </div>
    );
}