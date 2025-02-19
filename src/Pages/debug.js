import React from 'react'
import Icon from '../Components/Icon'
import Input from '../Components/Input'

export default function debug() {
    return (
        <>
            <h1 className="text-4xl">Debug</h1>
            <p className="text-lg">This is a debug page.</p>

            <Icon name="help" />
            <Input type="text" placeholder="Type something" label='Test Label' />
        </>
    )
}
