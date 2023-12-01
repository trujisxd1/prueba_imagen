/* eslint-disable react/prop-types */
import { useState } from "react";


const Tabla = ({ form }) => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (cor, item) => {
    const { clientX, clientY } = cor;
    setPosicion({ x: clientX, y: clientY });
    setSelectedItem(item);
    setMostrarDescripcion(true);
  };



  return (
    <>
      <div style={{ width: "170mm", height: "180mm", background:"#FDD000" }} >
        {form.map((item) => (
          <div
            key={item.nombre}
            onClick={(e) => handleClick(e, item)}
            
          >
            <div style={{background:"#2A206D"}}>
              <h3 className="has-text-centered is-size-2">{item.nombre}</h3>
            </div>
            <p>{item.descrpcion}</p>
            <p>{item.correo}</p>
            {item.imagen && (
              <img src={item.imagen} alt={item.nombre} style={{ width: "80%", height: "80 %" }} />
            )}
          </div>
        ))}

        {mostrarDescripcion && selectedItem && (
          <div
            className="has-text-info"
            style={{
              position: "fixed",
              top: posicion.y,
              left: posicion.x,
              transform: "translate(-50%, -50%)", // Centra el elemento en las coordenadas dadas
            }}
            
          >
            <p className="is-size-3 ">{selectedItem.descripcion}</p>
          </div>
        )}
        
      </div>

    </>
  );
};

export default Tabla;
