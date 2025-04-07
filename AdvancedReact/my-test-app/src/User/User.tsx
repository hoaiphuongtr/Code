import React, { useEffect, useState } from 'react';
import './styles.css';
import Confirm from '../Confirm';
interface UserType {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}
export default function User() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [userIdDelete, setUserIdDelete] = useState<number | null>(null);
    const visibleConfirm = userIdDelete !== null;
    const showConfirm = (id: number) => setUserIdDelete(id);
    const cancelDelete = () => setUserIdDelete(null);
    const agreeDelete = () => {
        setUsers((prev) => prev.filter((user) => user.id !== userIdDelete));
        cancelDelete();
    };
    useEffect(() => {
        let done = false;
        fetch('https://reqres.in/api/users?page=2')
            .then((res) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(res.json());
                    }, 2000);
                });
            })
            .then((data: any) => {
                if (!done) {
                    console.log(data);
                    setUsers(data.data);
                }
            });
        return () => {
            done = true;
        };
    }, []);
    useEffect(() => {
        function handleScroll(event: Event) {
            console.log(event);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='users-management'>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            showConfirm(user.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Confirm
                visible={visibleConfirm}
                ok={agreeDelete}
                cancel={cancelDelete}
            />
        </div>
    );
}
