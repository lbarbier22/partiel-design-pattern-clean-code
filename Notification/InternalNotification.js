export default class InternalNotification {

    constructor(service) {
        this.service = service;
    }

    send(message) {
        console.log("Interne | "+this.service+" : "+message);
    }
}
