
import { Button, Col, Drawer, Form, Input, Row } from 'antd';
import { useState } from 'react';
const Prueba = ({descripcion,setdescripcion}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
      <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Descripcion"
                label="Descrpcio "
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese una descripcion",
                  },
                ]}
              >
                <Input
                  placeholder="Por favor ingrese una descripcion"
                  value={descripcion}
                  onChange={(e) => setdescripcion(e.target.value)}
                />
              </Form.Item>
            </Col>
        </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default Prueba;