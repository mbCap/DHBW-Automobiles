# DHBW Automobile

## Gruppenmitglieder
- Magnus Blessmann   wi22157
- Alexander Gehring  wi22099
- Robin Kröll        wi22125
- Roman Sivirin      wi22107

## Localhostport
Der Docker, der aus der docker-compose.yml erstellt wird, belegt den folgenden Port: 
- [localhost:8080](http://localhost:8080)


## Struktur
- Fronted
  - script
    - index.html
      - fulllist.js
      - searchbtn.js
      - fillfilter.js
  - docker-compose.yml
  - README.md
   
- Backend
  - dbconnection.php
  - convert.php

  - xml
      - automobiles.xml
      - automobiles.xsd


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
