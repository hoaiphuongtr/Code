import { useEffect, useState } from 'react';
import { fetchUser } from './User';

export default function useUser() {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetchUser().then((res) => {
            setUser(res.data);
        });
    }, []);
    return { user };
}
