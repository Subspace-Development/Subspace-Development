import React from 'react'

export default function Sidebar(props) {
    return (
        <aside className="sidebar">
            {props.children}
        </aside>
    )
}
