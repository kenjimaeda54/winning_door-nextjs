# Qual e a porta vencedora
Pequeno jogo onde a pessoa seleciona a quantidade e o adversario precisa descobrir onde esta o presente

#Motivacao
Praticar Next js


# Feature
- Para lidar com o modelo das portas, quando estava selecionado,quando deixou de selecionar,qual a quantidade, criamos uma classe
- Essa classe implementava tudo que era necessario para a porta exiter e seus metodos
- Se reparr a cada metodo retornavamos uma nova instancia da classe 

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
// quem for usar o metodo disponiblizado
className={`flex w-36 h-64 relative ${door.isOpen ? "bg-zinc-800" : "bg-orange-600"} border-x-8 border-t-8 ${door.isSelected && !door.isOpen ? "border-amber-400" : "border-amber-900"}`}

```
##
- Trabalhei com passagem de parametros por rotas 
- Para realizar isso criamos arquivos dinamicos como exemplo abaixo
- Quando deseja um evento mais interno com um externo envolvendo ele e obrigatorio o uso do stopPropagation

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
  
  
  //se possui um div dentro englobando um onclick
    function handleOpenDoor(e: MouseEvent, door: DoorModel) {
    // eu tenho uma div englobando ela com um onclick por isso usamos esse metodo
    e.stopPropagation()
    const newDoor: DoorModel[] = doors.map(it => {
      return it.numberDoor === door.numberDoor ? it.open() : it
    })
    setDoors(newDoor)
  }



```





