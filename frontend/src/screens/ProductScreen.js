import React, { useState, useEffect } from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const { data } = await axios.get(`/api/products/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  });

  return (
    <>
      <Button
        className="btn btn-dark my-3"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </Button>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating ? product.rating : 0}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Price: ${product.price}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5 className="text-primary">Product Summary:</h5>
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong> ${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Staus:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button
                    size="lg"
                    variant="dark"
                    type="button"
                    disabled={product.countInStock < 1}
                  >
                    Add to Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5 className="text-primary">Product Information</h5>
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
