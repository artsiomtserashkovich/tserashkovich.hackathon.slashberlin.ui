import {Button, Container, Form, Card, ButtonGroup, Col, Row, ProgressBar} from "react-bootstrap";
import TextSearch from "./TextSearch";
import CategoriesSearch from "./CategoriesSearch";
import {useState} from "react";
import DeliveryTimeInputSearch from "./DeliveryTimeInputSearch";
import BrandInputSearch from "./BrandInputSearch";
import PriceRangeInputSearch from "./PriceRangeInputSearch";
import {Steps} from "rsuite";
import {useAppSelector} from "../store/storeHooks";

function Search()
{
    const viewState = useAppSelector((state) => state.search);

    return(
        <Container className="mt-2">
            <Row>
                <Col xs={2} />
                <Col>
                    <Card className="m-3">
                        {
                            {
                                "textsearch": (<TextSearch/>),
                                "categoryView": (<CategoriesSearch/>),
                                "brandView": (<BrandInputSearch/>),
                                "deliveryView": (<DeliveryTimeInputSearch/>),
                                "priceView": (<PriceRangeInputSearch/>)
                            }[viewState.view]
                        }

                        <Container className="m-2">

                            <Row>
                                <Col xs={2} />
                                <Col xs={8}>
                                    <Steps current={viewState.step}>
                                        <Steps.Item />
                                        <Steps.Item />
                                        <Steps.Item />
                                    </Steps>
                                </Col>
                                <Col xs={2} />
                            </Row>

                        </Container>
                    </Card>
                </Col>
                <Col xs={2} />
            </Row>

        </Container>
    );
}

export default Search;