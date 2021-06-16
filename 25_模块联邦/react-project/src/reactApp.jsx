import React, { useState,Suspense } from 'react';
const VueApp = React.lazy(()=> import('vueProject/VueApp'))
console.log(VueApp);

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
            <Suspense fallback="loading..." >
                <VueApp />
            </Suspense>
        </div>
    )
}