import { useState } from "react"
import Formulario from "./Components/Formulario"
import Layout from "./Components/Layout"
import Tabla from "./Components/Tabla"



function Mainapp() {

  const [form, setform] = useState({nombre:"",imagen:null})

  const [tags,setTags]=useState([])

  console.log(form)

  return (
    <>
      <Layout />

      <div className="columns is-centered p-6 ">
        <div className="column is-half" >
          <Tabla form={form} tags={tags} setTags={setTags} />
        </div>

        <div className="columns is-centered">
          <div className="column is-half ">
            <Formulario form={form} setform={setform} tags={tags} setTags={setTags}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Mainapp