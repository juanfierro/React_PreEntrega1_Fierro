import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <div className="notification is-info">
                {greeting}
            </div>
        </div>
    );
};

export default ItemListContainer;
