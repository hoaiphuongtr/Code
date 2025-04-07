import React, { useState } from 'react';
import Confirm from '../Confirm/Confirm';
import './styles.css';
const initialStudent = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'John Smith'
    },
    {
        id: 4,
        name: 'Jane Smith'
    }
];
export default function Manager() {
    const [students, setStudents] =
        useState<typeof initialStudent>(initialStudent);
    const [idDelete, setIdDelete] = useState<number | null>(null);
    const visibleConfirm = idDelete !== null;
    const showConfirm = (id: number) => {
        setIdDelete(id);
    };
    const hideConfirm = () => {
        setIdDelete(null);
    };
    const handleDelete = () => {
        setStudents((prev) =>
            prev.filter((student) => student.id !== idDelete)
        );
        hideConfirm();
    };

    return (
        <div className='manager'>
            <h1>Manage Student</h1>
            <div className='student-list'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>
                                    <button
                                        onClick={() => showConfirm(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Confirm
                visible={visibleConfirm}
                ok={handleDelete}
                cancel={hideConfirm}
            />
        </div>
    );
}
