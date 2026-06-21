# Pagina 2 Papierplan - Projectopzet / Scope

Status: concept v1 voor panelcontrole  
Fase: planfase, geen bouw  
Eigenaar formulier: projectleider of werkvoorbereider  
Expertinput: calculator  
Controllerregel: pagina 2 is een scope-register, geen begroting.

## 1. Hoofddoel

Pagina 2 legt vast wat er waarschijnlijk moet gebeuren, waar dat gebeurt, hoeveel het betreft, welke eenheid hoort bij de hoeveelheid en hoe betrouwbaar de informatie is.

De pagina beantwoordt zes vragen:

1. Welke werkzaamheden horen bij de aanvraag?
2. Waar zitten deze werkzaamheden?
3. Welke hoeveelheid hoort erbij?
4. Welke eenheid hoort erbij?
5. Waar komt de informatie vandaan?
6. Moet dit nog worden gecontroleerd bij opname?

## 2. Besluit aan einde van pagina

| Besluit | Betekenis |
|---|---|
| Naar opname locatie | Scope is voldoende om buiten te controleren. |
| Naar offerteaanvraag onderaannemer | Scope is voldoende duidelijk voor gerichte uitvraag. |
| Eerst scope aanvullen | Hoeveelheid, locatie, bron of aanname is nog te onzeker. |

## 3. Scope-register

Minimale regelstructuur:

```text
ID | Werkzaamheid | Hoeveelheid | Eenheid | Gevel/locatie | Bron | Betrouwbaarheid | Aannames | Onderaannemer | Controle nodig
```

## 4. Velden per scope-regel

| Veld | Nodig | Eigenaar | Verplicht | Naar pagina 3 | Waarom nodig voor besluit |
|---|---|---|---|---|---|
| Scope-regel ID | Ja | Systeem / werkvoorbereider | Verplicht | Ja | Nodig om opnamebevindingen later aan dezelfde regel te koppelen. |
| Werkcategorie | Ja | Werkvoorbereider / projectleider | Verplicht | Ja | Houdt werkzaamheden overzichtelijk per discipline. |
| Werkzaamheid | Ja | Werkvoorbereider / projectleider | Verplicht | Ja | Beschrijft concreet wat mogelijk moet gebeuren. |
| Hoeveelheid | Ja | Werkvoorbereider / calculator | Verplicht | Ja | Zonder hoeveelheid is begroten of uitvragen later niet betrouwbaar. |
| Eenheid | Ja | Werkvoorbereider / calculator | Verplicht | Ja | Maakt hoeveelheid bruikbaar voor calculatie en uitvraag. |
| Gevel / locatie | Ja | Werkvoorbereider / projectleider | Verplicht | Ja | Bepaalt waar opname en uitvoering zich op richten. |
| Bron | Ja | Werkvoorbereider / projectleider | Verplicht | Ja | Voorkomt dat aannames als feiten worden behandeld. |
| Betrouwbaarheid | Ja | Werkvoorbereider / calculator | Verplicht | Ja | Bepaalt of controle nodig is. |
| Aannames | Ja | Werkvoorbereider / calculator | Conditioneel | Ja | Verplicht bij afgeleide, geschatte of onzekere informatie. |
| Onderaannemer nodig | Ja | Werkvoorbereider / projectleider | Verplicht | Ja | Bepaalt of later een offerteaanvraag OA nodig is. |
| Controle nodig | Ja | Werkvoorbereider / projectleider | Verplicht | Ja | Bepaalt of pagina 3 opname nodig is. |
| Scope-status | Ja | Projectleider | Optioneel | Ja | Geeft aan of de regel concept, te controleren of akkoord is. |
| Opmerking scope | Ja | Werkvoorbereider / calculator | Optioneel | Ja | Alleen korte inhoudelijke nuance, geen prijsadvies. |

## 5. Betrouwbaarheid

