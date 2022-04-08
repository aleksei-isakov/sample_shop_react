import React, {useContext, useState} from 'react';
import style from './Card.module.css'
import MyButton from "../UI/Button/MyButton";
import {useNavigate} from 'react-router-dom';
import {CollectionContext} from "../../context/collection-provider";


const Card = ({card}) => {
    const cardRouter = useNavigate();
    const {myCollection, updateCollection} = useContext(CollectionContext);
    const [isCaught, setIsCaught] = useState(myCollection.includes(card.id));
    let name = card.name.charAt(0).toUpperCase() + card.name.slice(1)

    const handleClick = () => {
        const newCollection = isCaught ? myCollection.filter(id => id !== card.id) : [...myCollection, card.id];
        updateCollection(newCollection);
        setIsCaught(!isCaught);
    }

    return (
        <div className={style.card}>
            <div className={style.cardPicFrame} onClick={() => cardRouter(`/card/${card.id}`)}>
                <p className={style.id}>ID: {card.id}</p>
                <img className={style.img} src={card.sprites.other['official-artwork'].front_default} alt="PokemonPic"/>
            </div>
            <p className={style.cardName}>Name: {name}</p>
            <MyButton onClick={handleClick} >{isCaught ? 'RELEASE' : 'CATCH!'}</MyButton>
        </div>

    );
};

export default Card;