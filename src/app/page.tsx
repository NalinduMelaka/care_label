
import Maini from "./components/Maini"
import { MyProvider  } from "./context/MyContext"


export default function Home() {
  return (
   <MyProvider><Maini /></MyProvider>
  )
}
