import './employees-list-item.css';

 const EmployeesListItem = (props) => {
    const {
        name,
        salary,
        onDelete,
        onToggleProp,
        onChangeSalary,
        increase,
        rise,
    } = props;
    
    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) classNames += ' increase';

    if (rise) classNames += ' like';

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle='rise'>{name}</span>
            <input type="number" step="1" min="1" max="100000" className="list-group-item-input" onChange={onChangeSalary} value={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-bell btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'>
                    <i className="fas fa-bell"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;
