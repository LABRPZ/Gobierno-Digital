import {useState, useEffect,createContext} from 'react'
import axios from 'axios'

const PokemonsContext =createContext()

const PokemonsProvider = ({children}) =>{
    
   const [pokemons, setPokemons]=useState([])
   const [modal, setModal] = useState(false)
   const [ pokemonurl, setpokemonurl] = useState(null)
   const [pokemon, setpokemon] = useState({})
   const [img, setimg] = useState([])
   const [cargando, setCargando] = useState(false)

    



  useEffect(() => {
    setCargando(true)
    //aqui se obtiene la información del pokemon especifico
    const obtenerPokemones= async () =>{
        try {
           const url=pokemonurl
      
           const {data}= await axios(url)
           setpokemon(data)
           setimg(data.sprites.front_default)
        } catch (error) {
            console.log(error)
        } finally{
            setCargando(false)
        }
    }
    obtenerPokemones()
}, [pokemonurl])

const consultarpokemons = async () => {

    try {
        const url='https://pokeapi.co/api/v2/pokemon?limit=151&offset=0' 

        const { data } = await axios(url)
        setPokemons(data.results)
    } catch (error) {
        console.log(error)
    }
}

  const handleModalClick = () => {
    setModal(!modal)
}

const handlepokemonClick = url => {
    setpokemonurl(url)
}

    return(
        <PokemonsContext.Provider 
            value={{
                consultarpokemons,
                pokemons,
                handleModalClick,
                modal,
                handlepokemonClick,
                pokemon,
                cargando,
                img,
            }}
            >
                  {children}
            </PokemonsContext.Provider>
    )
}

export {PokemonsProvider}

export default PokemonsContext

