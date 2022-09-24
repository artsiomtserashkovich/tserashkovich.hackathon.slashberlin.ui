import {ListGroup, Button, Card, Row, Col, Container} from "react-bootstrap";

const brands = ["Apple", "Microsof", "Asus", "LG", "Samsung"];


function BrandInputSearch() {
    return(
        <Card.Body>
            <Card.Title>Choose trust brand?</Card.Title>
            <Container className="m-3">
                <Row>
                    <Col xs={3}/>
                    <Col xs={6}>
                        <ListGroup variant="flush">
                            {brands.map(brand => (
                                <ListGroup.Item>
                                    <div className="d-grid gap-2">
                                        <Button variant="secondary">{brand}</Button>
                                    </div>
                                </ListGroup.Item>))}
                        </ListGroup>
                    </Col>
                    <Col xs={3}/>
                </Row>
            </Container>
        </Card.Body>
    );

}

export default BrandInputSearch;