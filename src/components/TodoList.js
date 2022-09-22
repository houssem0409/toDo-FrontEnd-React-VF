import * as React from 'react';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { useEffect } from 'react';
import { getTodosAsync } from '../redux/todoSlice';

export default function TodoList() {

  const todos = useSelector((state) => state.todos)
   
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodosAsync())

  }, [dispatch])
  return (
    <div className='App-list'>

    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todos?.map((value) => (
       
         <TodoItem key={value._id}  id={value._id} title={value.title} completed={value.completed}/>
        
      ))}
    </List>
    </div>
  );
}
