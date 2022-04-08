import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from '../styles/details.module.css'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../components/UI/LoadingAnimation/Loader";
import MyButton from "../components/UI/Button/MyButton";


const Details = () => {
    const cardRouter = useNavigate()
    const params = useParams();
    const [card, setCard] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [abilities, setAbilities] = useState('')
    const [types, setTypes] = useState('')



    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(result => {
        let response = result.data
        setCard(response)
        let abilityProp = []
        response.abilities.forEach(item => abilityProp.push(item.ability.name))
        setAbilities(abilityProp.join(', '))
        let typeProp = []
        response.types.forEach(item => typeProp.push(item.type.name))
        setTypes(typeProp.join(', '))
        setIsLoading(false)
        })
    }, [])

    return (
        isLoading
        ?
        <div className='App'>
            <NavBar />
                <Loader/>
            <Footer />
        </div>
        :
        <div className='App'>
            <NavBar />
            <div>
                <h1 className={styles.name}>{card.name.toUpperCase()}</h1>
                <div className={styles.pokemonImage}>
                    <img className={styles.pokemonImg} src={card.sprites.front_default} alt="pokemon"/>
                </div>
                <p className={styles.pokeProps}>Abilities: {abilities}</p>
                <p className={styles.pokeProps}>Types: {types}</p>
                <p className={styles.pokeProps}>Weight: {card.weight}</p>
                <MyButton className={styles.button} onClick={() => cardRouter('/home')}>Back</MyButton>
            </div>
            <Footer />
        </div>
    );
};

export default Details;