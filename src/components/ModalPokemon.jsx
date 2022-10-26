import { Modal, Image } from 'react-bootstrap'
import usePokemons from '../hooks/usePokemons'
import {useEffect} from 'react'
import  './modalcss.css';
const ModalPokemon = () => {

    const { modal, handleModalClick,pokemon,cargando,img} = usePokemons()
 

/*     console.log(pokemon,img)
 */   const stats=pokemon.stats?pokemon.stats:[]
      const types=pokemon.types?pokemon.types:[]
    const mostrartstats = () => {
        let arraystats = []
        let tipo=''
        for(let i = 0; i <= 5; i++) {
            switch(i){
                case 0: 
                tipo='Salud: '
                break;
                case 1:
                tipo='Ataque: '
                break;
                case 2:
                tipo='Defensa: '
                break;
                case 3:
                tipo='Ataque Especial: '
                break;
                case 4:
                tipo='Defensa Especial: '
                break;
                case 5:
                tipo='Velocidad: '
                break;
            }
            if( stats[i]) {
                arraystats.push(
                    <li>{tipo} {stats[i].base_stat}</li>
                )
            }
        }
        return arraystats
    }
  const mostrartipos = () => {
        let arraytipos = []
        for(let i = 0; i <= 2; i++) {
            if( types[i]) {
                arraytipos.push(
                    <li> {types[i].type.name}</li>
                )
            }
        }
        return arraytipos
    }
  
 
    useEffect(() => {
        mostrartstats()
      }, [])
    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}   
            >
                <Image className='nombre'
                    src={img}
                    alt={`Imagen de ${pokemon.name}`}
                />
                <Modal.Header className='nombre' >
                    <Modal.Title >
                        <h1 >{pokemon.name}</h1>
                        <h4>tipo {mostrartipos()}</h4>
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalbody'>
                    <div className='p-3'>
                        <h2>Atributos base </h2>
                        <li>Experiencia base: {pokemon.base_experience}</li>
                       {mostrartstats()} 
                   </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalPokemon