export default function Present() {
  return (
    <div className="flex flex-col-reverse w-[100%] relative justify-items-center items-center" >
      <div className="w-24 h-20  bg-lime-700" />
      <div className="absolute  bg-red-500 w-3.5 h-28" />
      <div className="absolute bottom-10 bg-red-500 w-24 h-4" />
      <div className="w-28 h-8 bg-lime-700" />
    </div>
  )
}