import React, { useContext } from 'react';
import { UserContext } from './FunctionalComponent';

export default function UserMainInfo() {
    const { firstName, age } = useContext(UserContext);
    return (
        <div>
            <strong>
                Name: {firstName} <strong>Age: {age}</strong>
            </strong>
        </div>
    );
}
