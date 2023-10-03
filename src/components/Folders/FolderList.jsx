import FolderListItem from './FolderListItem';

import list from '../../assets/img/list.svg';

const FolderList = ({ folders, onToggleProp, onRemove }) => {
    
    const elements = folders.length > 0 ? (
        
        folders.map(item => {
            const {id, ...itemProps} = item;

            return (
                <FolderListItem 
                    key={id}
                    {...itemProps}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    onRemove={() => onRemove(id)}
                />
            )

        })
    
    ) : (
        <span>Нет папок</span>
    )

    return (
        <div className="folders__list">
            <div className="folders__list_title">
                <img src={list} alt="list" />
                <h2>Папки</h2>
            </div>
            <div className="folders__list_items">
                <ul>
                    {elements}
                </ul>
            </div>
        </div>
    )
}

export default FolderList;