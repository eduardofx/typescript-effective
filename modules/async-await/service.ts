import { Person } from "./interface";

export const PersonService = async (person: Person): Promise<Person> => {
  person.request = true;
  return person;
};
