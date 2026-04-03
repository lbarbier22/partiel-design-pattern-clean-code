export default class SmsNotification {

    constructor(phone) {
        this.phone = phone;
    }

    send(message) {
        console.log("SMS | "+this.phone+" : "+message);
    }
}
