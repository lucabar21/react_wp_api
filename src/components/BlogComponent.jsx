import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { URL } from "../contents";
import Card from "react-bootstrap/Card";

const BlogComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(URL + "/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h4 className="text-center">I nostri articoli</h4>
        </Col>
      </Row>
      <Row className="row-gap-3">
        {posts.map((post) => (
          <Col xs={6} key={post.id}>
            <Card>
              <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Card.Title>
                <Card.Text dangerouslySetInnerHTML={{ __html: post.content.rendered }}></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BlogComponent;
