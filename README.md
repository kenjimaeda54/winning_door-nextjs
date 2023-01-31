# Qual e a porta vencedora?
Pequeno jogo onde a pessoa seleciona a quantidade e o adversário precisa descobrir onde está o presente

# Motivação
Praticar Next js


# Feature
- Para lidar com o modelo das portas e seu métodos como: porta está selecionado, deixou de selecionar, qual a quantidade, criamos uma classe
- Essa classe implementava tudo que era necessário para a porta existir, inclusive   seus métodos
- Se reparar a cada método retornávamos uma nova instância da classe 

```typescript
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


//=======
// quem for usar o método disponibilizado
className={`flex w-36 h-64 relative ${door.isOpen ? "bg-zinc-800" : "bg-orange-600"} border-x-8 border-t-8 ${door.isSelected && !door.isOpen ? "border-amber-400" : "border-amber-900"}`}

```
##
- Trabalhei com passagem de parâmetros por rotas 
- Para realizar isso criamos arquivos dinâmicos como exemplo abaixo
- Quando deseja um evento mais interno, e externamente tem outro evento envolvendo ele, é obrigatório o uso do stopPropagation

```typescript

//como enviado o parametro com  Link
 <Link href={`/play/${quantityDoor}/${doorWithPresent}`} className="ease-in-out duration-300 hover:opacity-[0.5]" >
          <div className="flex rounded-md  bg-emerald-900  w-44 h-44 justify-center items-center" >
            <h3 className="text-center text-2xl text-white  font-normal" >Iniciar</h3>
          </div>
 </Link>

//============================

 |
 |
 | play
      | [door]
              | [chosse].tsx
              
              
    const { query } = useRouter()


  useEffect(() => {
    if (query.door === undefined || query.choose === undefined) return

    if (query.door > query.choose) {
      const doorsCollection: DoorModel[] = createDoors(+query.door, +query.choose)
      setDoors(doorsCollection)
      return
    }

  }, [query])
  
  
     // exemplo como resolver onClick e acessando um valor mais interno
    function handleOpenDoor(e: MouseEvent, door: DoorModel) {
   
    e.stopPropagation()
    const newDoor: DoorModel[] = doors.map(it => {
      return it.numberDoor === door.numberDoor ? it.open() : it
    })
    setDoors(newDoor)
  }



```





