import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { StudentAdded } from "../generated/Purchase/Purchase"

export function createStudentAddedEvent(
  name: string,
  id: BigInt
): StudentAdded {
  let studentAddedEvent = changetype<StudentAdded>(newMockEvent())

  studentAddedEvent.parameters = new Array()

  studentAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return studentAddedEvent
}
