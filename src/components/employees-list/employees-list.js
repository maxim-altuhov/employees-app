import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        
        return (
            <EmployeesListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={(e) => onChangeSalary(id, e.currentTarget.value)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements.length > 0 ? elements : <li className="list-group-item">Список пуст</li>}
        </ul>
    )
}

export default EmployeesList;