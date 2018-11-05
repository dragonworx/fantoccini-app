import * as React from 'react';
import { EventWrapper } from './analytics/scope';
import { EventA } from './analytics/example-events/EventA';
import { EventB } from './analytics/example-events/EventB';
import { EventC } from './analytics/example-events/EventC';
import { ComponentA } from './analytics/example-events/ComponentA';
import { ComponentB } from './analytics/example-events/ComponentB';
import { ComponentC } from './analytics/example-events/ComponentC';

export interface State {
    mode: number;
}

export class Example extends React.Component<{}, State> {
    state = {
        mode: 1,
    };

    onClick = (mode: number) => () => this.setState({ mode });

    render() {
        return <EventWrapper>
            {
                this.state.mode === 1
                    ? (
                        <EventA aProp="foo1">
                            <h2>Mode 1</h2>
                            <p>aProp="foo1"</p>
                            <EventB bProp2={123}>
                                <p>bProp2=123</p>
                                <ComponentB>
                                    <p>+ bProp1="xyz"</p>
                                </ComponentB>
                            </EventB>
                            <ComponentA>
                                <p>+ aProp="efg"</p>
                                <EventC>
                                    <ComponentC>
                                        <p>+ cProp1=Date.now()</p>
                                        <p>+ cProp2="bar"</p>
                                    </ComponentC>
                                </EventC>
                            </ComponentA>
                            <p>
                                <button onClick={this.onClick(2)}>Switch</button>
                            </p>
                        </EventA>
                    )
                    : (
                        <EventA aProp="foo2">
                            <h2>Mode 2</h2>
                            <p>aProp="foo2"</p>
                            <EventB bProp2={456}>
                                <p>bProp2=456</p>
                                <ComponentB>
                                    <p>+ bProp1="xyz"</p>
                                    <EventC>
                                        <ComponentC>
                                            <p>+ cProp1=Date.now()</p>
                                            <p>+ cProp2="bar"</p>
                                        </ComponentC>
                                    </EventC>
                                </ComponentB>
                            </EventB>
                            <p>
                                <button onClick={this.onClick(1)}>Switch</button>
                            </p>
                        </EventA>
                    )
            }
        </EventWrapper>
    }
}