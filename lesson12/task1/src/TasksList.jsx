import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends Component{
  state = {
    tasks: [
      {text: "Learn React", done: false, id: 1 },
      {text: "Learn HTML / CSS", done: false, id: 2 },
      {text: "Learn JavaScript", done: false, id: 3 },
      {text: "Learn Dev Tools", done: true, id: 4 },
    ]
  };

  onCreate = text => {
    const { tasks } = this.state;
    const newTask = {
      id: Math.random().toFixed(10),
      text,
      done: false,
    };
    const updatedTasks = tasks.concat(newTask);
    this.setState({
      tasks: updatedTasks
    });
  };

  handleTaskOnChange = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          done: !task.done,
        }
      }
      return task;
    });
    this.setState({tasks: updatedTasks});
  };

  handleTaskDelete = id => {
    const updatedTasks = this.state.tasks 
      .filter(task => task.id !== id);
    this.setState({tasks: updatedTasks});
  };

  render(){
    const sortedTasks = [...this.state.tasks]
      .sort((a,b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {
            sortedTasks.map(task => 
              <Task 
              key={task.id}
              {...task}
              onChange={this.handleTaskOnChange}
              handleTaskDelete={this.handleTaskDelete}
              />)
          }
        </ul>
      </main>
    );
  }
};
export default TasksList;