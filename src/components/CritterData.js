import React, { useState, useEffect } from 'react';
import CritterGrid from './CritterGrid'

function CritterData() {

    const [bugList, setBugList] = useState([]);
    const [checked, setChecked] = useState([]);
    const [favoriteBugs, setFavoriteBugs] = useState([]);
    const [fullListView, setFullListView] = useState(true);

    useEffect(() => {
        fetch("https://acnhapi.com/v1a/bugs/")
            .then((resp) => resp.json())
            .then((data) => { setBugList(data) })
            .catch((error) => { console.error(error) })
    }, [])


    useEffect(() => {
        fetch("http://localhost:3000/bugs")
            .then((resp) => resp.json())
            .then((data) => { setFavoriteBugs(data) })
            .catch((error) => { console.error(error) })
    }, [])


    function resetList() {
        setFullListView(true)
    }

    function resetFavList(){
        setFullListView(false)
    }

    function handleFavorite(id, icon_uri, name, availability, price) {
        const itemData = {
            id: id,
            icon_uri: icon_uri,
            name: name,
            availability: availability,
            price: price,
        };

        const found = favoriteBugs.some(el => el.id === id)
        if (found && fullListView === false) {
            const deleteBugIndex = favoriteBugs.findIndex(el => el.id === id)
            const deleteBug = (deleteBugIndex) => {
                setFavoriteBugs([
                    ...favoriteBugs.slice(0, deleteBugIndex),
                    ...favoriteBugs.slice(deleteBugIndex + 1, favoriteBugs.length)
                ])
            }
            fetch(`http://localhost:3000/bugs/${id}`, {
                method: "DELETE",
            })
                .then((r) => r.json())
                .then(() => deleteBug(deleteBugIndex));
        } else if (found && fullListView === true) {
            alert("Already in favorites!")
        } else {
            fetch("http://localhost:3000/bugs", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(itemData),
            })
                .then((resp) => resp.json())
                .then((data) => { setFavoriteBugs([...favoriteBugs, data]) })
                .catch((error) => { console.error(error) })
                alert("Added to favorites")
        }
    }

    const fullList = {
        bugList: bugList,
        checked: checked,
        setChecked: setChecked,
        handleFavorite: handleFavorite,
        resetList: resetList,
        fullListView: fullListView,
        resetFavList: resetFavList
    }

    const favList = {
        favoriteBugs: favoriteBugs,
        checked: checked,
        setChecked: setChecked,
        handleFavorite: handleFavorite,
        resetList: resetList,
        fullListView: fullListView,
        resetFavList: resetFavList
    }

    return (<>
        {fullListView ? <CritterGrid {...fullList} /> : <CritterGrid {...favList} />}
    </>);
}

export default CritterData;