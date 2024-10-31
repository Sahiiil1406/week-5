import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { StudentAdded } from "../generated/schema"
import { StudentAdded as StudentAddedEvent } from "../generated/Purchase/Purchase"
import { handleStudentAdded } from "../src/purchase"
import { createStudentAddedEvent } from "./purchase-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let name = "Example string value"
    let id = BigInt.fromI32(234)
    let newStudentAddedEvent = createStudentAddedEvent(name, id)
    handleStudentAdded(newStudentAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("StudentAdded created and stored", () => {
    assert.entityCount("StudentAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
