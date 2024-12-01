import { ReactNode } from "react"
/*
// This is the old way of doing 
const Section: React.FC<{title: string}> = ({title, children}) =>  {
    return (
        <section>
            {title}
            {children}
        </section>
    )
}*/ 

type TSectionProps = {
    title?: string,
    children: ReactNode
}
const Section = ({title = "Default title", children}: TSectionProps) =>  {
    return (
        <section>
            {title}
            {children}
        </section>
    )
}

export default Section