import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesAddForm from '../empliyeers-add-form/employees-add-form';
import EmployeesList from '../empliyeers-list/employees-list';



import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'key', salary: 800, increase: false, rise: false, id: 1 },
        { name: 'aloha', salary: 500, increase: false, rise: true, id: 2 },
        { name: 'bebra', salary: 8000, increase: false, rise: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    }
    this.maxID = 3;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex(elem => elem.id === id)
      /*    const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after]; */
      return {
        data: data.filter(item => item.id != id)
      }
    })
  }

  onAddEmployee = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rice: false,
      id: this.maxID + 1
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  onToggleIncrease = (id) => {
    /*     this.setState(({data}) => {
          const index = data.findIndex(elem => elem.id === id);
    
          const old = data[index];
          const newItem = {...old, increase: !old.increase};
          const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
          return {
            data : newArr
          }
        }) */
    /* this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {
            ...item, increase: !item.increase
          }
        }
        return item;
      })
    })) */
  }
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  onUpdateSearch = (term) => {
    this.setState({ term: term })
  }
  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise )
      case 'moreThen1000' :
        return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter: filter});
  }

  render() {
    const { data, term, filter} = this.state;
    const employees = data.length
    const increased = data.filter(item => item.increase).length
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter = {filter} onFilterSelect = {this.onFilterSelect}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAddEmployee={this.onAddEmployee} />
      </div>
    );
  }

}

export default App;