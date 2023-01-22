import DoorModel from "@/models/DoorModel"

export function createDoors(quantityDoor: number, doorSelected: number) {
  return Array.from({ length: quantityDoor }, (_, i) => {
    const doorOfNumber = i + 1
    const havePresent = doorOfNumber === doorSelected
    return new DoorModel(doorOfNumber, havePresent)
  })

}