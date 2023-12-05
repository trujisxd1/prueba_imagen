
import { Drawer, Form, Input, Button, Space, Row, Col } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";



// eslint-disable-next-line react/prop-types
const Formulario = ({ form, setform,tags }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [nombre, setnombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [imagen, setImagen] = useState(undefined);

  const showDrawer = () => setDrawerVisible(true);
  const onClose = () => setDrawerVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { nombre, descripcion, imagen };
    setform( formData);
    setnombre("");
    setDescripcion("");

    // console.log(form)

    setImagen(null);
    onClose();
  };




  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagen(reader.result || undefined);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagen(undefined);
    }
  };

  return (
    <>
      <Button type="primary" className="is-pulled-lef" onClick={showDrawer}>
        crear nuevo 
      </Button>
      <Drawer
        title="Crear nuevo machote"
        width={720}
        onClose={onClose}
        open={drawerVisible}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={handleSubmit} type="primary">
              Enviar
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="nombre"
                label="Nombre"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese un nombre",
                  },
                ]}
              >
                <Input
                  placeholder="Por favor ingrese un nombre"
                  value={nombre}
                  onChange={(e) => setnombre(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="descripcion"
                label="descripcion"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese una descrpcion",
                  },
                ]}
              >
                <TextArea
                  placeholder="Por favor ingrese una descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>

            </Col>
            <Col span={12}>
              <Form.Item
                name="imagen"
                label="Imagen"
                rules={[
                  {
                    required: true,
                    message: "Por favor seleccione una imagen",
                  },
                ]}
              >
                <Input
                  type="file"

                  onChange={handleImagenChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>

      
       
      

    </>
  );
};

export default Formulario;
