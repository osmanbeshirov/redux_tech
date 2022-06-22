import React from 'react';

import { useSelector } from 'react-redux';

const Child = () => {

    const todo  = useSelector((state) => state.todo)
    const product = useSelector((state) => state.product)

    // console.log(todo)

    console.log(product)


    return (
        <div>Child</div>
    )
}

export default Child;