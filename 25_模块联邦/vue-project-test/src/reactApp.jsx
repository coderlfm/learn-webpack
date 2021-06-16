import React, { useState } from 'react';

export default function App() {

    const [message, setMessage] = useState('hello react1733')
    // const [message, setMessage] = useState('hello react1733')

    const style = { border: '1px solid red', color : 'red' };

    // debugger;
    return (
        <div style={style}>
            <h1>
                {message}
            </h1>
            butto
        </div>
    )
}