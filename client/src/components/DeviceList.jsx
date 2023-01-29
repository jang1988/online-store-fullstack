import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem.jsx';

const DeviceList = observer(() => {
  const {device} = useContext(Context)
  return (
    <div>
      <Row className="d-flex">
        {device.devices.map(device => 
          <DeviceItem key={device.id} device={device} />
          )}
      </Row>
    </div>
  );
})

export default DeviceList;
