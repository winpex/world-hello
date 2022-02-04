
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [hola, setHola] = useState('');
  useEffect(() => {
    setHola('hello world')
  }, [])

  return (

    <body>

      <div className="hola">
        <h1>hello word app</h1>
        <p>{hola} </p>
      </div>
    </body>

  )
}

export default App;
