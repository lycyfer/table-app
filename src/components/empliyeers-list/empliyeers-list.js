import EmpliyeesListItem from '../empliyeers-list-item/empliyeers-list-item';
import './empliyeers-list.css';

const EmpliyeesList = ({data}) => {
    const elements = data.map(item => {
            return (
                <EmpliyeesListItem {...item}/>
                // name={item.name} salary={item.salary}
            );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmpliyeesList;