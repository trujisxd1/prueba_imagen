import { useState } from "react"
import Formulario from "./Components/Formulario"
import Layout from "./Components/Layout"
import Tabla from "./Components/Tabla"



function Mainapp() {

  const [form,setform]=useState([])

  const [desc,setDesc]=useState({})
  
  return (
    <>
    <Layout />

    <div className="columns is-centered p-6 ">
  <div className="column is-half" >
    <Tabla form={form} desc={desc} setDesc={setDesc}/>
  </div>

  <div className="columns is-centered">
      <div className="column is-half">
        <Formulario form={form} setform={setform} />
      </div>
    </div>
</div>

  </>
  )
}

export default Mainapp