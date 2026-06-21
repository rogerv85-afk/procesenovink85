# Rollenmatrix procesmanagementsysteem

## Doel

Per processtap vastleggen wie invult, wie controleert, wie beslist en welke output nodig is voor de volgende stap.

## Rollen

| Rol | Betekenis |
|---|---|
| Gebruiker | Praktijkkeuzes en eindakkoord. |
| Projectmanager | Bewaakt planning, volgorde, afhankelijkheden en panelronde. |
| Controller | Bewaakt bronstatus, stopregels, dubbele invoer, kwaliteit en verslag. |
| Werkvoorbereider | Beoordeelt uitvoerbaarheid, opname, uitvraag en overdracht. |
| Calculator | Beoordeelt hoeveelheden, eenheden, aannames en prijsbaarheid. |
| Projectleider | Beslist of de stap logisch, compleet en overdraagbaar is. |
| Directie / CEO | Toetst eenvoud, stuurinformatie, risico en beheersbaarheid. |

## Matrix per processtap

| Stap | Procesdeel | Invuller | Controleur | Beslisser | Output naar volgende stap |
|---:|---|---|---|---|---|
| 1 | Aanvraaganalyse opdrachtgever | Projectleider / werkvoorbereider | Controller | Projectleider + gebruiker | Klantvraag, stukkenstatus, eerste conclusie, open acties. |
| 2 | Projectopzet / scope | Werkvoorbereider / calculator | Controller | Projectleider | Scope-items, hoeveelheden, eenheden, gevel/locatie, bron, aannames. |
| 3 | Opname locatie | Werkvoorbereider | Projectleider / calculator | Projectleider | Controle buiten, foto's, metingen, afwijkingen, risico's, conclusie. |
| 4 | Offerteaanvraag onderaannemer | Werkvoorbereider | Calculator | Projectleider | Uitvraag per onderaannemer met scope en randvoorwaarden. |
| 5 | Begroting / offerte | Calculator | Controller / projectleider | Projectleider / gebruiker | Prijs, aannames, risico's, offertevoorstel. |
| 6 | Opdracht | Projectleider | Controller | Gebruiker / directie indien nodig | Opdrachtstatus, voorwaarden, contractuele basis. |
| 7 | Doelstellingbegroting | Calculator / controller | Projectleider | Directie / projectleider | Streefbudget na opdracht, niet eerder. |
| 8 | Uitvoering / weekrapportage / meer-minderwerk | Projectleider / uitvoering | Controller | Projectleider | Voortgang, afwijkingen, acties, meer-/minderwerk. |
| 9 | Oplevering / deeloplevering | Projectleider / werkvoorbereider | Gebruiker / opdrachtgever | Projectleider | Opleverstatus, puntenlijst, akkoord of restpunten. |

## Besluitregels per stap

| Stap | Besluitvraag | Mogelijke besluiten |
|---:|---|---|
| 1 | Is de aanvraag duidelijk genoeg? | Door naar projectopzet / eerst aanvullen / niet doorgaan |
| 2 | Is de scope voldoende scherp? | Door naar opname / eerst aanvullen / buiten scope laten |
| 3 | Klopt buiten met de scope? | Akkoord / akkoord met voorbehoud / terug naar scope |
| 4 | Is de uitvraag compleet genoeg? | Versturen / eerst aanvullen / niet uitvragen |
| 5 | Is de prijs verantwoord? | Offerte maken / herberekenen / stoppen |
| 6 | Is opdracht akkoord? | Opdracht aangenomen / voorwaarden aanpassen / stoppen |
| 7 | Is doelstellingbegroting passend na opdracht? | Akkoord / bijstellen / escaleren |
| 8 | Loopt uitvoering beheerst? | Door / bijsturen / escaleren |
| 9 | Is oplevering akkoord? | Akkoord / restpunten / niet akkoord |

## Dubbele invoer voorkomen

| Gegeven | Eenmalig invoeren in | Hergebruik in |
|---|---|---|
| Projectnaam / object | Pagina 1 | Alle volgende pagina's |
| WO / aanvraagnummer | Pagina 1 | Alle volgende pagina's |
| Opdrachtgever / VvE | Pagina 1 | Alle volgende pagina's |
| Klantvraag | Pagina 1 | Pagina 2 scopecontext |
| Werkonderdelen eerste indruk | Pagina 1 | Pagina 2 scopekandidaten |
| Scope-items | Pagina 2 | Pagina 3, uitvraag, begroting |
| Hoeveelheden en eenheden | Pagina 2 | Opnamecontrole, begroting |
| Opnameafwijkingen | Pagina 3 | Scopecorrectie, uitvraag, begroting |
| Opdrachtstatus | Pagina 6 | Doelstellingbegroting en uitvoering |

## Controllerconclusie

De rollenmatrix ondersteunt de hoofdregel: elke pagina heeft één doel, één beslismoment en duidelijke overdracht.

Belangrijkste bewaking:

- Pagina 2 mag geen begroting worden.
- Pagina 3 mag geen nieuwe scope worden.
- Doelstellingbegroting mag pas na opdracht.
- Directie/CEO hoeft niet alles te zien, alleen risico, status en stuurinformatie.
