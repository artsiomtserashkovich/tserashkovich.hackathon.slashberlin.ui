import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Truck, Cash, Apple} from "react-bootstrap-icons";
import {useAppDispatch} from "../store/storeHooks";
import {changeSearchView} from "./searchslice";

function CategoriesSearch(){
    const dispatch = useAppDispatch();

    return (
        <Card.Body>
            <Card.Title>What is your priority?</Card.Title>
            <Row className="mt-3">
                <Col className="text-center">
                    <Button variant="secondary" onClick={() => dispatch(changeSearchView({view:"brandView", step: 2}))}>
                        <Apple/> Trust brands
                    </Button>
                </Col>
                <Col className="text-center">
                    <Button variant="secondary" onClick={() => dispatch(changeSearchView({view:"deliveryView", step: 2}))} >
                        <Truck/> Faster
                    </Button>
                </Col>
                <Col className="text-center">
                    <Button variant="secondary" onClick={() => dispatch(changeSearchView({view:"priceView", step: 2}))}>
                        <Cash/> Cheaper
                    </Button>
                </Col>
            </Row>
        </Card.Body>
    );
}

export default CategoriesSearch;
