# Go/no-go pakket pagina 1 t/m 3

Status: concept voor gezamenlijke panelcontrole  
Fase: papierplan, geen bouw  
Hoofdregel: verzamelen en ordenen. Niet bouwen zonder papierakkoord.

## Doel van dit pakket

Dit document bundelt de status van de eerste drie pagina's:

1. Aanvraaganalyse opdrachtgever
2. Projectopzet / scope
3. Opname locatie

Het doel is bepalen of deze drie pagina's op papier logisch op elkaar aansluiten voordat er gebouwd wordt.

## Samenvatting controller

| Pagina | Doel | Status papier | Bouwstatus |
|---|---|---|---|
| 1. Aanvraaganalyse opdrachtgever | Klantvraag, stukken, eerste conclusie en open acties vastleggen. | Inhoudelijk uitgewerkt, praktijkakkoord nog invullen. | Geen bouw-Go |
| 2. Projectopzet / scope | Scope-regels maken met hoeveelheid, eenheid, locatie, bron en betrouwbaarheid. | Scopevelden uitgewerkt, panelcontrole nog nodig. | Geen bouw-Go |
| 3. Opname locatie | Scope uit pagina 2 buiten controleren en afwijkingen terugmelden. | Opnamevelden en schraplijst uitgewerkt, panelcontrole nog nodig. | Geen bouw-Go |

## Hoofdlogica proces

| Stap | Input | Bewerking | Output |
|---|---|---|---|
| Pagina 1 | Aanvraag klant + aangeleverde stukken | Eerste beoordeling | Scopekandidaten, bronstatus, open acties |
| Pagina 2 | Gegevens uit pagina 1 | Scope-register maken | Scope-regels met hoeveelheid/eendheid/locatie/bron/betrouwbaarheid |
| Pagina 3 | Scope-regels uit pagina 2 | Buiten controleren | Akkoord, afwijking, voorbehoud of terug naar scope |

## Belangrijkste besluiten die nu vastliggen

| Besluit | Status |
|---|---|
| Pagina 1 blijft aanvraaganalyse, geen dossierbak. | Vastgelegd |
| Pagina 2 is scope-register, geen begroting. | Vastgelegd |
| Pagina 3 is opnamecontrole, geen nieuwe scope. | Vastgelegd |
| Doelstellingbegroting komt pas na opdracht. | Vastgelegd |
| Geen prijzen in pagina 1 t/m 3. | Vastgelegd |
| Geen dubbele invoer tussen pagina's. | Vastgelegd |
| Gegevens lopen 1 -> 2 -> 3 door. | Vastgelegd |

## Documenten in dit pakket

### Pagina 1

| Document | Functie | Status |
|---|---|---|
| `01-aanvraaganalyse-papierplan.md` | Basisplan pagina 1 | Conceptbasis |
| `01A-01B-TOETSING-PAGINA-1.md` | Basisgegevens en klantvraag | Gereed |
| `01C-01D-TOETSING-PAGINA-1.md` | Werkonderdelen en stukken | Gereed |
| `01E-01F-TOETSING-PAGINA-1.md` | Conclusie en aanvullend nodig | Gereed |
| `01-SCHRAPLIJST-PAGINA-1.md` | Wat niet op pagina 1 hoort | Gereed |
| `01-DEFINITIEVE-VELDENTABEL-PAGINA-1.md` | Definitieve veldkeuze | Gereed |
| `01-OVERDRACHT-NAAR-PAGINA-2.md` | Doorstroom naar pagina 2 | Gereed |
| `01-PANELVRAGEN-PAGINA-1.md` | Panelvragen | Gereed |
| `01-PRAKTIJKKAKKOORD-PAGINA-1.md` | Praktijkcheck | Voorbereid, nog invullen |

### Pagina 2

| Document | Functie | Status |
|---|---|---|
| `02-projectopzet-scope-papierplan.md` | Basisplan pagina 2 | Conceptbasis |
| `02-TOETSING-SCOPEVELDEN.md` | Definitie scopevelden | Gereed voor panelcontrole |
| `02-OVERDRACHT-NAAR-PAGINA-3.md` | Doorstroom naar pagina 3 | Gereed voor panelcontrole |

