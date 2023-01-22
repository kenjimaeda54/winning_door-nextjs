export default class DoorModel {
  #numberDoor: number
  #havePresent: boolean
  #isSelected: boolean
  #isOpen: boolean


  constructor(numberDoor: number, havePresent = false, isSelected = false, isOpen = false) {
    this.#havePresent = havePresent
    this.#isOpen = isOpen
    this.#numberDoor = numberDoor
    this.#isSelected = isSelected
  }


  get numberDoor() {
    return this.#numberDoor
  }

  get havePresent() {
    return this.#havePresent
  }

  get isSelected() {
    return this.#isSelected
  }

  get isOpen() {
    return this.#isOpen
  }


  // com abordagem a abaixo não iremos alterar o valores internos 
  // retornaremos uma intansica de um novo modelo com o valor alterado
  deselectDoor() {
    return new DoorModel(this.#numberDoor, this.#havePresent, false, this.#isOpen)
  }

  selectDoor() {
    const selected = !this.#isSelected
    return new DoorModel(this.#numberDoor, this.#havePresent, selected, this.#isOpen)
  }

  open() {
    return new DoorModel(this.#numberDoor, this.#havePresent, this.#isSelected, true)
  }

}