# 02 - Overdracht pagina 2 naar pagina 3

Status: concept voor panelcontrole  
Fase: papierplan, geen bouw  
Hoofdregel: pagina 3 controleert de scope uit pagina 2. Pagina 3 maakt geen nieuwe scope en geen begroting.

## Doel

Vastleggen welke gegevens uit pagina 2 automatisch of inhoudelijk doorgaan naar pagina 3 Opname locatie.

Pagina 2 bepaalt wat waarschijnlijk moet gebeuren. Pagina 3 controleert buiten of dat klopt.

## Overdracht per scope-regel

| Gegeven uit pagina 2 | Naar pagina 3 | Gebruik in pagina 3 | Dubbele invoer toegestaan? |
|---|---|---|---|
| Scope-ID | Ja | Koppeling opnamebevinding aan scope-regel. | Nee |
| Werkcategorie | Ja | Groepering opnamepunten. | Nee |
| Werkzaamheid | Ja | Wat buiten gecontroleerd wordt. | Nee |
| Korte omschrijving | Ja | Waar de opnemer op moet letten. | Nee |
| Hoeveelheid | Ja | Te controleren of te meten hoeveelheid. | Nee, alleen afwijking invullen |
| Eenheid | Ja | Meetwijze bij opname. | Nee, alleen corrigeren bij afwijking |
| Gevel / locatie | Ja | Waar de opnemer moet kijken. | Nee, alleen afwijking invullen |
| Bron gegevens | Ja | Controleren of bron overeenkomt met werkelijkheid. | Nee |
| Betrouwbaarheid | Ja | Bepaalt prioriteit van controle. | Nee |
| Controle nodig bij opname | Ja | Bepaalt of regel actief in opname staat. | Nee |
| Onderaannemer uitvragen | Ja | Signaal voor latere uitvraag, niet beslissen in opname. | Nee |
| Type post | Ja, als context | Helpt beoordelen of onzekerheid/stelpost aanwezig is. | Nee |
| Risico / aanname | Ja | Specifiek toetsen buiten. | Nee |
| Scope-status | Ja | Laat zien of regel concept/gereed/aanvulling nodig is. | Nee |

## Wat pagina 3 zelf toevoegt

| Nieuw gegeven pagina 3 | Waarom nodig | Terug naar pagina 2? |
|---|---|---|
| Datum opname | Context van controle. | Nee |
| Opgenomen door | Eigenaarschap opname. | Nee |
| Scope buiten herkenbaar | Basiscontrole of scope klopt. | Ja bij nee/deels |
| Werkgebied klopt | Controle of locatie/gevel klopt. | Ja bij afwijking |
| Gemeten hoeveelheid | Correctie of bevestiging hoeveelheid. | Ja |
| Eenheid opname | Correctie meetwijze indien nodig. | Ja bij afwijking |
| Staat / conditie | Praktische beoordeling buiten. | Ja als scope-impact |
| Afwijking t.o.v. scope | Kerninput terug naar pagina 2. | Ja |
| Foto overzicht/detail | Bewijs bij bevinding. | Ja als afwijking of risico |
| Bereikbaarheid/logistiek risico | Uitvoerbaarheid. | Ja als impact op scope/prijs later |
| Veiligheid/omgeving risico | Risico voor vervolg. | Ja als impact |
| Open punt opname | Concrete vervolgactie. | Ja |
| Opnameconclusie | Besluit of scope akkoord/aanpassen/onderzoek nodig is. | Ja |

## Besluit aan einde pagina 3

| Besluit | Betekenis | Terugwerking |
|---|---|---|
| Scope akkoord | Scope uit pagina 2 klopt voldoende. | Pagina 2 kan gereed worden gezet. |
| Akkoord met voorbehoud | Scope klopt grotendeels, maar er blijven aannames. | Pagina 2 krijgt risico/voorbehoud. |
| Scope aanpassen | Opname wijkt af van scope. | Pagina 2 moet worden aangepast. |
| Extra onderzoek nodig | Buitenopname is onvoldoende. | Open actie / onderzoek terug naar pagina 2. |
| Niet offertegereed | Er ontbreekt te veel. | Stop voor offerte/begroting. |

## Controllerregels

1. Pagina 3 mag geen nieuwe scope-regels als hoofdproces starten.
2. Nieuwe bevindingen worden teruggezet als wijziging op pagina 2.
3. Pagina 3 bevat geen prijzen, marges of doelstellingbegroting.
4. Foto's horen gekoppeld aan een scope-ID, niet los in een dossierbak.
5. Een afwijking moet altijd een besluitwaarde hebben: akkoord, aanpassen, onderzoek of niet gereed.

## Compacte schermopzet pagina 3

| Deel | Inhoud |
|---|---|
| Bovenregel | Project, WO, datum opname, opnemer. |
| Scopekaart dicht | Werkzaamheid, locatie, hoeveelheid, betrouwbaarheid, controle nodig. |
| Scopekaart open | Meting, afwijking, conditie, foto's, risico en conclusie. |
| Samenvatting | Alleen regels met afwijking, risico of open punt. |

## Stopindicaties

Pagina 3 mag niet door naar offerte/begroting als:

- meerdere scope-regels `niet herkenbaar` of `deels herkenbaar` zijn;
- hoeveelheden niet controleerbaar zijn;
- veiligheid/wetgeving eerst onderzocht moet worden;
- bron en werkelijkheid elkaar tegenspreken;
- projectleider geen opnameconclusie kan kiezen.

## Status

Overdracht pagina 2 naar pagina 3 is inhoudelijk uitgewerkt voor panelcontrole. Nog geen bouw-Go.
