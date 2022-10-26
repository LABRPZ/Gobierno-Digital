import './App.css';
import Pokecard from './components/Pokecard';
import ModalPokemon from './components/ModalPokemon';
import {PokemonsProvider} from './context/PokemonsProvider';
function App() {
  return (
<PokemonsProvider>
<header className='py-5'>
Pokedex de Kanto
</header>
<Pokecard/>
<ModalPokemon />
</PokemonsProvider>
  );
}

export default App;
