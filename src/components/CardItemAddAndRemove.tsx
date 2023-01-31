import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

interface CardItemAddRemoveProps {
  handleAdd: () => void
  handleRemove: () => void

}


export type RefProps = {
  addItem: (item: number) => number
  removeItem: (item: number) => number

}



const CardItemAddRemove = ({ handleAdd, handleRemove }: CardItemAddRemoveProps, ref: Ref<RefProps>) => {
  const [insideValue, setInsideValue] = useState(1)


  useImperativeHandle(ref, () => ({
    addItem(item) {
      setInsideValue(previous => item + previous)
      return item + insideValue
    },
    removeItem(item) {
      if (insideValue === 1) return 1
      setInsideValue(previous => previous - item)
      return insideValue - item
    },

  }))

  return (
    <div className="flex gap-4  flex-col  rounded-md  bg-white  w-44  justify-center items-center"   >
      <h3 className="text-sm text-center text-stone-700  font-normal">Quantidade de Portas?</h3>
      <div className="flex flex-col gap-4  items-center " >
        <h3 className="text-3xl text-center text-stone-700  font-bold">{insideValue}</h3>
        <section className="flex gap-4" >
          <button onClick={handleRemove} className="ease-in-out duration-300  hover:opacity-[0.7]  rounded-md bg-sky-500 py-2 px-2" >
            <IoIosRemove size={20} className="ease-in-out duration-300 hover:opacity-[0.7] text-white" />
          </button>
          <button onClick={handleAdd} className="ease-in-out duration-300  hover:opacity-[0.7] rounded-md bg-sky-500 py-2 px-2">
            <IoIosAdd size={20} className="ease-in-out duration-300 hover:opacity-[0.7] text-white" />
          </button>
        </section>
      </div>
    </div>
  )
}

export default forwardRef(CardItemAddRemove)