import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import CardList from "../components/CardList/CardList";
import Loader from "../components/UI/LoadingAnimation/Loader";
import Pagination from "../components/UI/Pagination/Pagination";


const Home = () => {

    const [cards, setCards] = useState([])
    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
         setIsLoading(true)
         let cancel
         axios.get(currentUrl, {
             cancelToken: new axios.CancelToken(c => cancel = c)
             }).then(result => {
           fetchPokemons(result.data.results)
           setNextUrl(result.data.next)
           setPrevUrl(result.data.previous)
           setIsLoading(false)
       })
        return () => cancel()
    }, [currentUrl])

    async function getPokemon(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        })
    }

    const fetchPokemons = async (data) => {
        let pokemon = await Promise.all(data.map(async pokemon => {
            return await getPokemon(pokemon.url)
        }))
        setCards(pokemon)
    }


    const toNextPage = () => {
        setCurrentUrl(nextUrl)
    }

    const toPrevPage = () => {
        setCurrentUrl(prevUrl)
    }

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
                <CardList card={cards}/>
                <Pagination toNext={nextUrl ? toNextPage : null} toPrev={prevUrl ? toPrevPage : null}/>
                <Footer />
            </div>
    )
};

export default Home;