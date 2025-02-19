import React from 'react'
import Input from '../Input'
import Button from '../Button'

export default function AverageGoals({ text, setText, submit }) {
    return (
        <div className='flex flex-col'>
            <Input label="Average Goals For" type="number" value={text} onChange={(e) => setText(e.target.value)} placeholder="Year" required />
            <Button onClick={submit}>Submit</Button>
        </div>
    )
}
