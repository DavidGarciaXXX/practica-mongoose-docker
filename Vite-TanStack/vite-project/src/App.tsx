/*import { useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import { useQuery } from '@tanstack/react-query';
//import { users } from './Types';
import request from 'graphql-request';
import gql from 'graphql-tag';


const queryusers = gql`
query {
  GetUsers {
    _id
    name
    lastName
    email
    password
    createdAt
    updatedAt
  }
}
`;

function App() {
  const [count, setCount] = useState(0);
  //const [users, setUsers] = useState([]);

  const {data, isLoading} = useQuery<users[]>({
    queryKey: ['user'],
    queryFn: async () =>
    request('http://localhost:3000/graphql',queryusers,)
  })

  if(isLoading){
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>David Emmanuel García Coronado</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {data && data.GetUsers.map((usu: users) => (
        <p key={usu._id}>{usu.name} - {usu.lastName}</p>
      ))}
    </>
  );
}

export default App;*/

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query';
//import { users } from './Types';
import request from 'graphql-request';
import gql from 'graphql-tag';


const queryusers = gql(`
  query usuario {
    GetUsers {
      name
      lastName
      email
      password
    }
  }
`);

function App() {
  const [count, setCount] = useState(0);

  const { data, isLoading } = useQuery<users[]>({
    queryKey: ['user'],
    queryFn: async () => request('http://localhost:3000/graphql', queryusers),
  });

  if (isLoading) {
    return <div>Por favor Espere</div>;
  }

  console.log(data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {data && data.GetUsers.map(({ name, email, lastName }) => (
        <p key={name}>
          <hr />
         <p style={{fontWeight: 'bold', color: 'yellow'}}> Nombre Completo: <span style={{fontWeight: 'normal', color: 'white'}}> {name} - {lastName} </span>  </p> 
         <p style={{fontWeight: 'bold', color: 'yellow'}}> Email: <span style={{fontWeight: 'normal', color: 'white'}}> {email} </span>  </p> 
         <hr/>
        </p>
      ))}

    </>
  );
}

export default App;