import { connection } from "@/configs/db-connection";
import { Person } from "@/protocols/person-protocol";

async function getPerson(): Promise<Array<Person>> {
    const result = await connection.query(`SELECT * from people`);
    return result.rows as Array<Person>;
}

const personRepository = {
    getPerson
}

export default personRepository;