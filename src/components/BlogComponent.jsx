import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { URL } from "../contents";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const BlogComponent = () => {
  const [posts, setPosts] = useState([]);
  const [deletes, setDeletes] = useState(0);
  const [lastPage, setLastPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const postsPerPage = 4;
    fetch(URL + "/posts?per_page=" + postsPerPage + "&page=" + currentPage + "&_embed=1")
      .then((response) => {
        return Promise.all([response.json(), response.headers.get("X-WP-Total")]);
      })
      .then(([data, totalPosts]) => {
        setPosts(data);
        setLastPage(Math.ceil(totalPosts / postsPerPage));
      })
      .catch((error) => console.log(error));
  }, [currentPage, deletes]);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  function generatePaginationArray() {
    let paginationArr = [];
    for (let index = 1; index <= lastPage; index++) {
      paginationArr.push({
        n: index,
        active: currentPage === index,
      });
    }
    return paginationArr;
  }
  const deletePost = (postId) => {
    const authString = btoa("Luca:oQbw 5btk rAfm VVYr MICm eBYF");
    fetch(URL + `/posts/${postId}`, {
      headers: {
        Authorization: `Basic ${authString}`,
      },
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setDeletes(deletes + 1);
      }
    });
  };
  return (
    <Container id="blog-div">
      <Row>
        <Col>
          <Image src="blog.PNG" thumbnail />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="col-auto mt-3">
          <Link to="/create-post">
            <Button id="btn" variant="secondary">
              Crea nuovo post
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="row-gap-3 mt-4">
        {posts &&
          posts.map((post) => (
            <Col className="cards" xs={6} key={post.id}>
              <Card className="card-bd">
                <Card.Body>
                  <div id="card-img">
                    <img
                      src={
                        post._embedded["wp:featuredmedia"]
                          ? post._embedded["wp:featuredmedia"][0].source_url
                          : "/assets/picsum53.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column align-items-center mt-4">
                    <Link to={`/posts/${post.id}`}>
                      <Card.Title
                        className="text-center"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      ></Card.Title>
                    </Link>
                    <div className="d-flex mt-4">
                      <Button id="btn" variant="secondary" onClick={() => deletePost(post.id)}>
                        Cancella
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <span className="page-link" onClick={() => currentPage !== 1 && changePage(currentPage - 1)}>
              Previous
            </span>
          </li>

          {generatePaginationArray().map((page) => (
            <li key={page.n} className={`page-item ${page.active && "active"}`}>
              <span className="page-link" onClick={() => changePage(page.n)}>
                {page.n}
              </span>
            </li>
          ))}

          <li className={`page-item ${currentPage === "lastPage" && "disabled"}`}>
            <span className="page-link" onClick={() => currentPage !== lastPage && changePage(currentPage + 1)}>
              Next
            </span>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
export default BlogComponent;
