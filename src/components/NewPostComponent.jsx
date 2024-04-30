import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import { URL } from "../contents";

const NewPostComponent = () => {
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    status: "publish",
    featured_media: "null",
  });

  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageFile);

    const authString = btoa("Luca:oQbw 5btk rAfm VVYr MICm eBYF");
    return fetch(URL + "/media", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authString}`,
      },
      body: formData,
    }).then((response) => response.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageData = await uploadImage();
      const newFormData = { ...formData, featured_media: imageData.id };

      const postResponse = await createPost(newFormData);
      if (postResponse.ok) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
        setFormData({
          title: "",
          content: "",
          status: "publish",
          featured_media: null,
        });
      } else {
        console.error("Errore nel caricamento del post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const createPost = (postData) => {
    const authString = btoa("Luca:oQbw 5btk rAfm VVYr MICm eBYF");
    return fetch(URL + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authString}`,
      },
      body: JSON.stringify(postData),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container id="newpost-div">
      <Row className="justify-content-center mb-4">
        <Col>
          <Image src="newpost.PNG" thumbnail />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={8}>
          {showAlert && (
            <div className="alert alert-success" role="alert">
              Post creato correttamente!
            </div>
          )}
          <Form>
            <Form.Group className="mb-1" controlId="postTitle">
              <Form.Label>Titolo del Post</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Titolo"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="postContent">
              <Form.Label>Contenuto del Post</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Il tuo contenuto qui..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postImage">
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button id="btn" onClick={handleSubmit} variant="secondary" type="submit">
                Invia
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default NewPostComponent;
