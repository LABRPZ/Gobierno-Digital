import { Col, Card, Button } from 'react-bootstrap'
import usePokemons from "../hooks/usePokemons"
import axios from 'axios'
import { useState,useEffect} from 'react'


const Pokemon= ({pokemon}) => {

const { handleModalClick, handlepokemonClick } = usePokemons()

const [image, setimage]=useState([])

const Obtenerimagen= async () =>{
  try {
     const {data}= await axios(pokemon.url )
     const sprite= data.sprites.front_default
     console.log(data)
     setimage(sprite)
  } catch (error) {
      console.log(error)
  }
}
useEffect(() => {
  Obtenerimagen()
}, [])

  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
          <Card.Img
            variant='top'
            src={image}
            alt={`Imagen de ${pokemon.name}`}
          />
          <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>

              <Button
                variant={'warning'}
                className="w-100 text-uppercase mt-2"
                onClick={ () => {
                    handleModalClick()
                    handlepokemonClick(pokemon.url)
                }}
              >
                Info
              </Button>
          </Card.Body>
      </Card>
    </Col>
)}

export default Pokemon
