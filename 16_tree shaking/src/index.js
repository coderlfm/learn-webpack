import React, { useState, } from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default function App() {

    const [message, setMessage] = useState('hello react17')

    return (
        <div>
            {message}
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'));