import React from 'react'

export default function Alert(props) {
    const { type } = props;

    return (
        <div className={`alert alert-${type}`}>
            {props.children}
        </div>
    );
}
