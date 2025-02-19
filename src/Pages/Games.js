import React, { useEffect, useState } from 'react'
import Axios from '../Plugins/Axios'
import Loading from '../Components/Loading';
import Button from '../Components/Button'
import Filter from '../Components/Filter';
import TableActions from '../Components/TableActions';


const fetchGames = async (type, params) => {
    const types = {
        "all": "/",
        "ByTeam": "/",
        "ByWins": "/get_wins/",
        "ByYear": `get_stats/${+params.year}`,
        'avgGoalFor': '/get_avg_goals/'
    }


    const request = await Axios.get(types[type], { params });
    return request.data.data;
}
const Games = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const [filterParams, setFilterParams] = useState({});
    const [filterType, setFilterType] = useState('all');
    const [uniqueYears, setUniqueYears] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        setGames([]);
        fetchGames(filterType, filterParams).then((data) => {
            setGames(data);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [filterType, filterParams]);

    useEffect(() => {
        games.length > 0 && setUniqueYears([...new Set(games.map(game => game.year))]);
    }, [games]);


    const Heading = (tag) => {
        return (
            <div className='text-2xl font-bold mb-2 flex justify-between items-center'>
                <span className='self-start'>{tag}</span>
                <div className='w-96 items-end flex flex-col'>
                    <div className='flex flex-col items-end'>
                        {filterType !== 'all' && <>
                            <p>Active Filter: <span className='text-blue-500'>{filterType}</span></p>
                            <div className='inline-flex flex-col items-end'>
                                <span>Filter Criteria:</span>
                                <span className='text-green-500'>{JSON.stringify(filterParams)}</span>
                            </div>
                        </>}

                        {
                            filterType === 'all' && <>
                                <p>No filters active</p>
                            </>
                        }
                        <Button className="lg:w-20" onClick={() => setFilterIsOpen(!filterIsOpen)}>Filter</Button>
                    </div>
                    {
                        filterIsOpen && <Filter currentFilter={filterType} setFilterParams={setFilterParams} setFilterType={setFilterType} options={uniqueYears} />
                    }
                </div>
            </div>
        )
    }

    // Show loading screen if the data is still loading 
    // or if the filter type is not ByYear and games is not an array
    // removing this will cause an error when trying to map the games 
    if (isLoading || (filterType !== 'ByYear' && !Array.isArray(games))) {
        return <Loading />
    }

    if (filterType === 'ByYear') {
        return (
            <>
                {Heading(`Yearly Stats for ${filterParams.year}`)}
                <div className="border border-gray-400 rounded-2xl overflow-hidden">
                    <table className="games-table">
                        <thead>
                            <tr>
                                <th>
                                    Total Games Played
                                </th>
                                <th>
                                    Draw
                                </th>
                                <th>
                                    Wins
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {games.totalGamesPlayed}
                                </td>
                                <td>
                                    {games.totalDraws}
                                </td>
                                <td>
                                    {games.totalWins}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }


    return (
        <>
            {Heading('All Games')}
            <div className="border border-gray-400 rounded-2xl">
                <table className="games-table">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Team Name
                            </th>
                            <th>
                                Game Played
                            </th>
                            <th>
                                Game Win
                            </th>
                            <th>
                                Game Draw
                            </th>
                            <th>
                                Game Loss
                            </th>
                            <th>
                                Goal For
                            </th>
                            <th>
                                Goal Against
                            </th>
                            <th>
                                Game Points
                            </th>
                            <th>
                                Game Year
                            </th>
                            {
                                filterType === 'avgGoalFor' && (
                                    <th>
                                        Average Goals For
                                    </th>
                                )
                            }

                            <th>
                                Actions
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            games.length === 0 && (
                                <tr>
                                    <td colSpan={11} className="text-center">
                                        No Data Found
                                    </td>
                                </tr>
                            )
                        }
                        {
                            games.length !== 0 && games.map((game, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {game.team}
                                        </td>
                                        <td>
                                            {game.games_played}
                                        </td>
                                        <td>
                                            {game.win}
                                        </td>
                                        <td>
                                            {game.draw}
                                        </td>
                                        <td>
                                            {game.loss}
                                        </td>
                                        <td>
                                            {game.goals_for}
                                        </td>
                                        <td>
                                            {game.goals_against}
                                        </td>
                                        <td>
                                            {game.points}
                                        </td>
                                        <td>
                                            {game.year}
                                        </td>
                                        {
                                            filterType === 'avgGoalFor' && (
                                                <td>
                                                    {game.avg_goals_for}
                                                </td>
                                            )
                                        }
                                        <td>
                                            <TableActions id={game._id} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Games