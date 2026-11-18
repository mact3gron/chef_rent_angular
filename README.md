KülkerGimnázium 

Beadandó Házi feladat!

ChefRent – Szakácsbérlő alkalmazás
Angular 22-ben készült, reszponzív gyakorlóprojekt, amely egy Firebase REST API-ról tölti le a bérelhető szakácsok adatait, és Bootstrap-kártyákon jeleníti meg őket.
Funkciók
- Szakácsok lekérése Firebase Realtime Database-ből HTTP GET kéréssel
- Kép, név, konyhatípus, leírás, alapdíj és napidíj megjelenítése
- Reszponzív kártyák (mobilon 1, közepes kijelzőn 2, nagy kijelzőn 3 oszlop)
- + Bérel gomb: a kiválasztott szakács nevét felugró üzenetben jeleníti meg
- Betöltési állapot és hibaüzenet kezelése
Felhasznált technológiák
Angular 22 · TypeScript · HTML · CSS · Bootstrap 5 · Angular HttpClient · Signals · Firebase REST API
Futtatás helyben
npm install
ng serve -o
Az alkalmazás alapértelmezetten a http://localhost:4200 címen érhető el.
Adatforrás
Firebase – chefs.json
Megjegyzés: A „+ Bérel” gomb jelenleg csak visszajelzést ad; nem rögzít valódi foglalást.

Oktatási célú Angular-gyakorlófeladat.