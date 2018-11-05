import { EventScopeComponent } from '../scope';

export interface EnvironmentEvent {
    name?: string;
}

export class Environment extends EventScopeComponent<EnvironmentEvent> { }