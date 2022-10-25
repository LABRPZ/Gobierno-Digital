import { useContext } from "react"
import PokemonsContext from "../context/PokemonsProvider"

const usePokemons = () =>{
    return useContext(PokemonsContext)
}

export default usePokemons