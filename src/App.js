import { Route, Routes } from "react-router-dom"
import { Box, Grommet } from 'grommet';
import Home from "./Home";
import NavBar from './NavBar';
import VillagerList from "./VillagerList";
import CritterGrid from "./CritterGrid";
import Footer from "./Footer";

const theme = {
  global: {
    colors: {
      header: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='center'
    background='header'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);


function App() {
  return (
    <Grommet theme={theme}>
        <AppBar>
          <NavBar />
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villagers" element={<VillagerList />} />
          <Route path="/critterpedia" element={<CritterGrid />} />
        </Routes>
        <Footer />
    </Grommet>
  );
}

export default App;
