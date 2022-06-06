import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import Loading from "./Loading"
import Personaje from "./Personaje"



const PintarDatos = ({nombrePersonaje}) => {  // props.nombrePersonaje  destructurado

  const [personajes, setPersonajes] = useState([])  
  const [loading, setLoading] = useState(false)
  
  useEffect ( () => {
    consumirApi(nombrePersonaje)
  }, [nombrePersonaje])

  const consumirApi = async(nombre) => {
    setLoading(true)
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)

      if (!res.ok){
        Swal.fire({
            title: 'Error!',
            text: 'Personaje no encontrado',
            icon: 'error',
        })
      }

      const datos = await res.json()
      console.log(datos.results)

      setPersonajes(datos.results)

    } catch (error) {
        console.log(error)
    } finally{
      setLoading(false)
    }
  }

  if(loading){
    return <Loading />
  }

  return (
    <div className="row mt-2">
      {
        personajes.map( (item) => (
          <Personaje key={item.id} personaje={item} />
        ))
      }
    </div>
  )

}

export default PintarDatos