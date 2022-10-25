import {Row} from 'react-bootstrap'
import usePokemons from '../hooks/usePokemons'
import Pokemon from './Pokemon'

const Pokecard =()=>{

    const{ pokemons }=usePokemons()
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