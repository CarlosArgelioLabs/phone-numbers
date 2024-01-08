import React from "react";
import InputMask from "react-input-mask";
import Dropdown from "react-bootstrap/Dropdown";
import { icons } from "./assets";
import { Col, Container, DropdownButton, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={1}>
              <DropdownButton title="country">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </DropdownButton>
          </Col>

          <Col xs={2}>
            <InputMask
              mask="+58 999 999-9999"
              className="form-control input-color"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;