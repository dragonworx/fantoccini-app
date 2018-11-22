import { EventScopeComponent } from '../scope';

export interface ProductEvent {
    name?: string;
}

export class ProductScope extends EventScopeComponent<ProductEvent> { }