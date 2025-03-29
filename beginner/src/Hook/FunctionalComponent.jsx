import React, { createContext, useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import Button from './Button';
const initialAddress = () => {
    // console.log('initial run');
    return {
        street: {
            old: '215 DXH, Khu Pho 4',
            new: '215 DXH, Khu pho 10'
        },
        district: '9',
        city: 'HCM',
        nation: 'Viet Nam'
    };
};
const fetchAddress = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                street: {
                    old: '100 NiColas ',
                    new: '400 Broadway'
                },
                district: 'Albany',
                city: 'New York',
                nation: 'USA'
            });
        }, 3000);
    });
};
export const UserContext = createContext();

export default function FunctionalComponent() {
    const [firstName] = useState('Hoai Phuong');
    const [age, setAge] = useState(20);
    const [address, setAddress] = useState(initialAddress);
    const increaseAge = () => {
        setAge((prevAge) => prevAge + 1);
    };
    const changeCity = () => {
        setAddress((prevAddress) => ({
            ...prevAddress,
            city: prevAddress.city === 'Ha Noi' ? 'HCM' : 'Ha Noi'
        }));
    };
    const changeOldStreet = () => {
        setAddress((prevAddress) => {
            const updatedStreet = { ...prevAddress.street };
            updatedStreet.old = '215 DXH, Khu Pho 5';
            return {
                ...prevAddress,
                street: updatedStreet
            };
        });
    };
    // useEffect(() => {
    //     console.log(document.getElementsByTagName('p'));
    //     console.log('useEffect is like componentDidUpdate');
    // });
    useEffect(() => {
        // console.log('useEffect is like componentDidMount'); //using to call API
        fetchAddress().then((res) => {
            setAddress((prevAddress) => {
                const updatedAddress = { ...prevAddress };
                updatedAddress.city = res.city;
                return updatedAddress;
            });
        });
        return () => {
            //clean-up function like componentWillUnmount
            console.log('Component will be destroyed');
        };
    }, []);
    return (
        <div>
            <div className='user-info'>
                <h1>User Information</h1>
                <UserContext.Provider
                    value={{
                        firstName,
                        age,
                        address,
                        increaseAge,
                        changeCity,
                        changeOldStreet
                    }}
                >
                    <UserProfile />
                    <Button />
                </UserContext.Provider>
            </div>
        </div>
    );
}
