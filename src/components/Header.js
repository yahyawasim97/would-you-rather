import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';

const Header = () => (
  <Row className="header">
    <Col>
      <Card>
        <CardHeader>
          <h3>Would You Rather!</h3>
        </CardHeader>
        <CardBody>
          <CardTitle>Login to start playing</CardTitle>
        </CardBody>
      </Card>
    </Col>
  </Row>
)
export default Header;