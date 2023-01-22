import DoorModel from "@/models/DoorModel"
import { ButtonHTMLAttributes, MouseEvent } from "react"
import Present from "./Present"

interface DoorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  door: DoorModel,
  onClickDoor: () => void
}

export default function Door({ door, onClickDoor, ...rest }: DoorProps) {


  return (
    <div onClick={onClickDoor} className="flex  flex-col w-44 items-center" >
      <div className={`flex w-36 h-64 relative ${door.isOpen ? "bg-zinc-800" : "bg-orange-600"} border-x-8 border-t-8 ${door.isSelected && !door.isOpen ? "border-amber-400" : "border-amber-900"}`} >
        {!door.isOpen ? <div className="flex pt-2.5  grow justify-center">
          <h1 className={`text-4xl ${door.isSelected ? "text-amber-400" : "text-white"}`}>{door.numberDoor}</h1>
          <button  {...rest} className={`${door.isSelected ? "bg-amber-400" : "bg-amber-900"}  hover:opacity-70 h-4 absolute top-28 left-4 w-4 rounded-lg`} />
        </div>
          :
          door.havePresent && <Present />
        }
      </div>
      <div className="flex bg-slate-400  w-40 h-2" />
    </div>
  )
}