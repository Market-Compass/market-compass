import { CircularProgress } from '@nextui-org/react'

export const Backdrop = () => {
  return (
    <div
      className="w-screen h-screen fixed flex justify-center items-center backdrop-blur-lg bg-transparent z-[1000]"
      onClick={(e) => e.stopPropagation()}
    >
      <CircularProgress aria-label="Loading..." />
    </div>
  )
}
