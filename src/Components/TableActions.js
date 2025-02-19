import React from 'react'

export default function TableActions({ id }) {
    return (
        <div className='inline-flex gap-2'>
            <a className='' href={`/UpdateData?id=${id}`}>Edit</a>
            <a className="text-red-500" href={`/DeleteData?id=${id}`}>Delete</a>
        </div>
    )
}
