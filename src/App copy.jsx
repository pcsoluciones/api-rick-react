import { useEffect, useState } from "react"

const App = () => {
    const [contador, setContador] = useState(0)

    useEffect( ()=>{
        console.log(`contador: ${contador}`)
    }, [contador])

  return (
    <div className="container">
        <h1>App Rick and Morty</h1>

        <h3>{contador}</h3>
        <button onClick={ ()=>setContador(contador+1 )}>
            Aumentar
        </button>
    </div>
  )
}

export default App