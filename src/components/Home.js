import React from 'react';
import { Box, Carousel, Image } from 'grommet';


function Home() {
    const date = new Date()
    return ( 
        <><h1 align="center">Animal Crossing: New Horizon Guide</h1>
        <p align="center">This is a guide for the video game Animal Crossing: New Horizons.
            Currently I have data for Villagers and the Critterpedia with more to come!</p>

      <Box align="center">
        <Box>
            Birthdays 
            {/* Today is {$name} 's birthday */}
        </Box>
        <Carousel play={5000}>
            <Image src='https://acnhapi.com/v1/images/villagers/1' />
            <Image src='https://acnhapi.com/v1/images/villagers/2' />
            <Image src='https://acnhapi.com/v1/images/villagers/3' />
        </Carousel>
      </Box>
        </>
     );
}

export default Home;