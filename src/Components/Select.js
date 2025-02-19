import React from 'react'

export default function Select(props) {
    const { className, children, onChange, ...extraProps } = props;
    return (
        <select className={`mb-4 p-2 rounded-lg text-black ${className}`} onChange={onChange} {...extraProps}>
            {children}
        </select>
    )
}
