import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: false
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,  
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;

        if (name.length >= 2 && salary > 0) {
            this.props.onAddItem(name, salary)
            this.setState(() => ({
                name: '',
                salary: '',
                error: false,
            }));
        } else {
            this.setState((state) => ({
                ...state,
                error: true,
            }));
        }
    }

    render() {
        const { name, salary, error } = this.state;
        const errorClass = error ? 'error' : '';

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className={`form-control new-post-label ${name.length <= 2 ? errorClass : ''}`}
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        step="1" 
                        min="1" 
                        max="100000"
                        className={`form-control new-post-label ${salary <= 0 ? errorClass : ''}`}
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button 
                        type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;