import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', text: 'Все сотрудники'},
        {name: 'rise', text: 'На повышение'},
        {name: 'salary', text: 'З/П больше 1000'},
    ];

    const buttons = buttonsData.map(({name, text}) => {
        const active = props.activeFilter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onSetFilter(name)}>
                {text}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;