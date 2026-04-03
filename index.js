import NotificationFactory from "./Notification/NotificationFactory.js";

/**
 * Je dois faire :
 * - 1 notification email pour les nouvelles commandes
 * - 1 notification email pour les paiements refusés
 * - 1 notification sms pour les colis expédiés
 * - 1 notification interne pour les commandes importantes (genre montant > 1000€)
 */

const mail = NotificationFactory.create('email', 'mail@mail.fr')
const sms = NotificationFactory.create('sms', '+33676767676')
const internal = NotificationFactory.create('interne', 'logistique')

mail.send("1")
sms.send("2")
internal.send("3")
