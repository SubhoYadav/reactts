import { ReactNode } from "react"


interface TListProps<T>  {
    readonly items: T[],
    renderFunction: (item: T) => ReactNode
}

export const List = <T,>({items, renderFunction}: TListProps<T>) => {
  return (
    <ul>
        {items.map((item, index: number) => {
            return <li key={index}>
                {renderFunction(item)}
            </li>
        }) }
    </ul>
  )
}
