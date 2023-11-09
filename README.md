# DHBW Automobile

## Gruppenmitglieder
- Magnus Blessmann   wi22157
- Alexander Gehring  wi
- Robin Kröll        wi
- Roman Sivirin      wi22107

## Localhostports
Der Docker, der aus der docker-compose.yml erstellt wird, belegt die folgenden Ports: 
- Frontend: [localhost:8080](http://localhost:8080)
- Backend: [localhost:8081/...](http://localhost:8081/)

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
>1. root
>2. html
>3. body
>4. header
>5. navbar
>6. main
>7. footer
>
>Die @media-Tags sind ebenfalls den einzelen Elementen zugeordnet.
>
>Die Unterseiten Impressum und Kontakt sind im Footer verortet.

>[!NOTE]
>## Test
