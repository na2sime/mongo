# Atelier MongoDB en Mode Replica Set

## Objectifs de l'Atelier
Configurer MongoDB en mode Replica Set.
Utiliser MongoDB avec le langage de programmation de votre choix.
Interagir avec la base de données à l'aide de la CLI MongoDB.
Générer et manipuler de fausses données.
Restituer un dépôt git zippé contenant le code source et un document Markdown.

## Prérequis
- Docker installé sur votre machine.
- Connaissances de base de la CLI Docker, si utilisée.
- Un environnement de développement pour le langage de programmation choisi.
- Accès à internet pour la documentation et les téléchargements nécessaires.

## Étape 1: Configuration de MongoDB en Mode Replica Set
- **Démarrage du Replica Set avec Docker** : Utilisez le fichier `docker-compose.yml` . Exécutez la commande suivante dans le répertoire du projet :
```
docker-compose up -d
```
Cela démarrera trois instances MongoDB configurées en mode Replica Set.

## Étape 2: Génération de Fausses Données
- **Générer et Insérer les Fausses Données** : On utilise ici le fichier `data/fake_data.json`. Vous pouvez utiliser la CLI MongoDB pour insérer ces données dans la base de données avec la commande suivante :
```
mongoimport --host localhost:27017 --db test --collection users --file ./data/fake_data.json --jsonArray
```
## Étape 3: Manipulations via la CLI MongoDB
- **Commandes CLI pour les opérations CRUD** :
  - **Création (Insertion)** :
    Utilisez la commande `mongoimport` comme décrit à l'étape 2.
  - **Lecture (Trouver tous les utilisateurs de plus de 30 ans)** :
    ```
    db.users.find({ age: { $gt: 30 } })
    ```
  - **Mise à jour (Augmenter l'âge de tous les utilisateurs de 5 ans)** :
    ```
    db.users.updateMany({}, { $inc: { age: 5 } })
    ```
  - **Suppression (Supprimer un utilisateur spécifique)** :
    ```
    db.users.deleteOne({ name: "John Doe" })
    ```
  - Vous pouvez exécuter ces commandes dans la CLI MongoDB après vous être connecté à la base de données en utilisant la commande `mongo`.

## Étape 4: Automatisation avec le Langage de Programmation de votre Choix
- **Exécution du Script** : Assurez-vous que vous avez les dépendances nécessaires installées pour exécuter le script, vous pouvez installer les dépendances avec `npm install`. Ensuite, exécutez le script avec la commande suivante :
```
node script/mongodb_operations.js
```
- **Différences entre CLI et Automatisation** :
  L'une des principales différences est que l'automatisation via le script permet un contrôle plus précis sur les opérations CRUD, ainsi que la possibilité d'ajouter de la logique supplémentaire. Par exemple, vous pouvez gérer les erreurs de manière plus sophistiquée dans votre script que via la CLI MongoDB.

## Difficultés Rencontrées
- **Problème de Connexion au Replica Set** : J'ai rencontré des difficultés lors de la configuration initiale du Replica Set avec Docker. J'ai résolu ce problème en vérifiant les paramètres de configuration dans le fichier `docker-compose.yml` et en m'assurant que les conteneurs Docker avaient démarré correctement en utilisant la commande `docker ps`.