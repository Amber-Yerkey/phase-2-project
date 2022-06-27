import React from 'react';
import { useNavigate } from 'react-router-dom';

function VillagerInfo() {
    let navigate = useNavigate();

    return ( <>
    <button onClick={() => navigate(-1)}>Back</button>
    </> );
}

export default VillagerInfo;