import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const MainSectionComponent = () => {
  return (
    <Container>
      <Row xs="auto" className="justify-content-center">
        <Col>
          <Image src="https://placedog.net/400" thumbnail />
        </Col>
      </Row>
    </Container>
  );
};
export default MainSectionComponent;
