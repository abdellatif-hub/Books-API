# Books API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Status-TP%20Done-success" alt="Status">
</p>

API REST simple pour la gestion de livres, developpee avec **Node.js**, **Express** et **MongoDB (Mongoose)**.

## Sommaire

- [Apercu](#apercu)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Installation et lancement](#installation-et-lancement)
- [Variables d'environnement](#variables-denvironnement)
- [Endpoints](#endpoints)
- [Captures d'ecran](#captures-decran)
- [Exemple de reponses](#exemple-de-reponses)

## Apercu

Ce projet expose une API `/api/books` avec les operations suivantes:

- lister tous les livres
- recuperer un livre par id
- creer un livre
- supprimer un livre

## Stack technique

- Node.js
- Express 5
- Mongoose
- MongoDB Compass (verification des donnees)
- Postman (tests API)

## Structure du projet

```text
books-api/
|-- controllers/
|   `-- bookController.js
|-- models/
|   |-- bookModel.js
|   |-- categoryModel.js
|   |-- clientModel.js
|   |-- orderItemModel.js
|   `-- orderModel.js
|-- routes/
|   `-- bookRoutes.js
|-- .env
|-- package.json
`-- server.js
```

## Installation et lancement

```bash
# 1) Installer les dependances
npm install

# 2) Lancer le serveur
node server.js
```

Option dev:

```bash
npx nodemon server.js
```

Serveur par defaut: `http://localhost:5000`

## Variables d'environnement

Fichier `.env`:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/booksdb
```

## Endpoints

Base URL: `http://localhost:5000/api/books`

| Methode | Route | Description |
|---|---|---|
| GET | `/` | Recuperer tous les livres |
| GET | `/:id` | Recuperer un livre par ID |
| POST | `/` | Creer un nouveau livre |
| DELETE | `/:id` | Supprimer un livre |

### Corps JSON pour POST

```json
{
  "title": "B4",
  "author": "el_hamaoui",
  "price": 4999
}
```

## Captures d'ecran

> Place tes images dans `docs/screenshots/` avec les noms ci-dessous.

### 1) Structure du projet (VS Code)

![Structure du projet](docs/screenshots/01-structure-vscode.png)

### 2) GET /api/books (Postman)

![GET all books](docs/screenshots/02-get-books-postman.png)

### 3) POST /api/books (Postman)

![POST create book](docs/screenshots/03-post-book-postman.png)

### 4) DELETE /api/books/:id (Postman)

![DELETE book](docs/screenshots/04-delete-book-postman.png)

### 5) Verification dans MongoDB Compass

![MongoDB Compass](docs/screenshots/05-mongodb-compass.png)

## Exemple de reponses

### GET /api/books

```json
[
  {
    "_id": "69a7709236282acebffc2f06",
    "title": "B2",
    "author": "hamid",
    "price": 3699,
    "published_at": "2026-03-03T23:36:50.532Z",
    "__v": 0
  }
]
```

### DELETE /api/books/:id

```json
{
  "message": "Book deleted successfully"
}
```

## Auteur

Projet realise par **abdellatif** dans le cadre d'un TP Node.js / Express.
