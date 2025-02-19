import React from 'react'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'

export default function YearlyStats({ text, setText, submit, options }) {
    return (
        <div className='flex flex-col'>
            {/* <Input label="Get Yearly Stats" type="number" value={text} onChange={(e) => setText(e.target.value)} placeholder="Year" required /> */}
            <Select value={text} onChange={(e) => setText(e.target.value)}>

                <option value="" disabled>Select Year</option>
                {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </Select>
            <Button onClick={submit}>Submit</Button>
        </div>
    )
}
