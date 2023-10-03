import { Component }  from 'react';

import addFolder from '../../assets/img/add.svg';
import closePanel from '../../assets/img/close.svg'

class FolderAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folder: '',
            selectedColor: '',
            selectedCircle: '',
            isOpenForm: false
        }
    }

    onOpenForm = () => {
        this.setState({ isOpenForm: true })
    }

    onCloseForm = () => {
        this.setState({ isOpenForm: false })
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { folder, selectedColor } = this.state;
        if (!folder || !selectedColor) return;
        this.props.onAdd(folder, selectedColor);
        this.setState({
            folder: '',
            selectedColor: ''
        })
    }

    handleColor = (id, color) => {
        this.setState({ 
            selectedCircle: id,
            selectedColor: color
        })
    }

    render() {

        const { folder, selectedCircle, isOpenForm } = this.state;
        
        return (
            <div className="folders__addForm">
                <div className="folders__addForm_main" onClick={this.onOpenForm}>
                    <div className="folders__addForm_main-img">
                        <img src={addFolder} alt="Add folder" />
                    </div>
                    <div className="folders__addForm_main-text">
                        <span>Добавить папку</span>
                    </div>
                </div>
                {isOpenForm ? (
                    <form className="folders__addForm_panel" onSubmit={this.onSubmit}>
                        <div className="folders__addForm_panel-input">
                            <input 
                                type="text" 
                                placeholder="Название папки" 
                                name="folder"
                                value={folder}
                                onChange={this.onChangeValue} 
                            />
                        </div>
                        <div className="folders__addForm_panel-circle">
                            <div className="folders__addForm_panel-circle--grey" 
                                id="grey" 
                                onClick={() => this.handleColor("grey", "#8F8686")} 
                                style={{border: selectedCircle === "grey" ? "2px solid #8C8C8C" : "none"}}>
                            </div>
                            <div className="folders__addForm_panel-circle--lime" 
                                id="lime" 
                                onClick={() => this.handleColor("lime", "#b6e6bd")}
                                style={{border: selectedCircle === "lime" ? "2px solid #84BE95" : "none"}}>
                            </div>
                            <div className="folders__addForm_panel-circle--purple" 
                                id="purple" 
                                onClick={() => this.handleColor("purple", "#c355f5")}
                                style={{border: selectedCircle === "purple" ? "2px solid #771C97" : "none"}}>
                            </div>
                            <div className="folders__addForm_panel-circle--black" 
                                id="black" 
                                onClick={() => this.handleColor("black", "#08001a")}
                                style={{border: selectedCircle === "black" ? "2px solid #000000" : "none"}}>
                            </div>
                            <div className="folders__addForm_panel-circle--red" 
                                id="red" 
                                onClick={() => this.handleColor("red", "#ff6464")}
                                style={{border: selectedCircle === "red" ? "2px solid #B83737" : "none"}}>
                            </div>
                            <div className="folders__addForm_panel-circle--green" 
                                id="green" 
                                onClick={() => this.handleColor("green", "#34815C")}
                                style={{border: selectedCircle === "green" ? "2px solid #256647" : "none"}}>
                            </div>
                            <div className="folders__addForm_panel-circle--blue"
                                id="blue" 
                                onClick={() => this.handleColor("blue", "#64c4ed")}
                                style={{border: selectedCircle === "blue" ? "2px solid #568D95" : "none"}}>
                            </div>
                            <div className="folders__addForm_panel-circle--pink" 
                                id="pink" 
                                onClick={() => this.handleColor("pink", "#ffbbcc")}
                                style={{border: selectedCircle === "pink" ? "2px solid #C282A1" : "none"}}>
                            </div>
                        </div>
                        <div className="folders__addForm_panel-btnAdd">
                            <button type="submit">
                                <span>Добавить</span>
                            </button>
                        </div>
                        <div className="folders__addForm_panel-btnClose">
                            <button type="button" onClick={this.onCloseForm}>
                                <img src={closePanel} alt="Close panel" />
                            </button>
                        </div>
                    </form>
                ) : ''}
            </div>
        )
    }
} 
    
    
    

export default FolderAddForm;