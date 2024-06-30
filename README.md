# projet-12-SportSee-OC

Ce projet vise à développer une page de profil utilisateur permettant de visualiser les données de performance sportive. L'application est construite avec React et utilise la librairie Recharts pour la visualisation des données. Le backend est implémenté avec Node.js et Express.js pour simuler les appels API.

### Installation et Mise en Route

#### Prérequis
- Node.js
- npm

#### Installation
1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/MarwenCode/projet-12-SportSee-OC.git
   
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Démarrer le serveur backend :**
   ```bash
   cd api
   npm install
   node index.js
   ```

4. **Démarrer l'application frontend :**
   ```bash
   cd client
   npm install
   npm run dev
   ```

### Fonctionnalités

#### Visualisation des Données de Performance
- **Activity Component** : Affiche les données d'activité quotidienne sous forme de graphique à barres.
- **Session Component** : Affiche la durée moyenne des sessions d'entraînement sur une semaine sous forme de graphique linéaire.
- **Performance Component** : Montre les performances globales de l'utilisateur sur différents aspects (endurance, vitesse, force, etc.) sous forme de radar chart.
- **Score Component** : Affiche le score global de l'utilisateur sous forme de graphique radial.


