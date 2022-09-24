import React from "react";
import {CounterOutput} from "./CounterOutput";
import {ClassCounterIncreaseButton, CounterIncreaseButton} from "./CounterIncreaseButton";

export class CounterTile extends React.Component
{
    public render() : JSX.Element {
        return (
            <>
                <CounterOutput/>
                <CounterIncreaseButton/>
                <ClassCounterIncreaseButton/>
            </>
        )
    };
}