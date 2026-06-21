# 02 - Toetsing scopevelden pagina 2

Status: concept voor panelcontrole  
Fase: papierplan, geen bouw  
Hoofdregel: pagina 2 is scope. Geen begroting, geen opnameverslag, geen doelstellingbegroting.

## Doel pagina 2

Pagina 2 maakt van de aanvraag en de eerste indruk uit pagina 1 een bruikbare scope-regel. Een scope-regel moet antwoord geven op:

1. Wat moeten we waarschijnlijk doen?
2. Waar gebeurt dit?
3. Hoeveel is het ongeveer of zeker?
4. Welke eenheid hoort daarbij?
5. Waar komt deze informatie vandaan?
6. Hoe betrouwbaar is dit?
7. Moet dit buiten worden gecontroleerd?
8. Is later een onderaannemer nodig?

## Besluit aan einde pagina 2

| Besluit | Betekenis | Mag door als |
|---|---|---|
| Naar opname | Scope is duidelijk genoeg om buiten te controleren. | Locatie, hoeveelheid/eendheid en controlepunten zijn bekend. |
| Naar offerteaanvraag later | Scope is duidelijk genoeg voor latere uitvraag. | Werk, hoeveelheid, eenheid en specificatie zijn voldoende concreet. |
| Eerst scope aanvullen | Er ontbreekt nog informatie. | Bron, locatie, hoeveelheid of betrouwbaarheid is onvoldoende. |

## Minimale scope-regel

| Veld | Besluit | Verplicht | Eigenaar | Naar pagina 3 | Waarom nodig |
|---|---|---|---|---|---|
| Scope-ID | Houden | Ja | Systeem | Ja | Koppeling tussen scope, opname en vervolg. |
| Werkcategorie | Houden | Ja | Werkvoorbereider | Ja | Ordening per discipline. |
| Werkzaamheid | Houden | Ja | Werkvoorbereider / projectleider | Ja | Concreet werk dat beoordeeld wordt. |
| Korte omschrijving | Houden | Ja | Werkvoorbereider | Ja | Maakt duidelijk wat precies bedoeld wordt. |
| Hoeveelheid | Houden | Ja, maar mag onbekend met actie | Calculator / werkvoorbereider | Ja | Nodig voor opname, uitvraag en latere begroting. |
| Eenheid | Houden | Ja | Calculator | Ja | Maakt hoeveelheid bruikbaar. |
| Gevel / locatie | Houden | Ja | Werkvoorbereider | Ja | Bepaalt waar opname of uitvoering kijkt. |
| Bron gegevens | Houden | Ja | Werkvoorbereider | Ja | Scheidt feit van aanname. |
| Betrouwbaarheid | Houden | Ja | Calculator / werkvoorbereider | Ja | Bepaalt controlebehoefte. |
| Controle nodig bij opname | Houden | Ja | Werkvoorbereider / projectleider | Ja | Stuurt pagina 3. |
| Onderaannemer uitvragen | Houden | Ja | Projectleider / werkvoorbereider | Later ook pagina 4 | Bepaalt latere inkooproute. |
| Type post | Houden, maar compact | Ja | Calculator / projectleider | Nee, tenzij risico | Geeft aan of iets vast, stelpost, optie of uitgesloten is. |
| Risico / aanname | Houden conditioneel | Alleen bij onzekerheid | Werkvoorbereider / calculator | Ja | Voorkomt schijnzekerheid. |
| Scope-status | Houden | Ja | Projectleider | Ja | Laat zien of regel concept, aanvulling nodig, gereed of vervallen is. |

## Keuzewaarden

### Betrouwbaarheid

| Waarde | Betekenis | Default vervolg |
|---|---|---|
| Gemeten | Hoeveelheid is gemeten of hard overgenomen uit betrouwbare bron. | Alleen controleren bij risico. |
| Uit stukken | Afgeleid uit MJOP, tekening, rapport of foto. | Controleren indien belangrijk of onzeker. |
| Geschat | Redelijke inschatting, nog niet hard. | Opname nodig. |
| Aanname | Nog onzeker of voorlopig. | Opname of aanvullende bron nodig. |

### Controle nodig bij opname

| Waarde | Betekenis |
|---|---|
| Ja | Buiten controleren of meten. |
| Nee | Niet nodig, bron is voldoende hard. |
| Alleen bij twijfel | Alleen controleren als dit tijdens opname logisch is. |

### Onderaannemer uitvragen

