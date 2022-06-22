import React from 'react';

import Child from './Child'
import { useSelector } from 'react-redux';

const Parent = () => {
    const arr = useSelector((state) => state);

    console.log(arr)

    return (
        <div><Child/></div>
    )
}

export default Parent;