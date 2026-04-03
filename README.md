# PARTIEL 5INFO

Par rapport aux contraintes de StreamTeam j'ai choisi les patterns suivants :

- **Observer** : Je l'utilise ici pour permettre à un objet de notifier d'autres objets
  lorsqu'un événement se produit, comme la création d'un nouvel objet ou la modification d'un objet existant.

- **Factory Method** : Dans le contexte de ce projet, il peut être utilisé pour créer des
  objets de différentes classes en fonction des besoins, sans avoir à connaître les détails de leur implémentation.

J'ai crée des cas d'éxécution (index.js) pour montrer que l'on obtient bien le résultat attendu.

- 1 notification email pour les nouvelles commandes
- 1 notification email pour les paiements refusés
- 1 notification sms pour les colis expédiés
- 1 notification interne pour les commandes importantes (genre montant > 1000€)
