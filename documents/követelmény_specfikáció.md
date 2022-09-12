# Követelmény specifikáció

### Jelenlegi helyzet leírása
Iskolánk honlapja minden alap (bejelentkezés, órarend, tanári lista, osztálynévsor) funkcióval rendelkezik, viszont a konkurens iskolák honlapja jobban látogatott és jobb hatást kelt a gyerekeknek.

### Vágyálomrendszer leírása
Szeretnénk honlapunkra, egszerűen hozzáférhető, kisgyerekek számára letisztult és használható valamint fogyasztásukra megfelelő tartalommal rendelkező memória játékot.

### Jelenlegi üzleti folyamatok
- bejelentkezés saját fiókkal => elérhető az órarend és az online tananyagok => különböző hozzáférési (tanár, diák, adminisztrátor, vendég) szintek más funkciókat érhetnek el
- online konzultáció => órarendben egyeztethető időpont => chat funkciókon keresztül lebonyolítható a konzultáció
- hírek megosztása a hírfolyamon => minden felhasználó megtekintheti => magasabb szintű felhasználók módosíthatják, moderálhatják a hírfolyamot

### Igényelt üzleti folyamatok modellje
- menüpont megnyitása => A felhasználó hozzá fér az alkaplmazásokhoz
- alkalmazáson belül nehézség kiválasztása => játékban eredmény elérése => elért eredmény mentése 
=> megjelenítése a ranglistán elért pontszám szerint csökkenő sorrendben

### A rendszerre vonatkozó szabályok
- a web felület szabványos eszközökkel készüljön, mint html/css/javascript.
- a felhasználó adataira vonatkozó jogszabályok betartása
- a fiatalkorúak számára megjeleníthető tartalom jelenhet csak meg
- trágár és nem odaillő kifejezések kiszűrése

### Követelménylista
- a felhasználói felület legyen könnyen kezelhető
- a kártyákon található tartalom legyen fiatalabb gyermekek számára is érdekes és elfogadható
- a ranglistán szereplő eredmények tárolása adatbázisban
- felhasználói által bevitt adatok felülvizsgálata

### Fogalomszótár
- kártya: a játékon belüli, képeket tartalmazó felfordítható és párosítandó mező
- eredmény: a felhasználó neve és megoldásának időpontja,
  illetve egy pontszám, ami az időből számítható ki