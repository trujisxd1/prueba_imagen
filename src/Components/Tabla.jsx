import { Input, Button } from "antd";
import { useState, useRef } from "react";

const Tabla = ({ form, tags, setTags }) => {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [descripcionFija, setDescripcionFija] = useState(false);
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  
  const containerRef = useRef(null);

  const handleClick = (event, item) => {
    const { clientX, clientY } = event;
    const containerRect = containerRef.current.getBoundingClientRect();
    setPosicion({ x: clientX - containerRect.left, y: clientY - containerRect.top });
    setSelectedItem(item);
    setMostrarDescripcion(!descripcionFija);
  };

  const agregarNuevaDescripcion = () => {
    setTags((prevTags) => [...prevTags, { descripcion: nuevaDescripcion, posX: null, posY: null }]);
    setNuevaDescripcion("");
  };

  console.log(tags);
  console.log(posicion);
  console.log(descripcionFija);

  const descripcion = [
    { desc: "Bateria(Modulo)", posX: 678.4874877929688, posY: 951.3999938964844 },
    { desc: "Pantalla", desc1: "-Pantalla de segmentos", desc2: "-Pantalla matricial", posX: 313.48748779296875, posY: 977.3999938964844 },
    // {desc:"bomba para agua xdd",posX:326.48748779296875 , posY:681.1999969482422}
  ];

  return (
    <div
      className="container"
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
        className="line-container"
        style={{
          width: "100%",
          height: "40px",
          background: "#2A206D",
          marginBottom: "10px",
        }}
      />

      <div onClick={(e) => handleClick(e)}>
        <div
          className="py-2 m-3 "
          style={{
            border: "2px solid #8B3DFF",
          }}
        >
          <h3 className="has-text-centered is-size-2 is-uppercase m-0 p-0">{form.nombre}</h3>
        </div>
        {form.imagen && (
          <img
            className="image has-ratio"
            src={form.imagen}
            alt={form.nombre}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>

      {mostrarDescripcion && selectedItem && (
        <div
          className="has-text-black"
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

      {descripcion.map((p) => (
        <div
          key={p.posX}
          style={{
            position: descripcionFija ? "fixed" : "absolute",
            top: p.posY,
            left: p.posX,
            transform: "translate(-50%, -50%)",
          }}
        >
          <p>{p.desc}</p>
          <p>{p.desc1}</p>
          <p>{p.desc2}</p>
        </div>
      ))}

      <div>
        <Input
          placeholder="Nueva descripción"
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
        />
        <Button onClick={agregarNuevaDescripcion}>Guardar</Button>
      </div>
    </div>
  );
};

export default Tabla;
