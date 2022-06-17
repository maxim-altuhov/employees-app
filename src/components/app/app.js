import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: nextId()},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: nextId()},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: nextId()}
            ],
            term: '',
            activeFilter: 'all',
        }
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter((elem) => elem.id !== id),
        }))
    }

    onAddItem = (name, salary) => {
        const newData = [...this.state.data];
        newData.push({
            name,
            salary,
            increase: false,
            rise: false,
            id: nextId(),
        });

        this.setState(() => ({
            data: newData,
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map((elem) => {
                if (elem.id === id) {
                    return {...elem, [prop]: !elem[prop]};
                }

                return elem;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (items.length === 0) return items;

        return items.filter((item) => item.name.indexOf(term) !== -1)
    }

    filterOutEmp = (items, activeFilter) => {
        if (activeFilter === 'rise') {
            return items.filter((item) => item.rise)
        }

        if (activeFilter === 'salary') {
            return items.filter((item) => item.salary > 1000)
        }

        return items;
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onSetFilter = (activeFilter) => {
        this.setState({activeFilter});
    }

    render() {
       const { data, term, activeFilter } = this.state;
       const employees = data.length;
       const increased = data.filter((elem) => elem.increase).length
       const visibleData = this.filterOutEmp(this.searchEmp(data, term), activeFilter);

        return (
            <div className="app">
                <AppInfo 
                    employees={employees}
                    increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        activeFilter={activeFilter} 
                        onSetFilter={this.onSetFilter}/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.onDeleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAddItem={this.onAddItem}/>
            </div>
        );
   }
}

export default App;