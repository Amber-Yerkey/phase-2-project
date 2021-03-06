import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VillagerInfo() {
    const params = useParams();
    const [newVillagers, setNewVillagers] = useState([]);

    //pulls villager with that specific id to return info
    useEffect(() => {
        fetch("https://acnhapi.com/v1a/villagers/" + params.id)
            .then((resp) => resp.json())
            .then((data) => { setNewVillagers(data) })
            .catch((error) => { console.error(error) })
    }, [])

    return (
        <div>
            <div className='villager-container' >
                <img className= 'villager-image' src={newVillagers.image_uri} />
                <div className='villager-info'>
                <p><strong>Birthday: </strong> {newVillagers["birthday-string"]}</p>
                <p><strong>Personality: </strong> {newVillagers["personality"]}</p>
                <p><strong>Gender: </strong> {newVillagers["gender"]}</p>
                <p><strong>Species: </strong> {newVillagers["species"]}</p>
                <p><strong>Hobby: </strong> {newVillagers["hobby"]}</p>
                <p><strong>Catch-Phrase: </strong> {newVillagers["catch-phrase"]}</p>
                <p><strong>Saying: </strong>{newVillagers["saying"]}</p>
                </div>
            </div>
        </div>
    )
}

export default VillagerInfo;