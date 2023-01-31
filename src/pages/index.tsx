import CardItemAddRemove, { RefProps } from "@/components/CardItemAddAndRemove";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Url } from "url";


export default function Form() {
  const quantityDoorRef = useRef<RefProps>(null)
  const doorWithPresetRef = useRef<RefProps>(null)
  const [quantityDoor, setQuantityDoor] = useState(1)
  const [doorWithPresent, setDoorWithPresent] = useState(1)


  function handleAddDoor() {
    const value = quantityDoorRef.current?.addItem(1)
    if (value) {
      setQuantityDoor(value)
    }
  }

  function handleSubDoor() {
    const value = quantityDoorRef.current?.removeItem(1)
    if (value) {
      setQuantityDoor(value)
    }
  }

  function handleDoorWithPresent() {
    const value = doorWithPresetRef.current?.addItem(1)
    if (value) {
      setDoorWithPresent(value)
    }
  }

  function handleSubWithPresent() {
    const value = doorWithPresetRef.current?.removeItem(1)

    if (value) {
      setDoorWithPresent(value)
    }
  }



  return (
    <section className="flex flex-col  h-[100vh] w-[100vw] gap-5 justify-center items-center"  >
      <div className="flex gap-2" >
        <div className="flex rounded-md  bg-red-900  w-44 h-44 jutify-center items-center" >
          <h3 className="px-[10px] text-left text-5xl text-white  font-normal" >Monty Hall</h3>
        </div>
        <CardItemAddRemove ref={quantityDoorRef} handleAdd={() => handleAddDoor()} handleRemove={() => handleSubDoor()} />
      </div>
      <div className="flex gap-2">
        <CardItemAddRemove ref={doorWithPresetRef} handleAdd={() => handleDoorWithPresent()} handleRemove={() => handleSubWithPresent()} />
        <Link href={`/play/${quantityDoor}/${doorWithPresent}`} className="ease-in-out duration-300 hover:opacity-[0.5]" >
          <div className="flex rounded-md  bg-emerald-900  w-44 h-44 justify-center items-center" >
            <h3 className="text-center text-2xl text-white  font-normal" >Iniciar</h3>
          </div>
        </Link>
      </div>
    </section>
  )
}