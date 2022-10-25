import './App.css';
import {Container} from 'react-bootstrap'
import Pokecard from './components/Pokecard';
import {PokemonsProvider} from './context/PokemonsProvider';
function App() {
  return (
<PokemonsProvider>
<header className='py-5'>
Pokedex
</header>

<Pokecard></Pokecard>
</PokemonsProvider>
  );
}

export default App;
