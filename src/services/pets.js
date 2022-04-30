import client from "../providers/client";

// export const listPets = () => client.get("pets/0rp4knn/a398510e-0800-47c2-94c1-29c990ac2bb");
export const listPets = () => client.get("pets/06s2rm4");

export const postPets = () => client.post("pets/06s2rm4", {
    "name": "Mirana",
    "breed": "Vira-Lata",
    "age": 7,
    "species": "cachorro",
    "gender": "Fêmea",
    "url": "https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg"
})

export const removePets = () => client.delete("pets/06s2rm4/512bfd13-4e31-465b-92e5-e28b73f07864")
