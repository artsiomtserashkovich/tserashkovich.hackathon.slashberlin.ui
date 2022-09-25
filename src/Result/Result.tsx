import {Card, Container, Row, Col, Button} from "react-bootstrap";
import Image2 from "./image2.png";
import Image3 from "./image3.png";
import Image4 from "./image4.jpg";

function Result(){
    return (
        <Container>
            <Row>
                <Col xs={5}/>
                <Col xs={3}>
                    <h3>Recommended</h3>
                </Col>
                <Col xs={4}/>
            </Row>
            <Row>
                <Col xs={4}/>
                <Col xs={4}>
                    <Card className="m-3">
                        <img className="card-img-top" src={Image3} width="200" height="200"/>
                        <Card.Body>
                            <Card.Title>SAMSUNG</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        50” OLED Smart TV
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col xs={8}>
                                        Price: 429$
                                    </Col>
                                    <Col xs={4}>
                                        Rating: 4.7
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                        <Button variant="secondary">Buy</Button>
                    </Card>
                </Col>
                <Col xs={4}/>
            </Row>
            <Row>
                <Col xs={5}/>
                <Col xs={3}>
                    <h3>Other results</h3>
                </Col>
                <Col xs={4}/>
            </Row>
            <Row>
                <Col xs={4}/>
                <Col xs={4}>
                    <Card className="m-3">
                        <img className="card-img-top" src={Image4} width="200" height="200"/>
                        <Card.Body>
                            <Card.Title>SAMSUNG</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        57” OLED Smart TV
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col xs={8}>
                                        Price: 879$
                                    </Col>
                                    <Col xs={4}>
                                        Rating: 4.4
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                        <Button variant="secondary">Buy</Button>
                    </Card>
                </Col>
                <Col xs={4}/>
            </Row><Row>
            <Col xs={4}/>
            <Col xs={4}>
                <Card className="m-3">
                    <img className="card-img-top" src={Image2} width="200" height="200"/>
                    <Card.Body>
                        <Card.Title>SAMSUNG</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    42” OLED Smart TV
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={8}>
                                    Price: 559$
                                </Col>
                                <Col xs={4}>
                                    Rating: 4.5
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <Button variant="secondary">Buy</Button>
                </Card>
            </Col>
            <Col xs={4}/>
        </Row>
        </Container>
    );
}

export default Result;