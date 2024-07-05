### Projet-12-SportSee-OC

Ce projet vise à développer une page de profil utilisateur permettant de visualiser les données de performance sportive. L'application est construite avec React et utilise la librairie Recharts pour la visualisation des données. Le backend est implémenté avec Node.js et Express.js pour simuler les appels API.

#### Installation et Mise en Route

##### Prérequis
- Node.js
- npm

##### Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/MarwenCode/projet-12-SportSee-OC.git
```

2. Installer les dépendances du backend :

```bash
cd api
npm install
```

3. Démarrer le serveur backend :

```bash
node index.js
```

4. Installer les dépendances du frontend :

```bash
cd ../client
npm install
```

5. Démarrer l'application frontend :

```bash
npm run dev
```

#### Fonctionnalités

##### Visualisation des Données

- **Activity Component** : Affiche les données d'activité quotidienne sous forme de graphique à barres.
- **Session Component** : Affiche la durée moyenne des sessions d'entraînement sur une semaine sous forme de graphique linéaire.
- **Performance Component** : Montre les performances globales de l'utilisateur sur différents aspects (endurance, vitesse, force, etc.) sous forme de radar chart.
- **Score Component** : Affiche le score global de l'utilisateur sous forme de graphique radial.

### Utilisation des Données Mock

#### Fichier Mock

Pour faciliter le développement et le test en local sans avoir besoin de faire des appels API réels, j'ai ajouté un fichier de données mock.

1. **Ajout du fichier `mockUserData.js`**

   - Le fichier `mockUserData.js` a été ajouté dans le dossier `DataService`. Ce fichier contient des données d'utilisateur fictives pour simuler les réponses de l'API.

2. **Modification du fichier `dataService.js`**

   - Le fichier `dataService.js` a été modifié pour inclure une condition permettant de gérer l'utilisation des données mock ou des données réelles en fonction d'un flag `DataMock`.

   - Par défaut, `DataMock` est défini sur `true`, ce qui permet d'afficher l'interface en local sans faire appel à l'API réelle.

3. **Utilisation en local**

   - Pour utiliser les données mock et afficher l'interface en local, placez-vous dans le dossier `client` et exécutez la commande :

   ```bash
   npm run dev
   ```

4. **Utilisation de l'API réelle**

   - Pour utiliser l'API réelle, il faut démarrer deux serveurs :
     1. Pour le frontend, utilisez les commandes :

     ```bash
     cd client
     npm run dev
     ```

     2. Pour le backend, utilisez les commandes :

     ```bash
     cd api
     npm start
     ```

Avec ces configurations, vous pouvez facilement basculer entre l'utilisation des données mock et les appels API réels pour le développement et les tests.

### Structure du Projet

- `api/` : Contient le serveur backend pour simuler les appels API.
- `client/` : Contient l'application frontend construite avec React.
- `DataService/` : Contient les fichiers de service de données, y compris `mockUserData.js` pour les données mock et `dataService.js` pour la gestion des appels API.

Cette structure permet de maintenir une séparation claire entre le frontend et le backend, facilitant ainsi le développement et le déploiement.