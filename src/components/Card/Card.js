import './Card.css'
import { removePets } from '../../services/pets'
import { Div, Img } from './styled'
import { useState } from 'react'

const Card = (props) => {
    const [hidden, setHidden] = useState('')
    const { age = 'idade', breed = 'raça', name = 'nome', species = 'espécie', url = '', id } = props
    return (
        <div className={`card ${hidden}`} >
            <Div>
                <p>Idade: {age} ano(s)</p>
                <p>Raça: {breed}</p>
                <p>Nome: {name}</p>
                <p>Espécie: {species}</p>
            </Div>
            <Div>
                <Img src={url} alt='img pet' />
                {id ? <button onClick={() => {
                    removePets(id)
                    alert('Pet removido da lista de adoção!')
                    setHidden('hidden')
                }}>Remover Pet</button> : ''}
            </Div>
        </div>
    )
}

export default Card