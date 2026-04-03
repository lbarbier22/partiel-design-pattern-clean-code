export default class EventManager {

    constructor() {
        this.events = {};
    }

    subscribe(eventType, notifier) {
        if (!this.events[eventType]) {
            this.events[eventType] = [];
        }
        this.events[eventType].push(notifier);
    }

    notify(eventType, message) {
        console.log("["+eventType+"]");
        if (!this.events[eventType]) return;
        for (let notifier of this.events[eventType]) {
            notifier.send(message);
        }
    }
}
