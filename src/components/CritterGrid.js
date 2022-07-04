import { Box, CheckBox, DataTable, Grid } from 'grommet';
import CritterNav from './CritterNav';


function CritterGrid({ bugList, checked, setChecked, handleFavorite, favoriteBugs, fullListView, resetList, resetFavList }) {

    //used for check boxes
    const onCheck = (event, value, id, icon_uri, name, availability, price) => {
        if (event.target.checked) {
            setChecked([...checked, value])
        } else {
            setChecked(checked.filter((item) => item !== value));
        }
        handleFavorite(id, icon_uri, name, availability, price)
    };

    return (

        <Box>
            {/* header */}
            <Box
                gridArea="header"
                //   background="neutral-2"
                justify="center"
                align="center"
            >
                <h2>Critterpedia</h2>
            </Box>

            <Grid
                fill
                areas={[
                    { name: 'nav', start: [0, 0], end: [0, 0] },
                    { name: 'main', start: [1, 0], end: [1, 0] },
                ]}
                columns={['small', 'flex']}
                rows={['flex']}
                gap="small"
            >
                {/* Navigation Component */}
                <CritterNav resetList={resetList} resetFavList={resetFavList} />

                <Box gridArea='main'>
                    {/* leftmost column for check boxes */}
                    <DataTable columns={[
                        {
                            property: 'checkbox',
                            render: ({ id, icon_uri, name, availability, price }) => (
                                <CheckBox
                                    key={id}
                                    checked={checked.indexOf(id) !== -1}
                                    onChange={(e) =>
                                        onCheck(e, id, id, icon_uri, name, availability, price)}
                                />
                            ),
                            header: (
                                <CheckBox />
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
                        { property: 'availability.month-northern', header: 'Month' },
                        { property: 'availability.time', header: 'Time' }
                    ]}
                        // points to data sorce and determines remaining columns sortable
                        data={fullListView ? bugList : favoriteBugs} sortable />
                </Box>
            </Grid>
        </Box>
    );
}

export default CritterGrid;