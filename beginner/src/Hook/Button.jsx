import React, { useContext } from 'react';
import { UserContext } from './FunctionalComponent';

export default function Button() {
    const { increaseAge, changeCity, changeOldStreet } =
        useContext(UserContext);
    return (
        <>
            <button onClick={increaseAge}>Increase Age</button>
            <button onClick={changeCity}>Change City</button>
            <button onClick={changeOldStreet}>Change Old Street</button>
        </>
    );
}
