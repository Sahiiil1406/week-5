import { StudentAdded as StudentAddedEvent } from "../generated/Purchase/Purchase"
import { StudentAdded } from "../generated/schema"

export function handleStudentAdded(event: StudentAddedEvent): void {
  let entity = new StudentAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.Purchase_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
