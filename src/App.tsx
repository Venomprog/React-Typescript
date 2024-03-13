import React, { useEffect, useState } from 'react';
import Card, { cardVariant } from './components/Card';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import TodoList from './components/TodoList';

function App() {

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [])

  async function fetchUsers(){
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch(e) {
      alert(e)
    }
  }

  async function fetchTodos(){
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch(e) {
      alert(e)
    }
  }

  return (
    <div>
      <Card  width='200px' height='200px' variant={cardVariant.outlined}>
        <button>Click</button>
        <p>Text</p>
        <span>Lorem ipsum dolor sit amet.</span>
      </Card>
      <Card  width='200px' height='200px' variant={cardVariant.primary}>
        <button>Click</button>
        <p>Text</p>
        <span>Lorem ipsum dolor sit amet.</span>
      </Card>
      <UserList users={users}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
