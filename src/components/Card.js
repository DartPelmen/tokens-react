import './Card.css'

export default function Card(props){
    return <div className={props.class}>
            <img className="avatar" src={props.image} alt="аватарка"></img>
            <div className="content">
                <h3 className="username">{props.username}</h3>
                <p className="message">{props.message}</p>
            </div>
    </div>
}