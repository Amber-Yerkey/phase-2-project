import React, { useEffect, useState } from 'react';
import VillagerCard from "./VillagerCard"
import VillagerFilter from './VillagerFilter';



function VillagerList() {


const [villagerList, setVillagers] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
  fetch("https://acnhapi.com/v1a/villagers/")
    .then((resp) => resp.json())
    .then((data) => { setVillagers(data.map((villager) => {return villager})) })
    .catch((error) => {console.error(error)})
}, [])

const villagerSearch = villagerList
.filter((VillagerCard) => VillagerCard.name['name-USen'].toLowerCase().includes(search.toLowerCase()));

    return ( 
        <>
        <h1 align="center">Villagers</h1>
        <VillagerFilter search={search} setSearch={setSearch} />
        {villagerSearch.map((villager) => 
        <VillagerCard key={villager.id} name={villager.name['name-USen']} image={villager.icon_uri} />)}
        
        </>
     );
}

export default VillagerList;