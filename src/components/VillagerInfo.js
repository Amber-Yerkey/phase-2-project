import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VillagerInfo() {
    const params = useParams();
    // console.log(params.id)
    // console.log(params)

    const [newVillagers, setNewVillagers] = useState([]);

    useEffect(() => {
        fetch("https://acnhapi.com/v1a/villagers/" + params.id)
            .then((resp) => resp.json())
            .then((data) => { setNewVillagers(data) })
            .catch((error) => { console.error(error) })
    }, [])

    // console.log(newVillagers)
    return (
        <div>
            {/* <h2>{newVillagers.name['name-USen']}</h2> */}
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