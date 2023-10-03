import React from 'react';
import { Component } from 'react';

import addTask from '../../assets/img/add.svg';

class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            isCloseForm: true
        }
    }

    onOpenForm = () => {
        this.setState({ 
            isCloseForm: false
        })
    }

    onCloseForm = () => {
        this.setState({ 
            isCloseForm: true
        })
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { task } = this.state;
        if (!task) return;
        this.props.onAddTask(task);
        this.setState({
            task: '',
        })
    }

    render() {
        const { task, isCloseForm } = this.state;
        return (
            <div className="tasks__list_addForm">
                {isCloseForm ? (
                    <div className="tasks__list_addForm-main" onClick={this.onOpenForm}>
                        <div className="tasks__list_addForm-img">
                            <img src={addTask} alt="Add task" />
                        </div>
                        <div className="tasks__list_addForm-text">
                            <span>Новая задача</span>
                        </div>
                    </div>
                    ) : (
                    <form className="tasks__list_addForm-panel" onSubmit={this.onSubmit}>
                        <div className="tasks__list_addForm-input">
                            <input 
                                type="text" 
                                placeholder="Текст задачи" 
                                name="task"
                                value={task}
                                onChange={this.onChangeValue} 
                            />
                        </div>
                        <div className="tasks__list_addForm-btns">
                            <div className="tasks__list_addForm-btnAdd">
                                <button type="submit">
                                    <span>Добавить задачу</span>
                                </button>
                            </div>
                            <div className="tasks__list_addForm-btnClose">
                                <button type="button" onClick={this.onCloseForm}>
                                    <span>Отмена</span>
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        )
    }
}

export default TaskAddForm;