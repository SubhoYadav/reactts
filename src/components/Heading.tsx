import { ReactElement } from "react"
type THeadingProps = {
    title: string
}

export const Heading = ({title}: THeadingProps): ReactElement => {
  return (
    <h1>{title}</h1>
  )
}
