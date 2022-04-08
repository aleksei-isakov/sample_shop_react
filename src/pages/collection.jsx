import React, {useContext, useEffect, useState} from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import CardList from "../components/CardList/CardList";
import {CollectionContext} from "../context/collection-provider";
import styles from '../styles/collection.module.css'



const Collection = () => {
    const [cards, setCards] = useState([]);
    const {myCollection} = useContext(CollectionContext);

    useEffect(() => {
        fetchPokemons();
    }, [myCollection])

    async function getPokemon(id) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
    }

    const fetchPokemons = async () => {
        let pokemons = await Promise.all(myCollection.map(async (id) => {
            return await getPokemon(id)
        }))
        setCards(pokemons)
    }

    return (
        cards.length === 0
            ?
            <div className="App">
                <NavBar />
                <h1 className={styles.collectionTitle}>Your collection is empty!<br/>You can collect pokemons by hitting "CATCH" button </h1>
                <Footer />
            </div>
            :
            <div className="App">
                <NavBar />
                <CardList card={cards}/>
                <Footer />
             </div>
    );
};

export default Collection;