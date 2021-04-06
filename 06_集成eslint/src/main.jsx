import React, { memo, useState } from 'react';
import ReactDom from 'react-dom';

const App = memo(() => {
  const [msg, setMsg] = useState('hello react');
  return (<div>{msg}</div>);
});

ReactDom.render(<App />, document.getElementById('root'));
