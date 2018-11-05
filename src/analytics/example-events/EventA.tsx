import { EventScopeComponent } from '../scope';

export interface AEvent {
    aProp?: string;
}

export class EventA extends EventScopeComponent<AEvent> { }
