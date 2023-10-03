import React from 'react';

import remove from '../../assets/img/remove.svg';
import checkbox from '../../assets/img/checkbox.svg';

import TaskAddForm from './TaskAddForm';

const TaskList = (props) => {
    const { folders, tasks, onToggleComplete, onAddTask, onRemoveTask } = props;

    return (
        <div className="tasks__list">
            {folders.map((folder) => (
                folder.active ? (
                    <div className="tasks__list_item" key={folder.id}>
                        <h2 style={{
                                color: folder.selectedColor
                            }}
                        >
                                {folder.folder}
                        </h2>
                        <div className="tasks__list_item-line"></div>
                        <ul>
                            {tasks
                                .filter((task) => task.idTask === folder.id)
                                .map((filteredTask) => (
                                    <li key={filteredTask.id}>
                                        <div className="completed" 
                                            onClick={() => onToggleComplete(filteredTask.id)}
                                            style={{
                                                backgroundColor: filteredTask.completedTask ? '#4DD599' : ''
                                            }}
                                        >
                                            <img src={checkbox} alt="Checkbox" />
                                        </div>
                                        <span>{filteredTask.task}</span>
                                        <div className="remove">
                                            <img src={remove} alt="Remove" onClick={() => onRemoveTask(filteredTask.id)}/>
                                        </div>
                                    </li>
                                ))                        
                            }
                        </ul>
                        <TaskAddForm onAddTask={(task) => onAddTask(task, folder.id)}/>
                    </div>
                ) : ''
            ))}
        </div> 
    )
}

export default TaskList;

