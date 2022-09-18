# Rendszerterv

### A rendszer célja
- A megrendelő számára elfogadható és jó minőségű alkalmazás, amely felhasználóbarát és könnyen kezelhető
- Megfelelő integrálódás a meglévő rendszerbe
- A bizalmas adatokat megfelelően kezelve adatbázisba menthetőek az eredmények, ahonnan vissza is lehet tölteni azokat
- Az alkalmazást bárki használhatja, az eredmény nem befolyásoló tényező
- A felhasználói szintek nem befolyásolják a játék működését
- Mindenki megtalálja a számára kihívást jelentő nehézségi szintet, ezzel maximalizálható a játék által nyújtott élmény

### Projekt terv
Csapatunkat három lelkes fiatal úriember alkotja. Természetesen mindenki egyformán kiveszi a részét a munkából. Fontosabb szerepkörök:
- Frontend
- Backend
- Adatbázis létrehozása

A megrendelővel megtárgyalt dolgok alapján fogjuk elvégezni az alkalmazás létrehozását. 

### Üzleti folyamatok modellje

A felhasználó az iskolai weboldalt megnyitva egy letisztult, rendezett felületet kap. A memóriajáték a fejlécen található menüpontból lesz elérhető.
Az alkalmazás egy új weboldalon fog megjelenni. Első lépésként a felhasználó megadja a nevét, kiválasztja a nehézségi szintet, 
majd a kezdés gombra kattintva elkezdheti a kört.

A játék menete:
- Nehézségi szinttől függően megjelenik a játéktér:
	- Könnyű: 4x4 kártya (4 sorban és 4 oszlopban jelennek meg)
	- Közepes: 4x6 kártya (4 sorban és 6 oszlopban jelennek meg)
	- Nehéz: 6x6 kártya (6 sorban és 6 oszlopban jelennek meg)

- Az oldal tetején elindul egy óra, ezen fog megjelenni az eltelt idő
- A játékos a kártyák felforgatását úgy idézi elő, hogy az általa kívánt kártyára kattint
- Felfordításkor a kártyán egy ábra látható, ami alapján felismerhető és párosítható
- Egyszerre két kártya lehet felfordított állapotban
- Amennyiben a két felfordított kártya nem alkot egy párt, a harmadik kártya kiválasztására az előző kettő visszaáll eredeti állapotába
- Ha a két kártya párt alkot, úgy azok eltűnnek a játéktérről
- A játék akkor ér véget, ha a játékos megtalálta az összes párt
- A játék végeztével az óra megáll és megjelenik a ranglista a regisztrált játékosok neveivel és pontjaival
![játékmenet ábra](./rendszerterv-játékmenet.png)

Pontrendszer:
A játékos pontjai az egységnyi idő alatt megtalált párok alapján kerülnek meghatározásra. Minél több időbe telik
egy pár megtalálása, annál kevesebb pontot kap a játékos. A párokért járó pontok additív tulajdonsággal bírnak.
A játék végére ezek összege fog adni egy végső pontszámot.

Pontok számítási módja:
> [nehézség szerint növekvő alapérték] - [játékban eltelt másodpercek egészre kerekítve]

### Funkcionális terv

### Követelmények
- K01 - Könnyen kezelhető weboldal, letisztult felhasználói felület
- K02 - A kártyákon szereplő képek gyermekek számára megfelelő tartalmúak
- K03 - A ranglistán szereplő adatok egy MySQL adatbázisban lesznek eltárolva.
- K04 - A felhasználó által megadott név ami a ranglistába kerül, felül lesz vizsgálva, nem odaillő kifejezések elkerülése végett.
      Ehhez egy txt fájlban összegyűjtött kifejezéseket tartalmazó dokumentumot használunk.
### Fizikai környezet
Az alkalmazás futtatására valamilyen böngészőre van szükség pl:
- Google Chrome
- Mozilla Firefox

Webre való fejlesztés miatt frontendre és backend részekre osztjuk a fejlesztési környezteket.
##### Frontend:
- Visual Studio Code
- Windows Notepad
- Notepad++

##### Backend:
- Node.js
- Visual Studio Code
- MySQL
### Absztrakt domain

### Adatbázis terv
Az oldal már tartalmaz adatbázist amelyben a bejelentkezési adatok vannak tárolva. Készülni fog hozzá egy tábla,
amely a ranglista adatait fogja tartalmazni. A ranglista tábla és a bejelentkezési adatok közötti kapcsolatot
a felhasználói ID fogja biztosítani.
### Tesztterv
A tesztelésre folyamatosan sor kerül a fejlesztés alatt, valamint annak befejeztével is. Törekszünk a hibamentességre.
