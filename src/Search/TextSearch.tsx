import {Button, Col, Form, Row, Card} from "react-bootstrap";
import {FormEventHandler} from "react";
import {useAppDispatch} from "../store/storeHooks";
import {changeSearchView} from "./searchslice";

interface TextSearch {
    search: string
};

function TextSearch(){
    const dispatch = useAppDispatch();
    return(
        <Card.Body>
            <Card.Title>What you are looking for?</Card.Title>
            <Form onSubmit={(value) => {console.log(value)}}>
                <Row className="mt-3">
                    <Col xs={1}/>
                    <Col xs={9}>
                        <Form.Control name="search" type="text" placeholder="Mobile phone, TV, ..." />
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={() => dispatch(changeSearchView({
                            view: "categoryView",
                            step: 1
                        }))}>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card.Body>
    );
}

export default TextSearch;