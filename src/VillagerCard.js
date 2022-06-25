import React, { useContext } from 'react';
import { Card, Grid, Image, ResponsiveContext } from 'grommet'

function VillagerCard() {
    const size = useContext(ResponsiveContext);
    return ( 
        <>
            <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
                <Card align="center">Villager Name<Image src='https://acnhapi.com/v1/images/villagers/1' /></Card>
            </Grid>
        </>
     );
}

export default VillagerCard;