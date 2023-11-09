# DHBW Automobile

## Gruppenmitglieder
- Magnus Blessmann   wi22157
- Alexander Gehring  wi
- Robin Kröll        wi
- Roman Sivirin      wi22107

## Localhostports
Der Docker, der aus der docker-compose.yml erstellt wird, belegt den folgenden Port: 
- [localhost:8080](http://localhost:8080)


## Struktur
- Fronted
  - index.php
  - details.php
  - kontakt.php
  - impressum.php
  - docker-compose.yml
  - README.md
    - /content
      - Websitelemente
      - [...]
    - /pictures
      - statische Bilder
      - [...]
    - /script
      - einzelne JavaScripts
      - [...]
    - /stlye
      - style.css
- Backend
  - createFilterArrays.php
  - filter.php
  - createFullList.php
  - createSearchTerm.php
  - detailsBackend.php
    - /pictures
      - Autobilder & Werbebanner
      - [...]
    - /xml
      - autos.xml
      - autos.xsd


>### Aufbau der CSS-Datei
>Die CSS-Datei ist nach der folgenden Struktur aufgebaut:
>1. General css (Reset code)
>2. Top-area
>3. Welcome-hero
>4. Model-search
>5. Service
>6. New-cars
>7. Featured-cars
>8. Clients say
>9. Brand
>10. Blog
>11. Contact



>Die Unterseiten DHBW Stuttgart Website und DHBW Stuttgart Moodle sind im Footer lokalisiert.

