import React, { useState } from "react";
import './PublicPage.css'
import { useEffect } from "react";
import Card from "../components/Card/Card";
import { listPets, postPets } from "../services/pets";
import { Input } from "./styled";

function ProtectedPage() {
  const [pets, setPets] = useState([])
  const [newList, setNewList] = useState(false)
  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets();
        setPets(response.data.pets)
      } catch (error) {
        console.log("Deu Ruim");
      }
    };
    request();
  }, [newList]);
  console.log(pets)
  const post = async (submitData) => {
    try {
      submitData.preventDefault()
      const data = new FormData(submitData.target)
      const name = data.get('pet-name').trim()
      const breed = data.get('pet-breed').trim()
      const age = data.get('pet-age')
      const species = data.get('pet-species')
      const gender = data.get('pet-gender')
      const url = data.get('pet-url').trim()
      const result = { name, breed, age, species, gender, url }
      await postPets(result)
      setNewList(!newList)
      alert('Cadastro realizado!')
      submitData.target.reset()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="page">
      <h1 className="page-title">Cadastre seu Pet</h1>
      <form className="page-form" onSubmit={submitData => post(submitData)}>
        <Input type='text' name="pet-name" placeholder="Nome do pet" autoComplete="off" required />
        <Input type='number' name="pet-age" placeholder="Idade do pet" autoComplete="off" required />
        <Input type='text' name="pet-breed" placeholder="Raça do pet" autoComplete="off" required />
        <Input type={'url'} name="pet-url" placeholder="Imagem do pet" required />
        <select name="pet-gender" defaultValue={'male'}>
          <option value={'male'}>Macho</option>
          <option value={'female'}>Fêmea</option>
        </select>
        <select name="pet-species" defaultValue={'cachorro'}>
          <option value={'Cachorro'}>Cachorro</option>
          <option value={'Gato'}>Gato</option>
        </select>
        <button type="submit" >Cadastrar</button>
      </form>
      <div className="page-cards">
        {pets.map(e => <Card key={e.url.length} age={e.age} breed={e.breed} name={e.name} species={e.species} url={e.url} id={e.id} />)}
      </div>
    </div>);
}

export default ProtectedPage;
