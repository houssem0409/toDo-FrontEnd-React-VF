import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import {toggleCompleteAsync , deleteTodoAsync} from '../redux/todoSlice'
const TodoItem = ({id , title , completed}) => {
     const dispatch = useDispatch();


     const handleCompleteClick = () => {
      dispatch(toggleCompleteAsync({id :id ,title : title , completed : !completed}))
     }

     const handleDelete = () => {
      dispatch(deleteTodoAsync({id : id}))
     }

     

    return (

        <div>
            
             <ListItem
            secondaryAction={
              <IconButton onClick={()=> handleDelete() } edge="end" aria-label="comments">
                
                <DeleteIcon />
                  
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onChange={() => handleCompleteClick()} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  checked={completed}
                />

              </ListItemIcon>
              <ListItemText id={id} primary={`What i will do  ${title}`} />
            </ListItemButton>
          </ListItem>
        </div>
    );
};

export default TodoItem;