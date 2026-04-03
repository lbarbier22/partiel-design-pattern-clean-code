import EmailNotification from './EmailNotification.js';
import SmsNotification from './SmsNotification.js';
import InternalNotification from './InternalNotification.js';

export default class NotificationFactory {

    static create(type, config) {
        if (type === 'email') return new EmailNotification(config);
        if (type === 'sms') return new SmsNotification(config);
        if (type === 'interne') return new InternalNotification(config);
        throw new Error("Unknown type : "+type);
    }

}
