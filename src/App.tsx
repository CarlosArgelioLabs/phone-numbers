import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, Container, Row } from "react-bootstrap";
import { InputPhoneNumberMask } from "./components/Input";
import { countries } from "./utils/countries";

function App() {
  const [country, setCountry] = useState("");
  const [maskCountry, setMaskCountry] = useState("");
  const [flag, setFlag] = useState("");

  const handleSelectCountry = (e) => {
    setCountry(e);
  };

  useEffect(() => {
    const data = countries.find((countries) => countries.country === country);
    if (data !== undefined) {
      setFlag(data.icon);
      setMaskCountry(`${data.code} ${data.mask}`);
    }
  }, [country]);

  return (
    <>
      <Container>
        <Row>
          <Col xs={4}>
            <Dropdown onSelect={handleSelectCountry}>
              <Dropdown.Toggle>
                {flag ? <img src={flag} alt={country} /> : "Seleccione un pais"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {countries.map((country, index) => (
                  <Dropdown.Item key={index} eventKey={country.country}>
                    <img
                      src={country.icon}
                      style={{
                        marginRight: "8px",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    {country.country}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={3}>
            <InputPhoneNumberMask mask={maskCountry} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
