import React from 'react';
import useTitle from '../Components/SetTitle';

const DisplayTeam = () => {
    useTitle('DisplayTeam');
    return (
        <div>
            <h1>New Page</h1>
            <p>This is a new page.</p>
        </div>
    );
};

export default DisplayTeam;