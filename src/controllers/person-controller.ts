import { Request, Response } from "express";
import { Person } from "@/protocols/person-protocol";
import httpStatus from "http-status";
import personService from "@/services/person-service";

async function getPerson(req: Request, res: Response) {
  const person: Person  = await personService.getPerson();
  return res.send(person).status(Number(httpStatus[200]));
}

const personController = {
  getPerson
}

export default personController;