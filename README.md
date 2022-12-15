# Sujet du projet
**Créer un site web, application mobile et une api pour faciliter le quotidien des praticien et patients**

# Coté Backend

## Information sur la réalisation du Backend
### But
Créer une `API` pour notre application et notre site web.

### Langages utilisés
- Langage `Javascript`
- Framework `Node.js`
- Typage `Typescript`

### Prérequis

#### Installation de mongoDB en local

##### Étape 1
Vérifier si `brew`est installé via la commande `brew --version`.
Si `brew`n'est pas présent installé le via la commande :
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

##### Étape 2
Ensuite, installer l'édition Community de MongoDB. 
Pour ce faire, tapez la commande suivante :
```bash
$ brew tap mongodb/brew
```
##### Étape 3
Cette commande demande à Homebrew de préparer l'installation d'un package venant de mongodb. Pour finaliser l'installation, taper la commande :
```bash
$ brew install mongodb-community@4.4
```

##### Étape 4
Pour vérifier que l'installation mongoDB s'est bien passé sur votre mac, taper cette commande :
```bash
$ mongo --version
```

##### Étape 5
Une fois la bonne version de mongo installée sur votre ordinateur, il faut maintenant lancer le serveur mongo en local via la commande:
```bash
$ mongod
```

##### Étape 6
Puis le lancer via la commande :
```bash
$ brew services start mongodb-community
```

##### Étape 7
Vous pourrez ensuite accéder au Mongo Shell - le terminal de commande propre à Mongo - avec la commande :
```bash
$ mongo
```

##### Commande de base
- `show dbs`: permet d'afficher les bases de données présentes sur votre machine
- `use <dbName>`: permet d'indiquer à mongo que vous voulez utiliser cette base de données pour les futures opérations
- `show collections` : permet d'afficher l'ensemble des collections pour une base de données
- `db.<collectionName>.find()` : permet d'afficher l'ensemble des objets présents dans cette collection

### Configuration & Initialisation de Node.js

Créer un projet Node.js 
```bash
$ npm init
```

Puis installer les différents packages néccesaires `express js` et autres. Vous pourrez les voir dans le fichier package.json
```bash
$ npm install express nodemon tslint typescript @types/node pdfkit multer mongoose mongodb-memory-server mongodb gridfs-stream gridfile dotenv body-parser axios @types/express
``` 

- Après avoir installé les packages aller dans `package.json`

- Metter dans `"scripts": { ... }`
```json
"server": "nodemon index.ts"
```
Ainsi, `nodemon` surveille le système de fichiers et redémarre automatiquement le processus après un `(⌘) + s`

### Déploiment de l'API
Pour lancer l'API, il vous suffit d'entrer cette commande
```bash
$ npm run server
```

### Route API & Fonctionnalité

- Vous pourrez essayer les routes de l'API sur `POSTMAN`
- Les routes sont dans le dossier `API`.

#### Côté Docteur

Méthode de requête HTTP | Routes | Fonctionnalité | Fichier contenant la Route
------------ | ------------- | ---------------- | -------------
GET | http://127.0.0.1:4000/api/doctors | Pour voir tous les docteurs inscrits | DoctorApi.ts
GET | http://127.0.0.1:4000/api/doctors/{RPPS} | Pour voir les infos d'un docteur via son `RPPS` | DoctorApi.ts
PUT | http://127.0.0.1:4000/api/doctors/{id} | Pour modifier les donnés d'un docteur via son `id`|  DoctorApi.ts
POST | http://127.0.0.1:4000/api/doctors | Pour créer un compte pour docteur | DoctorApi.ts
POST | http://127.0.0.1:4000/api/doctors/login | Pour se connecter via l'`email` et son `password` | DoctorApi.ts

#### Côté Utilisateur

Méthode de requête HTTP | Routes | Fonctionnalité | Fichier contenant la Route
------------ | ------------- | ---------------- | ----------------
GET | http://127.0.0.1:4000/api/users | Pour voir tous les users inscrits | UsersApi.ts
GET | http://127.0.0.1:4000/api/users/{security_number} | Pour voir un user via son `security_number` | UsersApi.ts
PUT | http://127.0.0.1:4000/api/users/{security_number} | Pour modifier les données d'un user via son `security_number` | UsersApi.ts
POST | http://127.0.0.1:4000/api/users | Pour créer un compte utilisateur | UsersApi.ts
POST | http://127.0.0.1:4000/api/users/login | Pour se connecter via l'`email` et son `password`| UsersApi.ts

#### Côté Urgence

Méthode de requête HTTP | Routes | Fonctionnalité | Fichier contenant la Route
------------ | ------------- | ----------------| ----------------
GET | http://localhost:4000/api/Urgence | Pour voir toutes les urgences | UrgenceApi.ts
GET | http://localhost:4000/api/Urgence/{security_number} | Pour voir toutes les urgences d'un utilisateur via son `security_number` | UrgenceApi.ts
POST | http://localhost:4000/api/Urgence/{security_number} | Pour créer la fiche urgence d'un user via son `security_number` | UrgenceApi.ts
PUT | http://127.0.0.1:4000/api/users/{security_number} | Pour modifier la fiche urgence d'un user via son `security_number` | UrgenceApi.ts

#### Côté Ordonnance

