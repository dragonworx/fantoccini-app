
import * as React from 'react';
import { currentDispatcher, EventDispatcher } from '../analytics';
import { CEvent } from '../analytics/example-events/EventC';

export class ComponentC extends React.Component<{}, {}> {
    dispatch: EventDispatcher<CEvent>;

    constructor (props) {
        super(props);
        this.dispatch = currentDispatcher<CEvent>();
    }

    onClick = (e: any) => {
        this.dispatch({
            cProp1: Date.now(),
            cProp2: "bar",
        });
        e.stopPropagation();
    };

    render() {
        return (
            <div className="eventConsumerComponent" onClick={this.onClick}>
                <h1>ComponentC</h1>
                { this.props.children }
            </div>
        )
    }
}