import { Component } from 'react';

import FolderList from './components/Folders/FolderList';
import FolderAddForm from './components/Folders/FolderAddForm';
import TaskList from './components/Tasks/TaskList';
import ErrorBoundary from './components/ErrorBoundary';
// import TaskAddForm from './components/Tasks/TaskAddForm';

class App extends Component {
    constructor(props) {
        super(props);

            let folders = [
                {
                    folder: 'Отправления', 
                    selectedColor: '#c355f5', 
                    active: false, 
                    id: 1,
                },
                {
                    folder: 'EDI', 
                    selectedColor: '#34815C', 
                    active: false, 
                    id: 2,
                },
                {
                    folder: 'EMS', 
                    selectedColor: '#64c4ed', 
                    active: false, 
                    id: 3,
                },
            ]

            let tasks = [
                {
                    task: 'send', 
                    completedTask: false,
                    id: 1,
                    idTask: 1 
                },
                {
                    task: 'send/receive', 
                    completedTask: false,
                    id: 2,
                    idTask: 1
                },
                {
                    task: 'catch', 
                    completedTask: false,
                    id: 3,
                    idTask: 2
                },
            ]


            this.state = {
                folders: folders,
                tasks: tasks
            }

        this.maxId = 4;
        this.taskMaxId = 4;
    }

    onToggleProp = (id) => {
        this.setState(({folders}) => ({
            folders: folders.map(item => {
                if (item.id === id) {
                    return {...item, active: !item.active}
                }
                return item;
            })
        }))
    }

    addItem = (folder, selectedColor) => {
        const newItem = {
            folder,
            selectedColor,  
            active: false,
            id: this.maxId++
        }
        this.setState(({folders}) => {
            const newArr = [...folders, newItem];
            return {
                folders: newArr
            }
        });
    } 

    removeItem = (id) => {
        this.setState(({folders}) => {
            return {
                folders: folders.filter(item => item.id !== id)
            }
        })
    }

    addTask = (task, id) => {
        const newItem = {
            task,
            id: this.taskMaxId++, 
            idTask: id
        } 
        this.setState(({tasks}) => {
            const newArr = [...tasks, newItem];
            return {
                tasks: newArr
            }
        });
    }

    removeTask = (id) => {
        this.setState(({tasks}) => {
            return {
                tasks: tasks.filter(task => task.id !== id) 
            }
        })
    }

    onToggleComplete = (id) => {
        this.setState(({tasks}) => ({
            tasks: tasks.map(item => {
                if (item.id === id) {
                    return {...item, completedTask: !item.completedTask}
                }
                return item;
            })
        }))
    }

    render() {
        const { folders, tasks } = this.state;
        
        return (
            <div className="app">
                <div className="folders">
                    <FolderList 
                        folders={folders} 
                        onToggleProp={this.onToggleProp} 
                        onRemove={this.removeItem} 
                    />
                    <FolderAddForm onAdd={this.addItem}/>
                </div>
                <div className="tasks">
                    <ErrorBoundary>
                        <TaskList 
                            folders={folders}
                            tasks={tasks}
                            onToggleComplete={this.onToggleComplete}
                            onAddTask={this.addTask} 
                            onRemoveTask={this.removeTask}
                        />
                    </ErrorBoundary>
                </div>
            </div>
        )
    }
}

export default App;