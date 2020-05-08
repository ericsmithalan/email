export type CssEventHandler<E> = (event: E) => void;

export class EventDispatcher<E> {
    private handlers: CssEventHandler<E>[] = [];
    fire(event: E) {
        for (let h of this.handlers) h(event);
    }
    register(handler: CssEventHandler<E>) {
        this.handlers.push(handler);
    }
}
