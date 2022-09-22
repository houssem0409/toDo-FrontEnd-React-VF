import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";
const AddTodoForm = (props) => {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodoAsync({
        title: value,
      })
    );
  };
  return (
    <div className="App-form">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl>
              <InputLabel htmlFor="my-input">Add Todo ...</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                do it perfectly !
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <button className="App-button-add">
              {" "}
              <AddBoxIcon />
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddTodoForm;
