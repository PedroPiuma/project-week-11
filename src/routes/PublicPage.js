import React from "react";
import './PublicPage.css'
import Card from '../components/Card/Card'
import { listPets } from '../services/pets'
import { useState, useEffect } from 'react'

const PublicPage = () => {
  const [pets, setPets] = useState([])
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
  }, []);
  return (
    <div className="page">
      <h1 className="page-title">Lista dos Pets</h1>
      <div className="page-cards">
        {pets.map(e => <Card key={e.url.length} age={e.age} breed={e.breed} name={e.name} species={e.species} url={e.url} />)}
      </div>
    </div>)
}

export default PublicPage;
