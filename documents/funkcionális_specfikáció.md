# Funkcionális specifikáció

### Jelenlegi helyzet leírása
A megrendelőnek már van rendelkezésre álló dinamikus oldala már több létező funkcióval:
- regisztrálási lehetőség az iskola hallgatói számára
- bejelentkezési lehetőség több beviteli mezővel
- bejelentkezési adatok tárolása
- órarend 
- szükség esetén tanárokkal való konzultáció belső chat funkcióval
- osztálynévsor

### Vágyálomrendszer leírása
- a weboldal minden oldaláról elérhető egy menüpont amin keresztül hozzáférhető az alkalmazás
- a menüpont egyértelműen mutatja, hogy a tanulmányokhoz nem kapcsolódóan, egy játékhoz vezet
- könnyű visszanavigálni az előző oldalra
- a játékhoz nem szükséges regisztráció
- ranglista létrehozása amely regisztrációval látható
- a ranglistában lévő adatok tárolása adatbázissal

### Jelenlegi üzleti folyamatok
- minden diák be tud lépni a bejelentkezési adatok megadásával
- az érzékeny adatokat titkosítva küldi az adatbázisnak, ami ellenőrzi hogy létezik-e a fiók, 
  ha igen akkor belépteti
- ha a fiók nem létezik akkor lehetőség van regisztrációra
- elfelejtett jelszó esetén egy visszaigazoló email küldése
- oldalon belüli chat funkció biztosítja a konzultáció lehetőségét 
  pedagógus-diák illetve diák-diák között
- a chat alkalmas képek és videók megosztására
- hírfolyam, amelyen keresztül iskolával kapcsolatos fontos információk megjeleníthetőek
- a feltöltött információk között lehet keresni
- pedagógus és adminisztrátori jogosultságokkal lehetséges a hírfolyamba való feltöltés

### Igényelt üzleti folyamatok modellje
- egy menüpontra kattintva megjelenik az alkalmazás
- az játék ezt követően egy gombra kattintva elindítható
- a játékos tudja regisztrálni az eredményét
- az alkalmazás oldalán egy vissza gomb segítségével visszaléphetünk a főoldalra

### Használati esetek
- a játékos kiválaszthatja a nehézségi szintet (könnyű, közepes, haladó)
- nehézségi szinttől függően változik a kártyák száma
- a játék végén a felhasználó lehetőséget kap hogy elmentse az eredményét
- minden nehézségi fokozatnak más ranglistája van
- az eredményt egy MySQL alapú adatbázisba menti a rendszer

### A rendszerre vonatkozó szabályok
- a web felület szabványos eszközökkel készül, mint html/css/javascript.
- a felhasználó adataira vonatkozó jogszabályok betartása kerülnek
- a fiatalkorúak számára megjeleníthető tartalom jelenik meg
- trágár és nem odaillő kifejezések kiszűrésre kerülnek

### Fogalomszótár
- Eredmény: a pontok alapján felvezetett érték a ranglistán
	- a név egy string
	- a tárolt pontszám egy egész szám
	- a játék időpontja
	- a nehézségi szint egy string