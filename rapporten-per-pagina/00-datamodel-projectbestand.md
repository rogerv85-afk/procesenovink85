# Datamodel projectbestand

Status: aangeleverd als definitieve basis voor één projectbestand.
Doel: gegevens van pagina 1 doorgeven naar pagina 2, 3, 4 en verder.

## Projectkop

| Veldnaam | Label in formulier | Pagina waar ingevuld | Pagina's waar hergebruikt | Type veld | Verplicht | Voorbeeldwaarde |
|---|---|---:|---|---|---|---|
| `project` | Project / complex | 1 | 2, 3, 4+ | Tekst | Ja | VvE Penatenhof |
| `werkordernummer` | Werkordernummer (WO) | 1 | 2, 3, 4+ | Tekst | Ja | WO 2601661 |
| `opdrachtgever` | Opdrachtgever / VvE | 1 | 2, 3, 4+ | Tekst | Ja | VvE Penatenhof |
| `projectleider` | Projectleider | 1 | 2, 3, 4+ | Tekst | Ja | C. de Haan |
| `adres` | Adres / locatie | 1 | 2, 3, 4+ | Tekst | Ja | Penatenhof 12, Rotterdam |
| `status` | Status | 1 | 2, 3, 4+ | Keuzelijst | Ja | Concept |
| `aanvraagdatum` | Datum aanvraag | 1 | 2, 3, 4+ | Datum | Ja | 2026-06-22 |
| `aanvraagnummer` | Aanvraagnummer | 1 | 2, 3, 4+ | Tekst | Nee | AANVR-001 |
| `beheerder` | Beheerder / contactpersoon | 1 | 2, 3, 4+ | Tekst | Nee | Janssen Vastgoedbeheer |

## Vraag opdrachtgever

| Veldnaam | Label in formulier | Pagina waar ingevuld | Pagina's waar hergebruikt | Type veld | Verplicht | Voorbeeldwaarde |
|---|---|---:|---|---|---|---|
| `letterlijkeVraag` | Wat vraagt de klant letterlijk? | 1 | 2, 3 | Lange tekst | Ja | Offerte voor gevelherstel en schilderwerk kozijnen |
| `aanleiding` | Aanleiding | 1 | 2, 3 | Keuzelijst | Nee | Onderhoudsbehoefte |
| `gewenstResultaat` | Gewenst resultaat | 1 | 2, 3 | Keuzelijst | Nee | Richtprijs / offerte |
| `achterliggendeVraag` | Wat lijkt de achterliggende vraag? | 1 | 2, 3 | Lange tekst | Nee | Bepalen welke werkzaamheden noodzakelijk zijn |

## Werkzaamheden

Gebruik als herhaalbare lijst: `werkzaamheden[]`.

| Veldnaam | Label in formulier | Pagina waar ingevuld | Pagina's waar hergebruikt | Type veld | Verplicht | Voorbeeldwaarde |
|---|---|---:|---|---|---|---|
| `werkzaamheden[].naam` | Werkzaamheid | 2 | 3, 4+ | Tekst | Ja | Gevelreiniging |
| `werkzaamheden[].hoeveelheid` | Hoeveelheid | 1, 2 | 3, 4+ | Tekst / getal met toelichting | Nee | 120 |
| `werkzaamheden[].eenheid` | Eenheid | 2 | 3, 4+ | Keuzelijst | Nee | m2 |
| `werkzaamheden[].locatie` | Gevel / locatie | 1, 2 | 3, 4+ | Tekst | Nee | Voorgevel, blok A |
| `werkzaamheden[].bron` | Vraag / bron / herkomst | 1, 2 | 3, 4+ | Tekst / keuzelijst | Nee | Klantvraag |
| `werkzaamheden[].betrouwbaarheid` | Betrouwbaarheid | 1 | 2, 3, 4+ | Keuzelijst | Nee | Indicatief |
| `werkzaamheden[].vervolgactie` | Vervolgactie | 1 | 2, 3, 4+ | Keuzelijst | Ja | Eerst opnemen / meten |
| `werkzaamheden[].scopebesluit` | Scopebesluit | 2 | 3, 4+ | Keuzelijst | Nee | In scope |
| `werkzaamheden[].onderaannemer` | Onderaannemer? | 2 | 4+ | Keuzelijst | Nee | Ja, uitvragen |
| `werkzaamheden[].notitie` | Korte notitie / uitgangspunt | 1, 2 | 3, 4+ | Tekst | Nee | Hoeveelheid controleren tijdens opname |

## Gevels

Gebruik als herhaalbare lijst: `gevels[]`.

