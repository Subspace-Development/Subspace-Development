import React from 'react'

export default function Profile(props) {
    return (
        <div className="profile">
            {props.img && <img className="profile-image" src={props.img} alt={props.name} />}
            <h1 className="name">{props.name}</h1>
            <h3 className="tagline">{props.tagline}</h3>
        </div>
    )
}
