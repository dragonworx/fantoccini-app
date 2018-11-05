import { EventScopeComponent } from '../scope';

export interface BEvent {
    bProp1?: string;
    bProp2?: number;
}

export class EventB extends EventScopeComponent<BEvent> { }
