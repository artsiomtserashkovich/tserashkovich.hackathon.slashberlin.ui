import React from "react";
import {useAppSelector} from "../store/storeHooks";

export interface ICounterOutputProps
{
    counterValue: number;
}

class CounterOutputClass extends React.Component<ICounterOutputProps>
{
    public render(): JSX.Element {

        // const value = useAppSelector((state) => state.counter.counterValue);

        return (
            <h1>
                Counter count: {this.props.counterValue}
            </h1>
        );
    }
}

export const CounterOutput = () =>
{
    const value = useAppSelector((state) => state.counter.counterValue);

    return(
        <h1>
            Counter count: {value}
        </h1>
    );
}