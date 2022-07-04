import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom"
import VillagerCard from "./VillagerCard"
import VillagerFilter from './VillagerFilter';



function VillagerList({villager}) {

    const [search, setSearch] = useState("");

    const villagerSearch = villager
        .filter((VillagerCard) => VillagerCard.name['name-USen'].toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <h1 align="center">Villagers</h1>
            <VillagerFilter search={search} setSearch={setSearch} />

            <nav>
                {console.log(villager)}
            {/* {villagerSearch.map((villager) => ( */}
                {/* <Link to={`/villagers/${villager.id}`} key={villager.id}> */}
                    <VillagerCard key={villager.id} villager={villagerSearch} />
                {/* </Link> */}
             {/* ))} */}
            </nav>
        </>
    );
}

// name={villager.name['name-USen']} image={villager.icon_uri}

export default VillagerList;