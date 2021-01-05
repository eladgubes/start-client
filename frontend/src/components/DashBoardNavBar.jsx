import React from 'react';



export function DashboardNavBar() {

    return (
        <div>
            <h1>img</h1>
            <div>
                <h2>privet</h2>
                <ul className="clean-list">
                    <li>personal info</li>
                    <li>my orders</li>
                </ul>
            </div>
            <div>
                <h2>store</h2>
                <ul className="clean-list">
                    <li>my store</li>
                    <li>orders</li>
                    <li>balance</li>
                    <li>clients</li>
                </ul>
            </div>
        </div>
    );
}