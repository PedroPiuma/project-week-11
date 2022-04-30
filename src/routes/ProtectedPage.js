import React, { useState } from "react";
import { useEffect } from "react";
import { listPets, postPets, removePets } from "../services/pets";

function ProtectedPage() {
  const [pets, setPets] = useState('')
  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets();
        console.log(response.data.pets[0]);
        setPets(response.data.pets[0])
      } catch (error) {
        console.log("Deu Ruim");
      }
    };
    request();
  }, []);
  console.log(pets)
  return (
    <div>
      <p>ProtectedPage</p>
      <button onClick={async () => await postPets()}>Posta Pets</button>
      <button onClick={() => removePets()}>Remove Pets</button>

      {pets ? <div><p>{pets.age}</p>
        <p>{pets.gender}</p>
        <p>{pets.id}</p>
        <p>{pets.name}</p>
        <p>{pets.species}</p>
        <img src={pets.url} alt='' /></div> : ''}
    </div>);
}

export default ProtectedPage;
