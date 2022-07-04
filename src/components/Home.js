import React from 'react';
import { Box, Carousel, Image } from 'grommet';


function Home({villager}) {
    // console.log(villager)
    const date = new Date()
    const month  = date.getUTCMonth() + 1
    const day = date.getUTCDate()

    console.log(`${day} + / + ${month}`)

    const newArr = [];
    const VillagerBday = villager.map((newBday) => {
        if (newBday.birthday === `${day}` + "/" + `${month}`){
            newArr.push(newBday.id)
        } else {
        }
    })
    console.log(newArr)
    return ( 
        <><h1 align="center">Animal Crossing: New Horizon Guide</h1>
        <p align="center">This is a guide for the video game Animal Crossing: New Horizons.
            Currently I have data for Villagers and the Critterpedia with more to come!</p>

      <Box align="center">
        <Box>
            <h2>Birthdays</h2>
        </Box>
        <Carousel play={5000}>
            {newArr.map((bday) => {
                return <Image key={bday} src={`https://acnhapi.com/v1/images/villagers/${bday}`} />
            })}
        </Carousel>
      </Box>
        </>
     );
}

export default Home;