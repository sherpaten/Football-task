import React from 'react'
import Input from '../Input'
import Button from '../Button'

export default function ByWins({ text, setText, submit }) {
    return (
        <div className='flex flex-col'>
            <Input label="Filter By Wins" type="number" value={text} onChange={(e) => setText(e.target.value)} placeholder="Greater than wins" required />
            <Button onClick={submit}>Submit</Button>
        </div>
    )
}
