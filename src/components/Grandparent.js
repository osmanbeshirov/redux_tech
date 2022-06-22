import React from 'react';

import Parent from './Parent'
import { useSelector } from 'react-redux';

const Grandparent = () => {
    const profile = useSelector((state) => state.profile);

    console.log(profile)

    return (
        <div><Parent/></div>
    )
}

export default Grandparent;