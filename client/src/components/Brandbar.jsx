import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import { Card, Row } from 'react-bootstrap';

const Brandbar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex justify-content-between">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'primary' : 'ligth' }
          style={{ cursor: 'pointer', maxWidth: 100, textAlign: 'center' }}>
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default Brandbar;
