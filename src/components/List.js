import Card from "./Card";
import './List.css'
const List = l=>{

    return <div className="list">
        {l.source()
        .map(e=><Card class="card" image={e.image} username={e.user} message={e.message}/>)}
    </div>
}
export default List;