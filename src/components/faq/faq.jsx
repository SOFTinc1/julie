import React from "react";
import { Other2Container, 
  Title, 
  // Row, FormContainer 
} from "./faq.styles";
import "./faq.css";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <Other2Container>
      <Title>need help?</Title>
      {/* <Row> */}
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="cardHeader">
            What’s your charge like?
          </Accordion.Header>
          <Accordion.Body className="cardBody">
            We don’t have a specific price to our service, It all depends on the
            services you want from us, Kindly fill this form to let us proceed
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="card">
          <Accordion.Header className="cardHeader">
            How long does it take?
          </Accordion.Header>
          <Accordion.Body className="cardBody">
            We don’t have a specific price to our service, It all depends on the
            services you want from us, Kindly fill this form to let us proceed
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="card">
          <Accordion.Header className="cardHeader">
            I don’t know what I want
          </Accordion.Header>
          <Accordion.Body className="cardBody">
            We don’t have a specific price to our service, It all depends on the
            services you want from us, Kindly fill this form to let us proceed
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="card">
          <Accordion.Header className="cardHeader">
            What services do you offer?
          </Accordion.Header>
          <Accordion.Body className="cardBody">
            We don’t have a specific price to our service, It all depends on the
            services you want from us, Kindly fill this form to let us proceed
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <FormContainer>form here</FormContainer> */}
      {/* </Row> */}
    </Other2Container>
  );
}

export default FAQ;
