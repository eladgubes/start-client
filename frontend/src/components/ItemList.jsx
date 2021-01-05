import React from 'react';



import { ItemCard } from './ItemCard'

export function ItemList(props) {
    const { items } = props
    console.log(items);
    return (
        <>
            { items.map(item => {
                return <ItemCard item={item} key={item._id} />
            })}
        </>
    );
}