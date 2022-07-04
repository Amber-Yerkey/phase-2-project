import React from 'react';
import {Box, Button} from 'grommet';

function CritterNav({ resetList, resetFavList}) {

    //shows full list of bugs
    function handleToggleFull(){
        resetList()
    }

    //shows only favorited bugs
    function handleToggleFavorite(){
        resetFavList()
    }

    return (<>
        <Box gridArea="nav" align='center'>
        <Button primary label="Full List" color='#63d8c1' onClick={(e) => handleToggleFull(e)} />
        <Button primary label="Favorites" color='#63d8c1' onClick={(e) => handleToggleFavorite(e)} />
        </Box>
    </>);
}

export default CritterNav;