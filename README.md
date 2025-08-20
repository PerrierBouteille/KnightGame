# Jeu du Cavalier 🐴

Un jeu de stratégie basé sur les mouvements du cavalier aux échecs, développé en HTML/CSS/JavaScript avec un système de logs partagés.

## 📋 Description

Le **Jeu du Cavalier** est un puzzle stratégique où le joueur doit visiter toutes les cases d'une grille en suivant les règles de déplacement du cavalier aux échecs (mouvement en "L"). Le défi est de compléter le parcours dans un temps limité sans se retrouver bloqué.

### ✨ Fonctionnalités

- **Interface intuitive** : Design moderne avec Tailwind CSS
- **Plusieurs tailles de grille** : 5x5, 6x6, et 8x8 (Bonus: 10x10 et 12x12)
- **Système de mise** : Pariez des jetons virtuels
- **Timer dynamique** : 5 minutes avec alerte critique
- **Système de logs partagés** : Historique des parties synchronisé entre tous les joueurs
- **Responsive Design** : Compatible mobile et desktop

## 🎮 Règles du Jeu

1. **Objectif** : Visiter toutes les cases de la grille une seule fois
2. **Mouvement** : Le cavalier se déplace en "L" (2 cases dans une direction + 1 case perpendiculairement)
3. **Temps limite** : 5 minutes pour compléter la grille
4. **Gains** :
   - Grille 5x5 : x2 la mise
   - Grille 6x6 : x3 la mise  
   - Grille 8x8 : x5 la mise

## 🚀 Installation

1. **Clonez le projet**
   ```bash
   git clone <repository-url>
   cd jeu-du-cavalier
   ```

2. **Démarrez le serveur**
   ```bash
   npm install && npm start
   ```

3. **Lancez le jeu**
   - Ouvrez `index.html` dans votre navigateur


## 📁 Structure du Projet

```
jeu-du-cavalier/
├── index.html              # Interface principale du jeu
├── README.md               # Documentation
├── server.js               # API Express.js
├── package.json            # Dépendances Node.js
├── games.json              # Base de données des parties (auto-générée)
└── sounds/                 # Assets des sons
```

## 🎯 Utilisation

1. **Page d'accueil** : Saisissez votre pseudo, votre mise et choisissez la taille de grille
2. **Jeu** : 
   - Cliquez sur une case pour commencer
   - Cliquez sur les cases valides pour vous déplacer
   - Utilisez "Réinitialiser" si vous êtes bloqué
3. **Historique** : Consultez les logs de toutes les parties via le bouton "Historique"

## 👥 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

Créé avec ❤️ par Perrier.

---

**Bon jeu ! 🎮**