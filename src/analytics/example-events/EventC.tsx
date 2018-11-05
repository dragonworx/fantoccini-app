import { EventScopeComponent } from '../scope';

export interface CEvent {
    cProp1?: number;
    cProp2?: string;
}

export class EventC extends EventScopeComponent<CEvent> { }
