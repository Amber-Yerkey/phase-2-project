import React, { useContext } from 'react';
import {  Box, Card, CardHeader, CardBody, Grid, Image, ResponsiveContext } from 'grommet'
import { useNavigate } from "react-router-dom";

function VillagerCard({ name, image, id }) {
    const size = useContext(ResponsiveContext);
    const navigate = useNavigate();

    // function handleCardClick(e){
    //      e.preventDefault();
    //     navigate('/' + name);
    // }

    return ( 
        <>
        <Box fill pad="small" >
            <Grid columns={size !== 'small' ? 'small' : '100%'} >
                    <Card pad="medium" key={id} background='#f1f3c4' 
                    hoverIndicator={{background: {color:'background-contrast'}
                    ,elevation:'medium'}}>
                    {/* onClick={handleCardClick}> */}
                    <CardHeader><h4>{name}</h4></CardHeader>
                    <CardBody><Image src={image} /></CardBody>
                    </Card>
            </Grid>
        </Box>
        </>
     );
}

// columns={size !== 'small' ? 'small' : '100%'}

export default VillagerCard;