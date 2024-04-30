import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import { URL } from "../contents";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PostDetailsComponent = () => {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(URL + `/posts/${id}?_embed=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, [id]);

  return (
    post && (
      <Container className="text-center mb-5">
        <Row className="justify-content-center ">
          <Col xs={8}>
            <h1>{post.title.rendered}</h1>
            {post._embedded["wp:term"] && (
              <div>
                {post._embedded["wp:term"][0].map((category) => (
                  <span key={category.id} className="badge rounded-pill text-bg-primary">
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            <h2>Author: {post._embedded["author"][0].name}</h2>

            <div className="mx-auto" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
          </Col>{" "}
        </Row>{" "}
      </Container>
    )
  );
};
export default PostDetailsComponent;
