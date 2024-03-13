import React from 'react';
import { ITodo } from '../types/types';
import { FC } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: ITodo[]
}

const TodoList: FC<TodoListProps> = ({todos}) => {
  return (
    <div>
      {todos.map(item => {
        return <TodoItem todo={item}/>
      })}
    </div>
  );
};

export default TodoList;