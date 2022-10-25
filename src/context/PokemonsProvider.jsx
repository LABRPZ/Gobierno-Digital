import {useState, useEffect,createContext} from 'react'
import axios from 'axios'

const PokemonsContext =createContext()

const PokemonsProvider = ({children}) =>{
    
   const [pokemons, setPokemons]=useState([])

    const obtenerPokemones= async () =>{
        try {
           const url='https://pokeapi.co/api/v2/pokemon?limit=151&offset=0' 
      
           const {data}= await axios(url)
           setPokemons(data.results)

        } catch (error) {
            console.log(error)
        }
    }


  useEffect(() => {
    obtenerPokemones()
  }, [])
  

    return(
        <PokemonsContext.Provider 
        value={{
            pokemons
            }}
            >
            {children}
        </PokemonsContext.Provider>
    )
}

export {PokemonsProvider}

export default PokemonsContext

