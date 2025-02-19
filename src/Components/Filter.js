import React, { useState } from 'react'
import Button from './Button'
import ByTeam from './Filters/ByTeam';
import YearlyStats from './Filters/YearlyStats';
import ByWins from './Filters/ByWins';
import AverageGoals from './Filters/AverageGoals';


export default function Filter({
    setFilterParams,
    setFilterType,
    currentFilter,
    options
}) {
    const [byTeamIsOpen, setByTeamIsOpen] = useState(false);
    const [byWinsIsOpen, setByWinsIsOpen] = useState(false);
    const [text, setText] = useState('');
    const [yearlyIsOpen, setYearlyIsOpen] = useState(false);
    const [avgGoalForIsOpen, setAvgGoalForIsOpen] = useState(false);
    const submit = (type) => {
        switch (type) {
            case 'team':
                setFilterType('ByTeam');
                setFilterParams({
                    team: text
                })
                break;

            case 'byWins':
                setFilterType('ByWins');
                setFilterParams({
                    input: text
                })
                break;

            case 'byYear':
                setFilterType("ByYear");
                setFilterParams({
                    year: text
                })
                break;

            case 'get_avg_goals':
                setFilterType("avgGoalFor");
                setFilterParams({
                    year: text
                })
                break

            default:
                break;
        }
    }
    return (
        <div className='rounded-2xl p-4 flex flex-col text-base items-end'>
            <div className='flex gap-2 mb-2 min-w-[38rem] justify-end'>
                <Button className='w-40' onClick={() => setByTeamIsOpen(!byTeamIsOpen)}>Filter By Team</Button>
                <Button onClick={() => setYearlyIsOpen(!yearlyIsOpen)}>Yearly</Button>
                <Button onClick={() => setByWinsIsOpen(!byWinsIsOpen)}>By Wins</Button>
                <Button onClick={() => setAvgGoalForIsOpen(!avgGoalForIsOpen)}>Avg Goal For</Button>

                {currentFilter !== 'all' && <Button onClick={() => { setFilterType('all'); setFilterParams({}) }}>Clear Filters</Button>}
            </div>
            {
                byTeamIsOpen && <ByTeam text={text} setText={setText} submit={() => submit('team')} />
            }
            {
                byWinsIsOpen && <ByWins text={text} setText={setText} submit={() => submit('byWins')} />
            }
            {
                yearlyIsOpen && <YearlyStats text={text} setText={setText} submit={() => submit('byYear')} options={options} />
            }

            {
                avgGoalForIsOpen && <AverageGoals text={text} setText={setText} submit={() => submit('get_avg_goals')} />
            }

        </div>
    )
}

