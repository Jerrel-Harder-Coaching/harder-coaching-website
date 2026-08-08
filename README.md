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

## Structuur

```
src/
  components/    # Elke sectie van de site is een los component
  App.jsx        # Zet alle secties in volgorde
  index.css      # Alle styling (1-op-1 overgenomen uit de originele CSS)
  main.jsx       # React entry point
public/images/   # Hier komen de afbeeldingen
```
