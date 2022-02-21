import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpliyeesList from '../empliyeers-list/empliyeers-list';
import EmpliyeersAddForm from '../empliyeers-add-form/empliyeers-add-form';

import './app.css';

function App() {

    const data = [
      {name:'Микаса Акерман', salary: 800, increase: false, id: 1},
      {name:'Эрен Егер', salary: 2000, increase: true, id: 2},
      {name:'Леви Акерман', salary: 5000, increase: false, id: 3}
    ];

    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          <EmpliyeesList data={data}/>
          <EmpliyeersAddForm/>
      </div>
    );
  }
  
  export default App;