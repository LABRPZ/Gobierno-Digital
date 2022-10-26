import {Row} from 'react-bootstrap'
import usePokemons from '../hooks/usePokemons'
import Pokemon from './Pokemon'
import {useEffect} from 'react'
import  './pokecard.css';


const Pokecard =()=>{

    const {consultarpokemons,pokemons } = usePokemons()
    
    useEffect(() => {
        consultarpokemons();
       }, [])
return(
 <Row className='mt-5'>
     {pokemons?.map(pokemon => (
   <Pokemon 
       key={pokemon.name}
       pokemon={pokemon}
/>
 ))} 
 </Row>
    )
}

export default Pokecard