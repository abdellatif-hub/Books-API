#  Books API – Express.js REST API

> TP4 – Développement d’une API REST avec Express.js  
> Gestion d’une bibliothèque (Books API)

---

## 📌 Description

Cette application est une API REST développée avec **Node.js** et **Express.js** permettant de gérer une collection de livres.

Les données sont stockées dans un tableau JavaScript (sans base de données).

Chaque livre contient :

- id
- title
- author
- price

---

## 🎯 Objectifs du TP

- Initialiser un projet Node.js
- Installer et configurer Express
- Utiliser ES Modules (import/export)
- Structurer le projet (routes & controllers)
- Implémenter une API REST complète
- Gérer les erreurs (400 / 404)
- Tester l’API avec Postman

---

## Architecture du projet

```
books-api/
│
├── server.js
├── routes/
│   └── bookRoutes.js
├── controllers/
│   └── bookController.js

```
## 🔹 Structure du projet




<img width="1882" height="687" alt="image" src="https://github.com/user-attachments/assets/0b61720a-0389-4b49-960b-906e1d738795" />

---

## 🚀 Installation

### 1 initialiser un nouveau projet nodejs

```
npm init -y
```

### 2️ Installer express

```bash
npm i express
```

### 3️ modifier package json



```bash
type :"module"
```

### 4 créer et exécuter server.js
````
npm install -g nodemon
````

````
nodemon server.js
````

---

##  Endpoints API

Base URL :

```
http://localhost:3000/api/books
```

| Méthode | Endpoint | Description |
|----------|----------|--------------|
| GET | /api/books | Récupérer tous les livres |
| GET | /api/books/:id | Récupérer un livre par ID |
| POST | /api/books | Ajouter un livre |
| PUT | /api/books/:id | Modifier un livre |
| DELETE | /api/books/:id | Supprimer un livre |

---


# server.js:


<img width="2534" height="1138" alt="image" src="https://github.com/user-attachments/assets/123443a6-86dd-4e96-a063-c40142219de2" />


# bookRoutes.js :

<img width="2473" height="1231" alt="image" src="https://github.com/user-attachments/assets/eeeb6f4a-8ec3-49d3-8357-8ea228de387e" />


## 🔹 Test GET ALL : 

### le code source:
<img width="1838" height="202" alt="image" src="https://github.com/user-attachments/assets/2b02ab69-36b9-429e-86c4-edb555f500ab" />

### l'execution POSTMAN: 

<img width="2518" height="1152" alt="image" src="https://github.com/user-attachments/assets/f61cadab-bacd-43a9-ac5d-a05dfa8850eb" />

### TEST GET by id : 
### le code source:

<img width="1987" height="465" alt="image" src="https://github.com/user-attachments/assets/5ede7016-6bde-4fd5-9dee-e11464be9d0d" />

### l'execution POSTMAN: 

<img width="2372" height="1132" alt="image" src="https://github.com/user-attachments/assets/fe791a21-c851-4fa7-a148-f25e6778fe21" />

## TEST POST:
### le code source: 
<img width="2068" height="766" alt="image" src="https://github.com/user-attachments/assets/3b8cb852-4967-43d1-aa4e-ac4de60da6e5" />

### l'execution POSTMAN: 
<img width="2393" height="1085" alt="image" src="https://github.com/user-attachments/assets/50315f4e-f29c-4cde-b743-d619a6d99d2b" />

## TEST PUT : 
### le code source: 
<img width="1976" height="676" alt="image" src="https://github.com/user-attachments/assets/12c5793b-5b56-40de-ba25-ecd4598f1a3c" />

### l'execution POSTMAN: 
<img width="2377" height="1054" alt="image" src="https://github.com/user-attachments/assets/7d4df151-07e8-4bd4-b0ad-8edae88bcb9e" />

## DELETE : 
### le code source: 
<img width="2029" height="702" alt="image" src="https://github.com/user-attachments/assets/569cc8d3-8c9a-4bd4-95e6-fcb623e319c2" />

### l'execution POSTMAN: 
<img width="2070" height="1055" alt="image" src="https://github.com/user-attachments/assets/603c8543-19a1-49e2-997f-58be75b31ffe" />
### après delete : 
<img width="2325" height="1033" alt="image" src="https://github.com/user-attachments/assets/730fe66f-3b9c-4d09-a3dc-b26a2277cffb" />

---

# ✅ Résultat

✔ API REST complète  
✔ Architecture propre  
✔ Gestion des erreurs  
✔ Tests fonctionnels  