### Pagina 3

| Document | Functie | Status |
|---|---|---|
| `03-opname-locatie-papierplan.md` | Basisplan pagina 3 | Conceptbasis |
| `03-TOETSING-OPNAMEVELDEN.md` | Definitie opnamevelden | Gereed voor panelcontrole |
| `03-SCHRAPLIJST-PAGINA-3.md` | Wat niet op pagina 3 hoort | Gereed voor panelcontrole |

## Panelvragen totaal

| Rol | Vraag | Moet beantwoorden |
|---|---|---|
| Werkvoorbereider | Kan pagina 1 genoeg input geven om pagina 2 scope te maken? | Ja / aanpassen / nee |
| Werkvoorbereider | Kan pagina 2 genoeg richting geven voor pagina 3 opname? | Ja / aanpassen / nee |
| Werkvoorbereider | Is pagina 3 uitvoerbaar buiten zonder te veel administratie? | Ja / aanpassen / nee |
| Calculator | Zijn hoeveelheid, eenheid, bron en betrouwbaarheid voldoende voor latere begroting? | Ja / aanpassen / nee |
| Calculator | Worden prijzen terecht buiten pagina 1 t/m 3 gehouden? | Ja / aanpassen / nee |
| Projectleider | Zijn de beslismomenten per pagina duidelijk? | Ja / aanpassen / nee |
| Projectleider | Is duidelijk wanneer iets terug moet naar vorige pagina? | Ja / aanpassen / nee |
| Directie / CEO | Is het compact genoeg voor dagelijks gebruik? | Ja / aanpassen / nee |
| Directie / CEO | Levert het proces stuurinformatie zonder overadministratie? | Ja / aanpassen / nee |
| Gebruiker | Herken je dit als praktische werkvolgorde? | Ja / aanpassen / nee |

## Open besluiten voor akkoord

| Nr. | Besluit | Eigenaar | Status |
|---:|---|---|---|
| 1 | Pagina 1 praktijkakkoord invullen | Gebruiker / projectleider / controller | Open |
| 2 | Pagina 2 panelakkoord geven | Werkvoorbereider / calculator / projectleider / directie | Open |
| 3 | Pagina 3 panelakkoord geven | Werkvoorbereider / calculator / projectleider / directie | Open |
| 4 | Bepalen welke documenten naar GitHub mogen | Gebruiker / controller | Open |
| 5 | Bepalen of pagina 1 naar bouwvoorbereiding mag | Gebruiker / projectmanager / controller | Open |

## Risico's

| Risico | Beheersmaatregel |
|---|---|
| Te vroeg bouwen | Bouw-Go blijft geblokkeerd tot akkoord. |
| Pagina 2 wordt begroting | Prijzen en bedragen expliciet uitgesloten. |
| Pagina 3 wordt nieuw scopeformulier | Nieuwe scope gaat terug naar pagina 2. |
| Formulieren worden te lang | Alleen kernvelden, details openklappen. |
| Dubbele invoer | Pagina 1-data tonen in pagina 2; pagina 2-data tonen in pagina 3. |
| Oude Drive/Temp-versies lekken terug | Hoofdmap blijft leidend. |

## Voorstel go/no-go

Controlleradvies:

- Pagina 1 t/m 3 zijn inhoudelijk voldoende uitgewerkt voor panelcontrole.
- Nog geen bouw-Go.
- Eerst panel/praktijkakkoord vastleggen.
- Daarna pas kleine bouwvoorbereiding starten met pagina 1.

## Beslissing gevraagd

Kies een van deze drie opties:

| Optie | Betekenis |
|---|---|
| Akkoord voor panelronde | De documenten worden als basis voor beoordeling gebruikt. |
| Akkoord met kleine correcties | Eerst kleine tekst/structuurcorrecties verwerken. |
| Niet akkoord | Terug naar papierplan voor herziening. |

## Status

Go/no-go pakket pagina 1 t/m 3 is gereed voor beoordeling. Geen bouw-Go.
