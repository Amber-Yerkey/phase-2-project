import React from 'react';
import { Search } from 'grommet-icons'
import { Box, TextInput } from 'grommet'


function VillagerFilter({ search, setSearch }) {

    function handleSearch(e){
        setSearch(e.target.value)
    }

    return ( <>
    <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
            <TextInput 
                icon={<Search />} 
                placeholder="Search"
                value={search}
                onChange={handleSearch} />
        </Box>
    </Box>    
    </> );
}

export default VillagerFilter;