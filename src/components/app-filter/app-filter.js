import "./app-filter.css";
import { Component } from 'react';



const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', lable: 'Все сотрудники'},
        {name: 'rise', lable: 'На повышение'},
        {name: 'moreThen1000', lable: 'З/П больше 1000$'}
    ];
    const  buttons = buttonsData.map(({name, lable}) => {
        const active = props.filter === name;
        const clazz =  active ? 'btn-light' : 'btn-outline-light' 
        return (
            <button type="button"
                        className= {`btn ${clazz}`}
                        key = {name}
                        onClick={() => props.onFilterSelect(name)}>
                        {lable}
                </button>
        )
    })

        return (
            <div className="btn-group">
                 {buttons}
                {/* <button type="button"
                        className="btn btn-light">
                        Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        >
                        На повышение
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        З/П больше 1000$
                </button> */}
            </div>
        )
    
}

  export default AppFilter;