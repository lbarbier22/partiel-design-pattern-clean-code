import EventManager from "./EventManager.js";
import NotificationFactory from "./Notification/NotificationFactory.js";

const manager = new EventManager();

manager.subscribe('newCommand', NotificationFactory.create('email', 'mail@mail.fr'));
manager.subscribe('PaymentRefused', NotificationFactory.create('email', 'mail@support.fr'));
manager.subscribe('PackageSend', NotificationFactory.create('sms', '+33676767676'));
manager.subscribe('ImportantPackage', NotificationFactory.create('interne', 'logistique'));

manager.notify('newCommand', 'Commande #1 confirmée');
manager.notify('PaymentRefused', 'Échec paiement commande #2');
manager.notify('PackageSend', 'Colis #1 expédié');
manager.notify('ImportantPackage', 'Commande #3 : montant 1200€');
