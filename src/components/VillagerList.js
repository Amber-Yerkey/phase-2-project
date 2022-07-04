import React, { useState } from 'react';
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
                    <VillagerCard key={villager.id} villager={villagerSearch} />
            </nav>
        </>
    );
}

export default VillagerList;