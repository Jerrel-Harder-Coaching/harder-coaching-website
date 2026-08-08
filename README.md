# Harder Coaching — React versie

React (Vite) versie van de Harder Coaching website, klaar om te hosten op GitHub Pages.

## 1. Afbeeldingen toevoegen

Zet je afbeeldingen in `public/images/` met exact deze bestandsnamen (dit zijn dezelfde namen als in de originele HTML):

- `Hero.webp`
- `Berg_rood_Harder+Coaching_Wit.png` (logo, header)
- `Berg_rood_Berg_Rood.png` (eyebrow-icoontje, lichte secties)
- `Berg_rood_Berg_Wit.png` (eyebrow-icoontje, donkere secties + achtergrond final CTA + video-badge)
- `Fotoshoot.webp`
- `RicoVerhoeven.webp`
- `StartLauraTeamMeet.webp`
- `PowerliftWedstrijd.webp`
- `FotoshootArcher.webp`
- `JayWhey.webp`
- `Henselmans.webp`
- `StartKVK.webp`
- `Berg_rood_Harder_Los_Wit.png` (footer logo)

## 2. Lokaal draaien

```bash
npm install
npm run dev
```

Opent op `http://localhost:5173`.

## 3. Hosten op GitHub Pages

**Stap 1 — repo aanmaken en pushen**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<jouw-gebruikersnaam>/<repo-naam>.git
git push -u origin main
```

**Stap 2 — `base` in `vite.config.js` aanpassen**

Open `vite.config.js` en zet `base` op `/<repo-naam>/` (met slashes ervoor en erna), tenzij je een custom domain gebruikt — dan blijft het `/`.

**Stap 3 — GitHub Pages inschakelen**

Ga naar je repo op GitHub → *Settings* → *Pages* → bij "Build and deployment" kies je **Source: GitHub Actions**.

**Stap 4 — klaar**

Bij elke push naar `main` bouwt de meegeleverde workflow (`.github/workflows/deploy.yml`) de site automatisch en publiceert hem. Na de eerste run vind je de live URL bij *Settings → Pages*, meestal:

```
https://<jouw-gebruikersnaam>.github.io/<repo-naam>/
```

## Structuur

```
src/
  components/    # Elke sectie van de site is een los component
  App.jsx        # Zet alle secties in volgorde
  index.css      # Alle styling (1-op-1 overgenomen uit de originele CSS)
  main.jsx       # React entry point
public/images/   # Hier komen jouw afbeeldingen
```
