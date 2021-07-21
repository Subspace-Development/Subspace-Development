import React from 'react'

export default function ExperienceItem(props) {
    return (
        <div className="experience-item">
            <div className="experience-item-top">
                <span className="experience-item-position">
                    <strong>{props.position}</strong>
                </span>
                <span className="experience-item-time">{props.start} - {props.end}</span>
            </div>
            <span className="experience-item-location">
                {props.location}
            </span>
            <div class="experience-item-details">
                {props.children}
            </div>
        </div>
    )
}
