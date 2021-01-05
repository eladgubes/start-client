import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';

import { getItems } from '../store/actions/itemsActions'


export function ItemDetails(props) {

    const items = useSelector((state) => state.items.items)
    const [currItem, setCurrItem] = useState('')

    const dispatch = useDispatch();

    const getItem = (id) => {
        const idx = items.findIndex((item) => '' + item._id === (id))
        if (idx < 0) {
            dispatch(getItems())
        }
        else {
            const currItem = items[idx]
            setCurrItem(currItem)
        }



    }

    const getIdFromParams = () => {
        const { id } = props.match.params
        return id


    }

    useEffect(() => {
        const id = getIdFromParams()
        getItem(id)
    })


    return (
        <div>
            {currItem && <div className="container flex item-page"> 
                <div className="main-details">
                    <p>{currItem.title}</p>
                    <p>{currItem.description}</p>
                    <p>{currItem.price}</p>
                    <button>buy it now</button>
                </div>
                <div className="item-image">
                    <img src={currItem.mainImage} alt="" />
                </div>

            </div>}
        </div>
    );
}