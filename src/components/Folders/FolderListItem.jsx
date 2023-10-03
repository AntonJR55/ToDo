import remove from '../../assets/img/remove.svg';

const FolderListItem = (props) => {
    const { folder, selectedColor, active, onToggleProp, onRemove } = props;

    let classNames = "folders__list_items-item";
        if (active) {
            classNames += ' active';
        }
    
    return (
        <li className={classNames}>
            <div style={{
                    backgroundColor: selectedColor
                }}
            >
            </div>
            <span onClick={onToggleProp} data-toggle="active">{folder}</span>
            <img src={remove} alt="Remove" onClick={onRemove}/>
        </li>
    )
}

export default FolderListItem;