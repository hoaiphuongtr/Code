import React, { useState } from 'react';

export default function RulesofHook() {
    const [name, setName] = useState('Mary');
    console.log('render');
    return (
        <div>
            <button
                onClick={() => {
                    setName('Peter');
                }}
            >
                Change Name
            </button>
        </div>
    );
}
