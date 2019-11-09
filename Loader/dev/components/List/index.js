import React, { useState } from 'react';

import Item from '../Item';
import Button from '../Button';

import './style.css';

const List = ({ data, removeFromProps, updateFromProps }) => {
    const [count, changeCount] = useState(2);
    return(
        <>
            <ul className="news">
                {
                    data.slice(0, count).map(item => (
                        <>
                        <Item
                            removeFromList={removeFromProps}
                            updateFromList={updateFromProps}
                            key={item.id}
                            item={item}
                        />
                        </>
                    ))                      
                }
            </ul>
            <Button 
                clickButton = {() => changeCount(count + 2)}
            >
                More
            </Button>
        </>
    );
}

export default List;