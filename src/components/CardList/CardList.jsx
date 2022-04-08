import React from 'react';
import Card from "../Cards/Card";


const CardList = ({card}) => {
    return (
        <div className="body">
            {
                card.map(item =>
                <Card card={item} key={item.id}/>
                )
            }
        </div>
    );
};

export default CardList;