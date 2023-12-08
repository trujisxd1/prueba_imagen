import { Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useRef } from "react";

const Tabla = ({ form, tags, setTags }) => {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [descripcionFija, setDescripcionFija] = useState(false);
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [editando, setEditando] = useState(null);
  const containerRef = useRef(null);

  const handleClick = (event, item) => {
    const { clientX, clientY } = event;
    const containerRect = containerRef.current.getBoundingClientRect();
    setPosicion({ x: clientX - containerRect.left, y: clientY - containerRect.top });
    setSelectedItem(item);
    setMostrarDescripcion(!descripcionFija);
  };

  const agregarNuevaDescripcion = () => {
    const nuevaTag = {
      descripcion: nuevaDescripcion,
      posX: posicion.x,
      posY: posicion.y,
    };
    setTags((prevTags) => [...prevTags, nuevaTag]);
    setNuevaDescripcion("");
  };

  const handleEditar = (index) => {
    const tag = tags[index];
    setNuevaDescripcion(tag.descripcion || "");
    setPosicion({ x: tag.posX || 0, y: tag.posY || 0 });
    setEditando(index);
  };

  const handleGuardar = () => {
    if (editando !== null) {
      setTags((prevTags) =>
        prevTags.map((tag, index) =>
          index === editando
            ? { ...tag, descripcion: nuevaDescripcion, posX: posicion.x, posY: posicion.y }
            : tag
        )
      );
      setEditando(null);
      setNuevaDescripcion("");
    }
  };

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

      {tags.map((t, i) => (
        <div
          key={t.posX}
          style={{
            position: descripcionFija ? "fixed" : "absolute",
            top: t.posY,
            left: t.posX,
            transform: "translate(-50%, -50%)",
          }}
        >
          <p>{t.descripcion}</p>
        </div>
      ))}

      <div>
        <TextArea
          placeholder="Nueva descripción"
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
        />
        <Button onClick={agregarNuevaDescripcion}>Guardar</Button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Editar</th>
            
          </tr>
        </thead>
        <tbody>
          {tags.map((t, i) => (
            <tr key={i}>
              <td>
                {editando === i ? (
                  <>
                    <TextArea
                      placeholder="Nueva descripción"
                      value={nuevaDescripcion}
                      onChange={(e) => setNuevaDescripcion(e.target.value)}
                    />
                    <Button onClick={handleGuardar}>Guardar</Button>
                  </>
                ) : (
                  t.descripcion
                )}
              </td>
              <td>
                <button className="button is-info" onClick={() => handleEditar(i)}>
                  Editar
                </button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
