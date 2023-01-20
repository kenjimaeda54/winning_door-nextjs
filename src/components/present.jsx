export default function Present() {
  return (
    <div class="flex flex-col relative justify-items-center items-center" >
      <div class="w-28 h-8 bg-lime-700" />
      <div class="w-24 h-20  bg-lime-700" />
      <div class="absolute  bg-red-500 w-3.5 h-28" />
      <div class="absolute bottom-10 bg-red-500 w-24 h-4" />
    </div>
  )
}