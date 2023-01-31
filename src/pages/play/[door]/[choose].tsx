import { useState, MouseEvent, useEffect } from "react"
import Link from "next/link"
import Door from "@/components/Door"
import DoorModel from "@/models/DoorModel"
import { createDoors } from "@/utils/createDoor"
import { IoIosArrowBack } from "react-icons/io"
import { useRouter } from "next/router"


export default function Home() {
  const [doors, setDoors] = useState<DoorModel[]>([])
  const { query } = useRouter()


  useEffect(() => {
    if (query.door === undefined || query.choose === undefined) return

    if (query.door > query.choose) {
      const doorsCollection: DoorModel[] = createDoors(+query.door, +query.choose)
      setDoors(doorsCollection)
      return
    }

  }, [query])


  const handleSelectedDoor = (door: DoorModel) => {
    const newsDoor: DoorModel[] = doors.map(it => {
      return it.numberDoor === door.numberDoor && !door.isSelected ? it.selectDoor() : it.deselectDoor()
    })
    setDoors(newsDoor)
  }

  function handleOpenDoor(e: MouseEvent, door: DoorModel) {
    // eu tenho uma div englobando ela com um onclick por isso usamos esse metodo
    e.stopPropagation()
    const newDoor: DoorModel[] = doors.map(it => {
      return it.numberDoor === door.numberDoor ? it.open() : it
    })
    setDoors(newDoor)
  }

  return (
    <div className="flex flex-col min-h-[100vh] gap-2.5 p-8" >
      <Link className="px-[25px]" href="/">
        <div className="flex hover:opacity-[0.7] flex-row gap-[15px]  items-center" >
          <IoIosArrowBack size={35} color="#f1f5f9" />
          <span className="text-3xl text-white" >Retornar</span>
        </div>
      </Link>
      <div className="flex my-[10px] justify-around gap-y-[15px] flex-wrap w-[100%]" >
        {doors.length === 0 ?
          <h3 className="flex h-[100vh]   items-center text-3xl text-white">Você possivelmente selecionou uma porta inexistente</h3>
          :
          doors.map(it =>
            <Door key={it.numberDoor} onClick={(e) => handleOpenDoor(e, it)} onClickDoor={() => handleSelectedDoor(it)} door={it} />
          )}
      </div>
    </div>
  )
}