| Veldnaam | Label in formulier | Pagina waar ingevuld | Pagina's waar hergebruikt | Type veld | Verplicht | Voorbeeldwaarde |
|---|---|---:|---|---|---|---|
| `gevels[].code` | Code | 2 | 3, 4+ | Tekst | Nee | A |
| `gevels[].naam` | Naam | 2 | 3, 4+ | Tekst | Nee | Voorgevel |
| `gevels[].hoeveelheid` | Indicatie hoeveelheid | 2 | 3, 4+ | Tekst | Nee | 120 m2 |
| `gevels[].notitie` | Notitie | 2 | 3, 4+ | Tekst | Nee | Bereikbaar vanaf binnenterrein |

## Opnamevoorbereiding en conclusie

| Veldnaam | Label in formulier | Pagina waar ingevuld | Pagina's waar hergebruikt | Type veld | Verplicht | Voorbeeldwaarde |
|---|---|---:|---|---|---|---|
| `opnamepunten` | Meetpunten / aandachtspunten opname | 2 | 3 | Lange tekst | Ja | Voegwerk per gevel meten, scheuren controleren |
| `opnemer` | Opnemer | 2 | 3 | Tekst | Nee | J. Smit |
| `opnamedatum` | Geplande opnamedatum | 2 | 3, 4+ | Datum | Nee | 2026-07-03 |
| `duidelijk` | Wat is duidelijk? | 1 | 2, 3 | Lange tekst | Nee | Gevelreiniging en voegwerk zijn gevraagd |
| `onzeker` | Wat is nog onzeker? | 1 | 2, 3 | Lange tekst | Nee | Exacte hoeveelheden en staat van ondergrond |
| `noodzakelijk` | Noodzakelijke werkzaamheden | 1 | 2, 3, 4+ | Lange tekst | Nee | Reiniging, voegwerkherstel, schilderwerk |
| `optioneel` | Extra / optioneel | 1 | 2, 4+ | Lange tekst | Nee | Hydrofoberen als optie opnemen |
| `advies` | Kunnen we verder of is aanvullend advies/opname nodig? | 1 | 2, 3 | Lange tekst | Ja | Eerst locatieopname uitvoeren |
| `vervolgstap` | Vervolgstap | 2 | 3, 4+ | Keuzelijst | Ja | Naar opname |
| `besluitdatum` | Besluitdatum | 2 | 3, 4+ | Datum | Nee | 2026-06-25 |
| `projectopzet` | Korte projectopzet | 2 | 3, 4+ | Lange tekst | Ja | Scope bestaat uit gevelherstel, hoeveelheden na opname bevestigen |

## Documenten

Gebruik als herhaalbare lijst: `documenten[]`.

| Veldnaam | Label in formulier | Pagina waar ingevuld | Pagina's waar hergebruikt | Type veld | Verplicht | Voorbeeldwaarde |
|---|---|---:|---|---|---|---|
| `documenten[].naam` | Naam of kenmerk van het stuk | 1 | 2, 3, 4+ | Tekst | Nee | MJOP 2025 |
| `documenten[].status` | Documentstatus | 1 | 2, 3, 4+ | Keuzelijst | Nee | Ontvangen |
| `documenten[].link` | Link of pad plakken | 1 | 2, 3, 4+ | URL / bestandspad | Nee | G:\Projecten\MJOP.pdf |
| `documenten[].conclusie` | Korte conclusie | 1 | 2, 3, 4+ | Tekst | Nee | Voegwerk matig, herstel binnen 2 jaar |

## Ontbrekende informatie

Gebruik als herhaalbare lijst: `ontbrekendeInfo[]`.

| Veldnaam | Label in formulier | Pagina waar ingevuld | Pagina's waar hergebruikt | Type veld | Verplicht | Voorbeeldwaarde |
|---|---|---:|---|---|---|---|
| `ontbrekendeInfo[].wat` | Wat ontbreekt? | 1 | 2, 3 | Tekst | Nee | Hoeveelheden per gevel |
| `ontbrekendeInfo[].wie` | Opvragen bij wie? | 1 | 2, 3 | Tekst | Nee | Beheerder |
| `ontbrekendeInfo[].voor` | Nodig voor | 1 | 2, 3 | Keuzelijst | Nee | Opname / offerte |

## Implementatiebesluit

Gebruik `project`, `werkordernummer`, `opdrachtgever`, `projectleider`, `adres`, `status` en `aanvraagdatum` als vaste projectkop.
Gebruik `werkzaamheden[]`, `gevels[]`, `documenten[]` en `ontbrekendeInfo[]` als herhaalbare lijsten.

## Technische migratie

Huidige app gebruikt nog losse veldnamen zoals `work_1_naam`, `work_1_hoeveelheid` en `actie_1_punt`.
Gewenste eindstructuur is een genest projectbestand met lijsten.
Migratie moet gecontroleerd gebeuren zodat bestaande browserdata niet direct kapot gaat.
