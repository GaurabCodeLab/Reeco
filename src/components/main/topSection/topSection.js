import { Container, Row, Col } from "react-bootstrap";
import {
  Basket,
  Basket2Fill,
  Basket2,
  Basket3,
  Box,
  Box2Fill,
  Box2Heart,
  Box2HeartFill,
} from "react-bootstrap-icons";

function TopSection() {
  return (
    <Container className="mb-3" style={{boxShadow : "0px 0px 5px gray", borderRadius: "10px", padding: "1vmax", width: "80%"}}>
      <Row>
        <Col className="border-end text-center">
          <span>Supplier</span>
          <h6 className="my-2">East coast fruits & vegetables</h6>
        </Col>
        <Col className="border-end text-center">
          <span>Shipping date</span>
          <h6 className="my-2">Thu, Feb 10</h6>
        </Col>
        <Col className="border-end text-center">
          <span>Total</span>
          <h6 className="my-2">$ 15,028.3</h6>
        </Col>
        <Col className="border-end text-center">
          <span>Category</span>
          <h6 className="my-2">
            <pre>
              <Basket /> <Basket2Fill /> <Basket2 /> <Basket3 />
              <br />
              <Box /> <Box2Fill /> <Box2Heart /> <Box2HeartFill />
            </pre>
          </h6>
        </Col>
        <Col className="border-end text-center">
          <span>Department</span>
          <h6 className="my-2">300-444-678</h6>
        </Col>
        <Col className="text-center">
          <span>Status</span>
          <h6 className="my-2">Awaiting your approval</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default TopSection;
