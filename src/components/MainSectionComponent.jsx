import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const MainSectionComponent = () => {
  return (
    <Container fluid id="main-div">
      <Row xs="auto" className="justify-content-center">
        <div id="hero-sec" className="d-flex justify-content-center">
          <Image id="hero" src="tech.PNG" thumbnail />
          <div id="btn-grp">
            <Link to="/blog">
              <span id="hero-btn">Ultime Notizie</span>
            </Link>
            <Link to="/create-post">
              <span id="hero-btn">Crea un post</span>
            </Link>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default MainSectionComponent;
