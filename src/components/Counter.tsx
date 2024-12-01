import { ReactNode } from "react"

type TCounterprops = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}
export const Counter = ({setCount, children}: TCounterprops) => {
  return (
    <div>
        <h1>{children}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  )
}
