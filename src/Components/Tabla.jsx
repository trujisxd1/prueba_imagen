import { useState, useRef } from "react";

const Tabla = ({ form }) => {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [descripcionFija, setDescripcionFija] = useState(false);
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleClick = (event, item) => {
    const { clientX, clientY } = event;
    const containerRect = containerRef.current.getBoundingClientRect();
    setPosicion({ x: clientX - containerRect.left, y: clientY - containerRect.top });
    setSelectedItem(item);
    setMostrarDescripcion(!descripcionFija);
  };

 

  return (
    <div
      ref={containerRef}
      style={{
        width: "210mm",
        height: "297mm",
        background: "#FDD000",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Contenedor superior que parece una línea */}
      <div
        style={{
          width: "100%",
          height: "40px",
          background: "#2A206D",
          marginBottom: "10px",
        }}
      />

      {form.map((item) => (
        <div
          key={item.nombre}
          onClick={(e) => handleClick(e, item)}
          style={{ marginBottom: "20px" }}
        >
          {/* Nuevo contenedor para encerrar el título */}
          <div
          className="py-2 m-3 "
            style={{
              border: "2px solid #8B3DFF",
             
             
            }}
          >
            <h3 className="has-text-centered is-size-2 is-uppercase m-0	 p-0" >
              {item.nombre}
            </h3>
          </div>

          <p>{item.descripcion}</p>
          <p>{item.correo}</p>
          {item.imagen && (
            <img
              src={item.imagen}
              alt={item.nombre}
              style={{ width: "80%", height: "80%" }}
            />
          )}
        </div>
      ))}

      {mostrarDescripcion && selectedItem && (
        <div
          className="has-text-info"
          style={{
            position: descripcionFija ? "fixed" : "absolute",
            top: posicion.y,
            left: posicion.x,
            transform: "translate(-50%, -50%)",
          }}
         
        >
          <p className="is-size-5 ">{selectedItem.descripcion}</p>
        </div>
      )}
    </div>
  );
};

export default Tabla;
