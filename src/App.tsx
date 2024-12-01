import { ReactNode, useState } from "react";
import { Counter } from "./components/Counter"
import { Heading } from "./components/Heading"
import Section from "./components/Section"
import { List } from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);

  const items = ["Tea", "Coffee", "Code"]

  const readonlyNoPrimitiveObject = {
    name: "Subho"
  } as const

  console.log(readonlyNoPrimitiveObject)
  return (
    <>
     <Heading title = {"Test title"}/>
     <Section title={"This is my titke"}>
      <p>This is my children</p>
     </Section>
     <Counter setCount={setCount}>
      The value of count is: {count}
     </Counter>
     <List items={items} renderFunction = {(item: string): ReactNode => {
        return <span className="bold">{item}</span>
     }}></List>
   </>
  )
}

export default App
