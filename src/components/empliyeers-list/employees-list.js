import EmployeesListItem from "../empliyeers-list-item/employees-list-item";
import { Component } from 'react';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })
        /* const elementsSecond = data.map(item => {
            return (
                <Test 
                key = {item.id} 
                name = {item.name} 
                salary = {item.salary}
                onDelete = {() => onDelete(item.id)}/>
            )
        })  */
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;