Méthode de requête HTTP | Routes | Fonctionnalité | Fichier contenant la Route
------------ | ------------- | ----------------| ----------------
POST | http://localhost:4000/patient/{RPPS} | Pour qu'un docteur puisse créer une ordonnace via son `RPPS` | OrdonnanceApi.ts
GET | http://localhost:4000/api/patient | Pour avoir toutes les ordonnances de tous les patients | OrdonnanceApi.ts
GET | http://localhost:4000/api/patient/{security_number} | Pour avoir toutes les ordonnances d'un patient via son  `security_number` | OrdonnanceApi.ts

#### Côté PDF (fichier .pdf)

Méthode de requête HTTP | Routes | Fonctionnalité | Fichier contenant la Route
------------ | ------------- | ---------------- | ----------------
GET | http://localhost:4000/api/ordonnance/meta?filename={sécurity_number}.pdf | Pour récupérer les infos des pdfs en db pour un utilisateur donné (via son numéro de sécurité social) | OrdonnanceApi.ts
GET | http://localhost:4000/api/ordonnance/download?_id={_id} | Pour télécharger un pdf via son `_id`| OrdonnanceApi.ts

#### Côté RDV (rendez-vous)

Méthode de requête HTTP | Routes | Fonctionnalité | Fichier contenant la Route
------------ | ------------- | ---------------- | ----------------
POST | http://127.0.0.1:4000/api/Rdv | Pour créer un rendez-vous entre un docteur et un utilisateur | RdvApi.ts
POST | http://127.0.0.1:4000/api/RdvRead | Pour récupérer les rendez-vous d'un docteur | RdvApi.ts

#### Côté Patient

Méthode de requête HTTP | Routes | Fonctionnalité | Fichier contenant la Route
------------ | ------------- | ---------------- | -------------
POST | http://127.0.0.1:4000/api/Pat/{RPPS} | Pour créer un patient pour un docteur via son `RPPS` | PatientApi.ts
GET | http://127.0.0.1:4000/api/Pat | Pour voir tous les patients de tous les docteurs | PatientApi.ts
GET | http://127.0.0.1:4000/api/doctors/{RPPS} | Pour voir tous les patients d'un docteur via son `RPPS`|  PatientApi.ts
GET | http://127.0.0.1:4000/api/Doc/{security_number} | Pour qu'un docteur ait accès aux informations d'un patient via son `security_number`| PatientApi.ts

# Coté Frontend (Site Web)

## Information sur la réalisation du site web
### Objectif
Créer un site Web, pour les practiciens en utilisant l'api.
### Langages utilisés
- Langage `Javascript`
- Framework `React.js`
- Typage `Typescript`

### Prérequis

### Configuration & Initialisation de React.js

Installer `create-react-app` pour créer son projet
```bash
$ npm install -g create-react-app
```
Créer un projet React.js 
```bash
$ create-react-app "Nom de votre dossier"
```

Puis installer les différents packages néccesaires. Vous pourrez les voir dans le fichier package.json
```bash
$ npm install @material-ui/core @material-ui/icons @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/node @types/react @types/react-dom axios bootstrap react-bootstrap react-icons react-multistep react-responsive-carousel react-scroll redux-form styled-components typescript web-vitals
```  

### Déploiement du site Web

Pour lancer le site web il suffit de taper la commande suivante:
```bash
$ npm start
```

### Structure des fichiers & fonctionnement

- Dans `/Components`, les fichers font des requêtes à l'api pour avoir les informations néccesaires et les afficher

- Le fichier `/Components/ProtectedRoute` sert à vérifier si l'utilisateur a les droits pour acceder aux autres pages

- Dans `/page`, nous appelons les fichiers qui se trouve dans `/Components` pour les combiner entre eux (avoir un header, un body et un footer dans une même page)

- Dans le fichier `App.tsx` on rassemble tous les fichiers se trouvant dans le dossier `/page`

* Configuration des Urls & chemin pour les pages

- Les `url` des requêtes et les noms des chemins pour accéder aux pages sont dans le dossier `/Config/config`


# Coté Frontend (Application mobile)
### But
Créer une application mobile, qui permet à l'utilisateur d'avoir accès à ses ordonnances, calendrier de rendez-vous et fiche d'urgence.
### Langage utiliser
- Langage `Javascript`
- Framework `React.js`
- Typage `Typescript`

### Prérequis

### Configuration & Initialisation de React native

Installer `expo CLI` pour créer son projet
```bash
$ npm install -g expo-cli
```
Créer un projet React native
```bash
$ expo init "nom de votre projet"

```
Puis installer les différents packages nécessaires. Vous pourrez les voir dans le fichier package.json

### Lancement de l'application

Pour lancer l'application il suffit de taper la commande suivante:
```bash
$ expo start
```
# Structure des fichiers & fonctionnement
Dans /src/components, il s'agit des fichiers permettant l'affichage de chacune des pages. Pour chacune d'elles nous faisons appel à l'api que ce soit pour récupérer des données et les afficher ou bien pour envoyer des données vers l'api.

Le fichier conf.tsx est un fichier de configuration dans lequel nous avons prédéfinis toutes les url de notre api afin de pouvoir les rappeler plus facilement dans nos fichiers du dossier "/src/components"

Dans le dossier src/style, se trouve tous les fichiers de "css / mise en page" de nos fichier "components"

Dans le fichier App.tsx on a fait appel à tous nos component afin de pouvoir organiser la navigation au sein de notre application que ce soit en "Stack navigator" pour les pages login, register, ou bien success ou alors en "tab navigator" pour les pages "home" de notre application (planning, fiche urgence, page paramètre, page des pdfs)