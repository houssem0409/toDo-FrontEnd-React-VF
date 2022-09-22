import React from "react";
import AddTodoForm from "../components/AddTodoForm";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import TotalCompleteItems from "../components/TotalCompleteItems";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Home = () => {

    const navigate = useNavigate()

  
    return (

        <div className="App">
            <Navbar/>
            <div className='App-content'>
                <h2>Todo List</h2>
                <AddTodoForm />
                <TodoList />
                <TotalCompleteItems />
            </div>
        </div>
    )
}
export default Home;