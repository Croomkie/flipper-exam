# Hono 🔥- Mongoose - Ts

_Copy .env.example to a .env file_

- `npm install`
- `npm run dev`

## Analyse et modélisation

Après avoir créer mes modèles et les routes pour chaque, j’ai inséré des données à l’aide de postman pour tester les routes.

### Ajout

**Marque**

URL d’ajout → **POST :** **`localhost:3000/api/marques`**

```json
{
  "nom": "Stern",
  "pays": "USA",
  "fondee_en": 1977
}
```

```json
{
  "nom": "Bally",
  "pays": "USA",
  "fondee_en": 1932
}
```

```json
{
  "nom": "Williams",
  "pays": "USA",
  "fondee_en": 1943
}
```

**Flippers**

URL d’ajout → **POST** : [**`localhost:3000/api/flippers`**](http://localhost:3000/api/flippers)

```json
{
  "nom": "John Wick Limited Edition",
  "marque_id": "66742c75688d731b1e308bc1",
  "caracteristiques": {
    "annee": 2024,
    "note": 4.4,
    "prix": 16500,
    "disponibilite": "Nous consulter"
  },
  "images": ["john_wick_le_1.jpg", "john_wick_le_2.jpg"]
}
```

```json
{
  "nom": "Jaws Pro",
  "marque_id": "66742ca8688d731b1e308bc3",
  "caracteristiques": {
    "annee": 2024,
    "note": 4.7,
    "prix": 9000,
    "disponibilite": "En stock"
  },
  "images": ["jaws_pro_1.jpg", "jaws_pro_2.jpg"]
}
```

```json
{
  "nom": "Jurassic Park 30th Anniversary Edition",
  "marque_id": "66742cb4688d731b1e308bc7",
  "caracteristiques": {
    "annee": 2024,
    "note": 4.9,
    "prix": 16800,
    "disponibilite": "En stock"
  },
  "images": ["jurassic_1.jpg", "jurassic_2.jpg"]
}
```

```json
{
  "nom": "Elvira's House of Horrors Blood Red Kiss Edition",
  "marque_id": "66742cb4688d731b1e308bc7",
  "caracteristiques": {
    "annee": 2024,
    "note": 4.8,
    "prix": 16800,
    "disponibilite": "En stock"
  },
  "images": ["elvira_1.jpg", "elvira_2.jpg"]
}
```

```json
{
  "nom": "Star Wars Pro",
  "marque_id": "66742ca8688d731b1e308bc3",
  "caracteristiques": {
    "annee": 2023,
    "note": 4.6,
    "prix": 15000,
    "disponibilite": "En stock"
  },
  "images": ["star_wars_pro_1.jpg", "star_wars_pro_2.jpg"]
}
```

Les images seront des url.

### Justification des choix de modélisation

### Marque

Tout d'abord, j'ai choisi de créer un modèle **`Marque`** pour stocker l'ensemble des marques avec les données importantes. Le **nom** est obligatoire, et pour ne pas avoir qu'un seul champ, j'ai ajouté **pays** et **fondée_en**. J'aurais aussi pu ajouter un champ **logo** comme dans le screenshot.

### Flipper

J'ai aussi créé un modèle **`Flipper`**, dans lequel il y a le **nom** car c'est important à mon sens. J'ai ajouté cette fois une collection **d'images**, et pour organiser **année**, **note**, **prix**, et **disponibilité**, j'ai rangé le tout dans un modèle que j'ai nommé **caractéristiques**. Je me suis permis de créer ce modèle car les caractéristiques sont propres au flipper, donc pas besoin d'externaliser les caractéristiques.

### Copie des données

**Marque**

**GET → `localhost:3000/api/marques`**

![Untitled](MongoDb%20f3e6e346a54c4ecca6c1540aaeaa7415/Untitled.png)

**Flipper**

**GET** → **`localhost:3000/api/flippers`**

![Untitled](MongoDb%20f3e6e346a54c4ecca6c1540aaeaa7415/Untitled%201.png)
