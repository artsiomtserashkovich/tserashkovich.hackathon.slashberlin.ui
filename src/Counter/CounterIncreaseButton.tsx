import React, {PropsWithoutRef} from "react";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {incremented} from "./counterslice";
import {useAppDispatch} from "../store/storeHooks";
import {bindActionCreators} from "@reduxjs/toolkit";

interface IButtonSelectProps
{
    counterValue: number;
}

interface IButtonDispatchProps
{
    increment: (vaL: number) => void,
}

class CounterIncreaseButtonClass extends React.Component<IButtonSelectProps & IButtonDispatchProps>
{
    public constructor(props: IButtonSelectProps & IButtonDispatchProps)
    {
        super(props);
    }

    private handleOnClick(): void{
        this.props.increment(10);
    }

    public render(): JSX.Element{
        return (
            <button onClick={() => this.handleOnClick()}>
                Increase counter by 10
            </button>)
    }
}

function mapStateToProps(state: RootState): IButtonSelectProps {
    return { counterValue: state.counter.counterValue }
}

function mapDispatchToProps(dispatch: AppDispatch): IButtonDispatchProps {
    return { increment: (incrementValue: number) => { dispatch(incremented(incrementValue)) }};
}

export const ClassCounterIncreaseButton = connect<IButtonSelectProps, IButtonDispatchProps, {}, RootState>
(mapStateToProps, mapDispatchToProps)(CounterIncreaseButtonClass)

export const CounterIncreaseButton = () =>
{
    const dispatch = useAppDispatch();

    function handleOnClick(){
        dispatch(incremented(1));
    }

    return (
        <button onClick={handleOnClick}>
            Increase counter by 1
        </button>)
}