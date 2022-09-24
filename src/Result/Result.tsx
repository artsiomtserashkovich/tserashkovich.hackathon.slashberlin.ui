import {Card, Container, Row, Col} from "react-bootstrap";

function Result(){
    return (
        <Container>
            <Card className="m-3">
                <Card.Body>
                    <Card.Title>Best laptop ever</Card.Title>
                    <Row>
                        <Col xs={9}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </Col>
                        <Col xs={3}>
                            <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="sans" width="200px"/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="m-3">
                <Card.Body>
                    <Card.Title>Best laptop ever</Card.Title>
                    <Row>
                        <Col xs={9}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </Col>
                        <Col xs={3}>
                            <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="sans" width="200px"/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="m-3">
                <Card.Body>
                    <Card.Title>Best laptop ever</Card.Title>
                    <Row>
                        <Col xs={9}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </Col>
                        <Col xs={3}>
                            <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="sans" width="200px"/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Result;