import { Person } from "@/protocols/person-protocol";
import personRepository from "@/repositories/person-repository";

async function getPerson(): Promise<Person> {
  const result: Array<Person> = await personRepository.getPerson();
  const numPeople: number = result.length;
  const chosenPersonIndex: number = Math.floor(Math.random() * numPeople);
  const chosenPerson: Person = result[chosenPersonIndex];
  return chosenPerson;
}

const personService = {
  getPerson,
};

export default personService;
