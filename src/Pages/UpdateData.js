import React, { useEffect, useState } from 'react';
import useTitle from '../Components/SetTitle';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Alert from '../Components/Alert';
import Axios from '../Plugins/Axios';
import Select from '../Components/Select';


const fetchAllTeams = async () => {
    const data = await Axios.get('/');

    return data.data.data;
};
const UpdateData = () => {

    const [updated, setUpdated] = useState(false);
    const [data, setData] = useState({
        team: '',
        games_played: '',
        win: '',
        draw: '',
        loss: '',
        goals_for: '',
        goals_against: '',
        points: '',
        year: '',
    });

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetchAllTeams().then((data) => {
            setTeams(data);
        });
    }, []);


    useEffect(() => {
        // if the id param is present in the url, set the team data
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (id && teams.length > 0) {
            // check if the id is valid
            const team = teams.find(team => team._id === id);
            if (team) {
                setData(team);
            }
        }
    }, [teams]);
    useTitle('Update Team Data');

    const setTeamData = (id) => {
        const team = teams.find(team => team._id === id);
        setData(team);
    }


    async function handleEvent(e) {
        e.preventDefault();
        setUpdated('Updated Successfully');

        const req = await Axios.post(`/update/${data._id}`, data);
        if (req.data.message === "Success") {
            setUpdated(true);
        } else {
            alert('Failed to update');
        }


    }

    return (

        <div className='text-center'>
            {
                updated && <Alert type="success" timeout={10000}>Updated Successfully</Alert>

            }
            <h3 className='text-3xl mb-4 font-bold text-[#FFEB3B]'>Update Team Statistics</h3>

            <Select className='mb-4' onChange={(e) => setTeamData(e.target.value)}>
                <option value=''>Select Team</option>
                {
                    teams.map((team, index) => (
                        <option key={index} selected={team._id === data._id} value={team._id}>{team.team} - {team.year}</option>
                    ))
                }
            </Select>

            <form onSubmit={handleEvent} className='m-8'>
                <div className='flex flex-row gap-4 justify-center '>
                    <Input className=" "
                        label="Team Name"
                        type="text"
                        id="team"
                        name="team"
                        value={data.team}
                        onChange={(e) => setData({ ...data, team: e.target.value })}
                        required
                    />

                    <Input
                        label="Games Played"
                        type="number"
                        id="games_played"
                        name="games_played"
                        value={data.games_played}
                        onChange={(e) => setData({ ...data, games_played: e.target.value })}
                        required
                    />

                    <Input
                        label="Wins"
                        type="number"
                        id="win"
                        name="win"
                        value={data.win}
                        onChange={(e) => setData({ ...data, win: e.target.value })}
                        required
                    />
                </div>

                <div className='flex flex-row gap-4 justify-center '>
                <Input
                    label="Draws"
                    type="number"
                    id="draw"
                    name="draw"
                    value={data.draw}
                    onChange={(e) => setData({ ...data, draw: e.target.value })}
                    required
                />

                <Input
                    label="Losses"
                    type="number"
                    id="loss"
                    name="loss"
                    value={data.loss}
                    onChange={(e) => setData({ ...data, loss: e.target.value })}
                    required
                />

                <Input
                    label="Goals For"
                    type="number"
                    id="goals_for"
                    name="goals_for"
                    value={data.goals_for}
                    onChange={(e) => setData({ ...data, goals_for: e.target.value })}
                />

                </div>
                <div className='flex flex-row gap-4 justify-center '>
                <Input
                    label="Goals Against"
                    type="number"
                    id="goals_against"
                    name="goals_against"
                    value={data.goals_against}
                    onChange={(e) => setData({ ...data, goals_against: e.target.value })}
                />

                <Input
                    label="Points"
                    type="number"
                    id="points"
                    name="points"
                    value={data.points}
                    onChange={(e) => setData({ ...data, points: e.target.value })}
                />

                <Input
                    label="Year"
                    type="number"
                    id="year"
                    name="year"
                    value={data.year}
                    onChange={(e) => setData({ ...data, year: e.target.value })}
                />
                </div>
                <Button type='submit' className="px-10 mt-8">Update</Button>

            </form>
        </div >
    )
}

export default UpdateData