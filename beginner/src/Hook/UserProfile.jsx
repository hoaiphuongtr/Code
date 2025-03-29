import React, { useContext } from 'react';
import { UserContext } from './FunctionalComponent';
import UserMainInfo from './UserMainInfo';

export default function UserProfile() {
    const { address } = useContext(UserContext);
    return (
        <>
            <p>
                <UserMainInfo />
            </p>
            <p>
                <strong>Old Street:</strong> {address.street.old}
            </p>
            <p>
                <strong>New Street:</strong> {address.street.new}
            </p>
            <p>
                <strong>District:</strong> {address.district}
            </p>
            <p>
                <strong>City:</strong> {address.city}
            </p>
            <p>
                <strong>Nation:</strong> {address.nation}
            </p>
        </>
    );
}
