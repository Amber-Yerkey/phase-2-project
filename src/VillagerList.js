import React from 'react';
import VillagerCard from "./VillagerCard"

function VillagerList() {
    return ( 
        <>
        <div>Villagers</div>
        {/* adding in a .map and passing to cards to populate them */}
        <VillagerCard />
        </>
     );
}

export default VillagerList;