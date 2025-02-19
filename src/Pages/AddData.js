import { useState } from "react";
import useTitle from "../Components/SetTitle";
import Alert from "../Components/Alert";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Randomize from "../Components/Randomize";
import Axios from "../Plugins/Axios";

const AddData = () => {
    const [added, setAdded] = useState(false);

    useTitle('Add Team Data');

    const handleEvent = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const request = await Axios.post('/add', data);
        if (request.data.message === "Success") {
            setAdded(true);
        } else {
            alert('Failed to add');
        }
    }


    return (
        <div className='text-center'>
            {added && <Alert type='success'>Added Successfully</Alert>}

            <h3 className='text-3xl font-bold mb-4 text-[#FFEB3B]'>Add Team Data</h3>
            <form onSubmit={handleEvent} >
            <div className='flex flex-row gap-4 justify-center mt-8'>
                <Input
                    label="Team Name"
                    type="text"
                    id="team"
                    name="team"

                    required
                />

                <Input
                    label="Games Played"
                    type="number"
                    id="games_played"
                    name="games_played"

                    required
                />

                <Input
                    label="Wins"
                    type="number"
                    id="win"
                    name="win"

                    required
                />
            </div>
            <div className='flex flex-row gap-4 justify-center '>
                <Input
                    label="Draws"
                    type="number"
                    id="draw"
                    name="draw"

                    required
                />

                <Input
                    label="Losses"
                    type="number"
                    id="loss"
                    name="loss"

                    required
                />

                <Input
                    label="Goals For"
                    type="number"
                    id="goals_for"
                    name="goals_for"

                />
                </div>
                <div className='flex flex-row gap-4 justify-center '>
                <Input
                    label="Goals Against"
                    type="number"
                    id="goals_against"
                    name="goals_against"

                />

                <Input
                    label="Points"
                    type="number"
                    id="points"
                    name="points"

                />

                <Input
                    label="Year"
                    type="number"
                    id="year"
                    name="year"

                />
            </div>
                <Button type='submit' className="px-10 mt-8">Add</Button>
            </form>

            <Randomize parentInputElStr={"form input"} />
        </div>
    )
}

export default AddData;