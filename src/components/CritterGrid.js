import React from 'react';
import { Box, CheckBox, DataTable, Image } from 'grommet';
import { bugs } from "../dataTest";


function CritterGrid() {

    const [checked, setChecked] = React.useState([]);

    const onCheck = (event, value) => {
        if (event.target.checked) {
            setChecked([...checked, value]);
        } else {
            setChecked(checked.filter((item) => item !== value));
        }
    };

    const onCheckAll = (event) =>
        setChecked(event.target.checked ? bugs.map((datum) => datum.name) : []);

    return (
        <>
            <div><h2 align="center">Critterpedia</h2></div>
            <Box align="center">
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
                              checked={checked.length === bugs.length}
                              indeterminate={
                                checked.length > 0 && checked.length < bugs.length
                              }
                              onChange={onCheckAll}
                            />
                        ),
                        sortable: false,
                    },
                    {
                        property: 'icon_uri',
                        render: ({ icon_uri }) => (
                            <Image
                                key={icon_uri}
                                src={`${icon_uri}`}
                            />
                        ),
                        header: 'Icon'
                    },
                    { property: 'name.name-USen', header: 'Name' },
                    { property: 'price', header: 'Price' }
                ]} data={bugs} sortable />
            </Box>
        </>
    );
}

export default CritterGrid;