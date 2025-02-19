import React, { useEffect, useState } from 'react'
import Axios from '../Plugins/Axios';
import useTitle from '../Components/SetTitle';
const allTeams = async () => {
    const request = await Axios.get('/all_teams');
    return request.data.data;
}
const Teams = () => {

    const [teams, setTeams] = useState([]);
    useTitle('Teams');

    useEffect(() => {
        allTeams().then((data) => {
            setTeams(data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#FFEB3B]">Teams</h2>
            <div className='flex flex-col '>
                <ul>
                    {
                        teams.map((team, index) => (
                            <li key={index} className='text-white p-2 border-b border-gray-600'>
                                <h3>{team}</h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Teams