| Code | Betekenis | Controle nodig |
|---|---|---|
| A | Gemeten | Nee, tenzij risicovol |
| B | Afgeleid uit stukken | Soms |
| C | Geschat | Ja |
| D | Aanname / onzeker | Ja |

Regel:

- Bij betrouwbaarheid `B`, `C` of `D` moet een aanname of bronuitleg zichtbaar zijn.
- Bij `C` of `D` staat controle nodig standaard op `Ja`.

## 6. Toegestane bronnen

| Bron | Voorbeeld |
|---|---|
| Klantvraag | Letterlijke aanvraag opdrachtgever |
| MJOP | Onderhoudsplan |
| Tekening | Gevelaanzicht, kozijnstaat, detail |
| Foto | Klachtfoto of bestaande situatie |
| Adviesrapport | Constructie, gevel, schilderwerk, asbest, flora/fauna |
| Opdrachtgever | Mondelinge of schriftelijke informatie |
| Eerdere offerte | Historische prijs/scope, alleen als bron voor scope |
| Inschatting | Alleen gebruiken met lage betrouwbaarheid |

## 7. Onderaannemer nodig

| Keuze | Betekenis |
|---|---|
| Ja | Waarschijnlijk externe expertise of prijs nodig. |
| Nee | Kan intern of later zonder OA-uitvraag worden verwerkt. |
| Twijfel | Projectleider of werkvoorbereider moet dit bepalen. |

Nog niet opnemen:

- naam onderaannemer;
- offertebedragen;
- prijsvergelijking;
- definitieve leverancierskeuze.

## 8. Output naar pagina 3

| Informatie | Naar pagina 3 | Gebruik in opname |
|---|---|---|
| Scope-regel ID | Ja | Koppeling tussen scope en opnamebevinding. |
| Werkzaamheid | Ja | Wat buiten gecontroleerd moet worden. |
| Hoeveelheid | Ja | Te controleren of te meten. |
| Eenheid | Ja | Meetwijze. |
| Gevel / locatie | Ja | Waar opname moet kijken. |
| Bron | Ja | Ter controle of bron klopt. |
| Betrouwbaarheid | Ja | Prioriteit voor controle. |
| Aannames | Ja | Specifiek toetsen buiten. |
| Controle nodig | Ja | Bepaalt opnamefocus. |
| Onderaannemer nodig | Ja | Kan na opname naar uitvraag. |

## 9. Niet op pagina 2

Pagina 2 mag bewust niet bevatten:

- eenheidsprijzen;
- totaalbedragen;
- arbeidsnormen;
- productienormen;
- opslagen;
- marge;
- risicoreservering;
- onderaannemersoffertes;
- leveranciersselectie;
- uitvoeringsplanning;
- interne normtijden;
- verwachte aanneemsom;
- doelstellingbegroting.

## 10. Compactheidsregel

Pagina 2 blijft compact door elke werkzaamheid als regel in een scope-register te behandelen. Details komen alleen open als een regel onzeker, risicovol of te controleren is.

## 11. Acceptatiecriteria pagina 2

Pagina 2 is op papier akkoord als:

- elke scope-regel een ID heeft;
- elke scope-regel werkzaamheid, hoeveelheid, eenheid, locatie, bron en betrouwbaarheid heeft;
- onzekere regels zichtbaar blijven als onzeker;
- controle nodig duidelijk is;
- er nog geen prijzen of begrotingsinformatie in staan;
- pagina 3 exact weet wat buiten gecontroleerd moet worden.

## 12. Panelvragen voor pagina 2

| Rol | Vraag |
|---|---|
| Werkvoorbereider | Kun jij hiermee een opname voorbereiden en later een uitvraag maken? |
| Calculator | Is dit genoeg om later te begroten zonder nu al prijzen in te vullen? |
| Projectleider | Kun jij hiermee scopebesluiten nemen en onzekerheden sturen? |
| Directie / CEO | Is dit compact genoeg om gebruikt te worden zonder scopeverlies? |
| Gebruiker | Is dit herkenbaar als wat er echt gedaan moet worden? |
