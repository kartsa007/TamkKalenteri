# TamkKalenteri

TamkKalenterilla voi tarkastaa Tamkin tilojen varaustilanteet.

Tämä FrontEndMaster-kurssin Advanced Javascript -osuuden harjoitustyö.
Tässä tehtävässä harjoitellaan REST-rajapinnan käyttöä.

Ohjelma koostuu käyttöliittymästä, joka 
lähettää ajax-pyynnöt, ja taustaohjelmasta, joka välittää ajax-pyynnöt Tamkin palvelimelle.

## Näin pääset alkuun

Hae tiedostot Githubista:

git clone https://github.com/kartsa007/TamkKalenteri.git



### Tarvittavat ohjelmat

git, node ja npm ohjelmien asentamiseen ja ajamiseen.

### Asennus

Hae tiedostot Githubista:

1) git clone https://github.com/kartsa007/TamkKalenteri.git

Mene työhakemistoon ja asenna riippuvuudet:

2) cd TamkKalenteri
3) npm install

Kokoa javascriptit

4) webpack

Ja käynnistä proxy-serveri

5) node proxy.js \<apiKey>

## Kuvaus tiedostoista
app-hakemistossa selaimeen liittyvät javascriptit.

Marssijärjestys:

index.js,
alustetaan datepicker (alempana lisää) ja kysellään rakennukset kun
sivu muuten on ladattu

buildings.js,
hakee rakennukset fetchillä ja tekee ekan selectin, jolla
valitaan rakennus.

rooms.js,
tekee seuraavan fetchin kun building id on edellisestä selectistä
valittu. Tekee oman select-tagin rakennuksen varattavista tiloista.

datepicker.js,
valitaan näytettävä viikko, JQueryn valmis datepickeri, josta laskeskellaan
viikon alkua ja loppua.

reservations.js,
tekee fetch kyseisen viikon varauksista valittuun luokkahuoneeseen.

storage.js,
yllä mainittujen valintojen talletuspaikka. Angular-termistön mukaan service.
Täällä setterit liipaisevat kalenterin päivityksen.

calendar.js,
kalenterin ja varausten tulostus. Tässä käytössä canvas ja siihen piirtely.

proxy.js,
ja sitten vielä node expressillä tehty proxy tai backend, hoitelee cors ongelmat ja piilottaa apiKeyn

Käynnistys:

node proxy.js apikey.
Käynnistää porttiin 3000 serverin.

Eli kun olen sanonut tuon node loitsun niin selaimella:
http://localhost:3000
antaa web-näkymän kalenterivarausten tutkimiseen.

## Tekijä

Kari Heinonen

## Lisenssi

MIT License
