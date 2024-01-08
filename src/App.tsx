import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { icons } from "./assets";
import { Col, Container, DropdownButton, Row } from "react-bootstrap";
import { InputPhoneNumberMask } from "./components/Input";
import { countries } from "./utils/countries";

function App() {

  const [country, setCountry] = useState("")
  const [maskCountry, setMaskCountry] = useState("")
  const [flag, setFlag] = useState("")

  const handleSelectCountry = (e) => {
    setCountry(e)    
    handleMask()
  }

  const handleMask = () => {
    const data = countries.find((countries) => countries.country === country)
    setFlag(data.icon)
    setMaskCountry(`${data.code} ${data.mask}`)
  }



  return (
    <>
      <Container>
        <Row>
          <Col xs={4}>
            <Dropdown onSelect={handleSelectCountry}>
              <Dropdown.Toggle>
                {
                  flag ? <img src={flag} alt={country} /> : "Seleccione un pais"
                }
                
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="venezuela">Venezuela</Dropdown.Item>
                <Dropdown.Item eventKey="colombia">Colombia</Dropdown.Item>
                <Dropdown.Item eventKey="argentina">Argentina</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={3}>
            <InputPhoneNumberMask 
              mask={maskCountry}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;