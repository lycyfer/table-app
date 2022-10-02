import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            isToggleOn: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            
        })
        console.log(e.target.value)
    }
   onSubmit = (e) => {
        e.preventDefault();
       
        if(this.state.name.length < 3 || !this.state.salary) {
            this.setState({
                name: '',
                salary: '',
                isToggleOn: true
            })
        } else {
            this.props.onAddEmployee(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                isToggleOn: false
            })
        }
       
   }

    render() {
        const {name, salary} = this.state; 
        console.log(Boolean(this.onSubmit))
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className= 'add-form d-flex'>
                    <input type="text"
                        className={this.state.isToggleOn ? 'form-control new-post-label change-color' 
                        : 'form-control new-post-label'}
                        placeholder="Как его зовут?" 
                        name = "name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className={this.state.isToggleOn ? 'form-control new-post-label change-color' 
                        : 'form-control new-post-label'}
                        placeholder="З/П в $?" 
                        name = 'salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            onClick={this.onSubmit}
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;