import client from "../providers/client";

// export const listPets = () => client.get("pets/0rp4knn/a398510e-0800-47c2-94c1-29c990ac2bb");
export const listPets = () => client.get("pets/06s2rm4");

export const postPets = (data) => {
    client.post("pets/06s2rm4", data)
}

export const removePets = (data) => {
    client.delete(`pets/06s2rm4/${data}`)
}
