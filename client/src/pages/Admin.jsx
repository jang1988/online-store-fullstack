import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateType from '../components/modals/createType';
import CreateBrand from '../components/modals/createBrand';
import CreateDevice from '../components/modals/createDevice';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  return (
    <Container className="d-flex flex-column">
      <Button onClick={() => setTypeVisible(true)} variant={'outline-dark'} className="mt-4">
        Добавить тип
      </Button>
      <Button onClick={() => setBrandVisible(true)} variant={'outline-dark'} className="mt-4">
        Добавить бренд
      </Button>
      <Button onClick={() => setDeviceVisible(true)} variant={'outline-dark'} className="mt-4">
        Добавить устройство
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
