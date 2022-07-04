import React, { useEffect, useState } from 'react';
import { Box, CheckBox, DataTable} from 'grommet';
// import { bugs } from "../dataTest";


function CritterGrid() {

    const [checked, setChecked] = useState([]);
    const [bugList, setBugList] = useState([]);

    useEffect(() => {
      fetch("https://acnhapi.com/v1a/bugs/")
        .then((resp) => resp.json())
        .then((data) => { setBugList(data.map((bug) => {return bug})) })
        .catch((error) => {console.error(error)})
    }, [])
   
//used for check boxes
    const onCheck = (event, value) => {
        if (event.target.checked) {
            setChecked([...checked, value]);
        } else {
            setChecked(checked.filter((item) => item !== value));
        }
    };
//allows a check all for the boxes
    const onCheckAll = (event) =>
        setChecked(event.target.checked ? bugList.map((datum) => datum.name) : []);

    return (
        <>
            <div><h2 align="center">Critterpedia</h2></div>
            <Box align="center">
                {/* leftmost column for check boxes  */}
                <DataTable columns={[
                    {
                        property: 'checkbox',
                        render: ({ name }) => (
                            <CheckBox
                                key={name}
                                checked={checked.indexOf(name) !== -1}
                                onChange={(e) => onCheck(e, name)}
                            />
                        ),
                        header: (
                            <CheckBox
                              checked={checked.length === bugList.length}
                              indeterminate={
                                checked.length > 0 && checked.length < bugList.length
                              }
                              onChange={onCheckAll}
                            />
                        ),
                        // prevents sorting checkboxes
                        sortable: false,
                    },
                    // column for images
                    {
                        property: 'icon_uri',
                        render: ({ icon_uri }) => (
                            <img src={`${icon_uri}`} />
                        ),
                        header: 'Icon',
                        sortable: false
                    },
                    // remaining columns, just add new one for it to appear
                    { property: 'name.name-USen', header: 'Name' },
                    { property: 'price', header: 'Price' },
                    { property: 'price-flick', header: 'Flick Price' },
                    { property: 'availability.rarity', header: 'Rarity' },
                    { property: 'availability.location', header: 'Location' },
                    // This will need to check for northern or southern
                    // and will want to return all day or all year if blank
                    { property: 'availability.month-northern', header: 'Month' },
                    { property: 'availability.time', header: 'Time' }
                ]} 
                // points to data sorce and determines remaining columns sortable
                data={bugList} sortable />
            </Box>
        </>
    );
}

export default CritterGrid;