import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {styled} from "@stitches/react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import {blackA, gray, violet} from "@radix-ui/colors";
import {useState} from "react";

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

interface DateRange {
    maxDate: number,
}

function DeliveryTimeInputSearch() {

    const [dayRange, changeDay] = useState<DateRange>({maxDate: 15});

    return(
        <Card.Body>
            <Card.Title>How many days you could wait?</Card.Title>
            <Form>
                <Row>
                    <Col xs={3}>
                        Max wait days: {dayRange.maxDate}
                    </Col>
                    <Col xs={6}>
                        <StyledSlider
                            defaultValue={[dayRange.maxDate]}
                            min={1}
                            max={20}
                            step={1}
                            aria-label="Volume"
                            onValueChange={(numbers: number[]) => changeDay({maxDate: numbers[0]})}
                        >
                            <StyledTrack>
                                <StyledRange />
                            </StyledTrack>
                            <StyledThumb />
                        </StyledSlider>
                    </Col>
                    <Col xs={1}/>
                    <Col xs={2}>
                        <Button variant="secondary" type="submit">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card.Body>
    );
}

export default DeliveryTimeInputSearch;