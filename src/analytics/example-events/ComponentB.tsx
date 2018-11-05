
import * as React from 'react';
import { currentDispatcher, EventDispatcher } from '../index';
import { BEvent } from './EventB';

export class ComponentB extends React.Component<{}, {}> {
    dispatch: EventDispatcher<BEvent>;

    constructor (props) {
        super(props);
        this.dispatch = currentDispatcher<BEvent>();
    }

    onClick = () => {
        this.dispatch({
            bProp1: 'xyz',
        });
    };

    render() {
        return (
            <div className="eventConsumerComponent" onClick={this.onClick}>
                <h1>ComponentB</h1>
                { this.props.children }
            </div>
        )
    }
}