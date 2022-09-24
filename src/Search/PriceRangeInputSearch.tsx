import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import * as SliderPrimitive from '@radix-ui/react-slider';
import { styled } from "@stitches/react";
import { blackA, violet, gray } from "@radix-ui/colors";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled(SliderPrimitive.Root, {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    height: '100%',
});

const StyledTrack = styled(SliderPrimitive.Track, {
    backgroundColor: blackA.blackA10,
    position: 'relative',
    flexGrow: 1,
    height: 3
});

const StyledRange = styled(SliderPrimitive.Range, {
    position: 'absolute',
    backgroundColor: `${blackA.blackA6}`,
    borderRadius: '9999px',
    height: '100%',
});

const StyledThumb = styled(SliderPrimitive.Thumb, {
    all: 'unset',
    display: 'block',
    width: 15,
    height: 15,
    backgroundColor: `${gray.gray8}`,
    boxShadow: `0 2px 10px ${blackA.blackA3}`,
    borderRadius: 10,
    '&:hover': { backgroundColor: violet.violet3 },
    '&:focus': { boxShadow: `0 0 0 5px ${blackA.blackA3}` },
});

interface PriceRange {
    start: number,
    end: number,
}

function PriceRangeInputSearch() {

    const navigate = useNavigate();
    const availablePrices: PriceRange = {start: 140, end: 2530};

    const [priceState, changePrice] = useState<PriceRange>({start: 500, end: 1800});

    return (
        <Card.Body>
            <Card.Title>Choose your price range?</Card.Title>
            <Row>
                <Col xs={3}>
                    From {priceState.start}$ to {priceState.end}$
                </Col>
                <Col xs={6}>
                    <StyledSlider
                        defaultValue={[500, 1800]}
                        min={availablePrices.start}
                        max={availablePrices.end}
                        step={1}
                        minStepsBetweenThumbs={10}
                        aria-label="Volume"
                        onValueChange={(numbers: number[]) => changePrice({start: numbers[0], end: numbers[1]})}
                    >
                        <StyledTrack>
                            <StyledRange />
                        </StyledTrack>
                        <StyledThumb />
                        <StyledThumb />
                    </StyledSlider>
                </Col>
                <Col xs={1}/>
                <Col xs={2}>
                    <Button variant="secondary" onClick={(() => navigate("/result"))}>
                        Search
                    </Button>
                </Col>
            </Row>
        </Card.Body>
    );
}

export default PriceRangeInputSearch;