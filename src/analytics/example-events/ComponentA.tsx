
import * as React from 'react';
import { currentDispatcher, EventDispatcher } from '../index';
import { AEvent } from './EventA';

export class ComponentA extends React.Component<{}, {}> {
    dispatch: EventDispatcher<AEvent>;

    constructor (props) {
        super(props);
        this.dispatch = currentDispatcher<AEvent>();
    }

    onClick = () => {
        this.dispatch({
            aProp: 'efg',
        });
    };

    render() {
        return (
            <div className="eventConsumerComponent" onClick={this.onClick}>
                <h1>ComponentA</h1>
                { this.props.children }
            </div>
        )
    }
}