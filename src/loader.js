// Needs to be local or API url
const URL = "https://people-api-waio.onrender.com"

export const peopleLoader = async () => {
    const response = await fetch(URL + "/people")
    const people = await response.json()
    return people
}

export const personLoader = async ({params}) => {
    const response = await fetch(URL + "/people/" + params.id);
    const person = await response.json();
    return person;
}