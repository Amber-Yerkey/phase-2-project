import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"
import { Box, Grommet } from 'grommet';
import Home from "./Home";
import NavBar from './NavBar';
import VillagerList from "./VillagerList";
import CritterData from "./CritterData";
import VillagerInfo from './VillagerInfo';

const theme = {
  global: {
    colors: {
      header: 'green',
      background: '#ebedd5'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    },
  }
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='center'
    background= "url('https://data.whicdn.com/images/346178640/original.png')"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);


function App() {

  const [villagerList, setVillagers] = useState([]);
  
  //pull villager data to give to multiple components
  useEffect(() => {
    fetch("https://acnhapi.com/v1a/villagers/")
        .then((resp) => resp.json())
        .then((data) => { setVillagers(data) })
        .catch((error) => { console.error(error) })
}, [])

  return (
    <Grommet theme={theme}>
        <AppBar>
          <NavBar />
        </AppBar>
        <Routes>
          <Route path="/" element={<Home villager={villagerList} />} />
          <Route path="/villagers" element={<VillagerList villager={villagerList} />} />
          <Route path="/villagers/:id" element={<VillagerInfo />} />
          <Route path="/critterpedia" element={<CritterData />} />
          <Route path="*" element={<p>There's Nothing Here!</p>} />
        </Routes>
    </Grommet>
  );
}

export default App;
