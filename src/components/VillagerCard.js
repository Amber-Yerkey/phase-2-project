import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardHeader, CardBody, Grid, ResponsiveContext, Grommet } from 'grommet'

function VillagerCard({villager}) {
    const size = useContext(ResponsiveContext);
    // console.log(villager)

    const theme = {
        global: {
          font: {
            family: `-apple-system,
               BlinkMacSystemFont,
               "Segoe UI"`,
          },
          colors: {
            blue: '#00C8FF',
            green: '#17EBA0',
            teal: '#82FFF2',
            purple: '#F740FF',
            red: '#FC6161',
            orange: '#FFBC44',
            yellow: '#FFEB59',
          },
        },
        card: {
          footer: {
            pad: { horizontal: 'medium', vertical: 'small' },
            background: '#FFFFFF27',
          },
        },
      };

    return (
    <Grommet theme={theme} full>
        <Box pad="large">
            <Grid gap="small" rows="small" columns={{count: 'fit', size: 'small'}} >
                {villager.map((newCard) => (
                    <Link to={`/villagers/${newCard.id}`} key={newCard.id}>
                    <Card height="small" width="small" background='#f1f3c4'
                    hoverIndicator={{
                        background: { color: 'background-contrast' }
                        , elevation: 'medium'
                    }} onClick={() => console.log("Click")}>
                    <CardHeader className='cardHeader'><h4>{newCard.name['name-USen']}</h4></CardHeader>
                    <CardBody><img src={newCard.icon_uri} /></CardBody>
                </Card>
                </Link>
                ))}

            </Grid>
        </Box>
    </Grommet>
    );
}


// {newCard.name}
{/* <Card pad="small" background='#f1f3c4'
hoverIndicator={{
    background: { color: 'background-contrast' }
    , elevation: 'medium'
}}> */}



export default VillagerCard;