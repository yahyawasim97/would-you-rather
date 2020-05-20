import React from 'react';
import { Col, Row } from 'reactstrap';

const DefaultLayout = ({ children }) => (
  <Row>
    <Col md={{ size: 6, offset: 3 }}>{children}</Col>
  </Row>
);

export default DefaultLayout;