| Waarde | Betekenis |
|---|---|
| Ja | Later naar offerteaanvraag onderaannemer. |
| Nee | Geen aparte OA-uitvraag nodig. |
| Twijfel | Projectleider beslist later. |

### Type post

| Waarde | Betekenis |
|---|---|
| Vast | Hoort waarschijnlijk in vaste scope. |
| Stelpost | Wel meenemen, maar hoeveelheid/inhoud nog onzeker. |
| Verrekenbaar | Later op werkelijke hoeveelheid afrekenen. |
| Optie | Alleen meenemen als opdrachtgever kiest. |
| Uitgesloten | Bewust niet meenemen. |

### Scope-status

| Waarde | Betekenis |
|---|---|
| Concept | Eerste scope-regel, nog niet definitief. |
| Aanvulling nodig | Er ontbreekt informatie. |
| Gereed voor opname | Genoeg om buiten te controleren. |
| Gereed voor uitvraag later | Genoeg om later richting OA/offerte te gaan. |
| Vervallen | Bewust niet meer meenemen. |

## Compacte opzet voor gebruiker

Aanbevolen schermopzet:

| Kolom | Inhoud |
|---|---|
| Links | Werkcategorie en werkzaamheid. |
| Midden | Hoeveelheid, eenheid, locatie/gevel. |
| Rechts | Betrouwbaarheid, controle nodig, status. |
| Openklapregel | Bron, korte omschrijving, aanname/risico, OA nodig, type post. |

Regel: standaard alleen de samenvatting tonen. Details pas openklappen als de gebruiker iets moet aanvullen of controleren.

## Wat pagina 2 overneemt uit pagina 1

| Uit pagina 1 | Hoe tonen op pagina 2 |
|---|---|
| Werkcategorie | Voorgeselecteerd als scopegroep. |
| Werkzaamheid / onderwerp | Als concept-scope-regel. |
| Locatie/gevel indien bekend | Voorlopig gevuld, met betrouwbaarheid. |
| Hoeveelheid indien bekend | Voorlopig gevuld, niet als harde waarheid. |
| Bron gegevens | Overgenomen als bron. |
| Korte conclusie stukken | Beschikbaar als toelichting bij bron. |
| Open acties | Tonen als blokkade of waarschuwing. |

## Wat niet opnieuw gevraagd mag worden

| Niet opnieuw vragen | Oplossing |
|---|---|
| Projectnaam | Tonen uit pagina 1. |
| WO / aanvraagnummer | Tonen uit pagina 1. |
| Opdrachtgever | Tonen uit pagina 1. |
| Letterlijke klantvraag | Tonen als context, niet opnieuw invullen. |
| Stukkenstatus | Tonen als bronstatus, niet opnieuw administreren. |

## Wat bewust niet op pagina 2 hoort

| Schrappen uit pagina 2 | Reden |
|---|---|
| Eenheidsprijzen | Begroting komt later. |
| Totaalbedragen | Begroting/offerte komt later. |
| Opslagen, marge, AK/W&R | Doelstelling/begroting later. |
| Naam onderaannemer | Uitvraag komt later. |
| Offertevergelijking | Pagina 4/5, niet scope. |
| Uitvoeringsplanning | Later, na opdracht. |
| Volledig opnameverslag | Pagina 3. |
| Doelstellingbegroting | Pas na opdracht. |

## Paneltoets pagina 2

| Rol | Kritische vraag | Voorlopig oordeel |
|---|---|---|
| Werkvoorbereider | Kan ik hiermee een opname voorbereiden? | Ja, mits locatie/gevel en controle nodig zichtbaar zijn. |
| Calculator | Kan ik hier later uit begroten zonder nu prijzen te vullen? | Ja, mits hoeveelheid, eenheid en betrouwbaarheid verplicht zijn. |
| Projectleider | Kan ik zien wat scope is en wat nog onzeker is? | Ja, mits scope-status en risico/aanname zichtbaar zijn. |
| Directie / CEO | Is dit compact genoeg? | Alleen als details standaard dicht blijven. |
| Controller | Voorkomt dit dubbele invoer? | Ja, als pagina 1-data overgenomen wordt en niet opnieuw gevraagd. |

## Controlleradvies

Pagina 2 is inhoudelijk goed te bouwen als scope-register, maar nog niet bouwen voordat pagina 2 overdracht naar pagina 3 en panelakkoord zijn vastgelegd.

Volgende papierstap: overdracht pagina 2 naar pagina 3 exact maken.
