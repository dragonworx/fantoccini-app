import { EventScopeComponent } from '../scope';

export interface EnvironmentEvent {
    name?: string;
}

export class EnvironmentScope extends EventScopeComponent<EnvironmentEvent> { }