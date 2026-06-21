# Dubbele bronnenlijst

## Doel

Voorkomen dat het team in het verkeerde bestand werkt. Hoofdmap blijft leidend, Drive is bron/backup, Temp is uitgesloten.

## Hoofdregel

Als een bestand zowel in `C:\Projecten\procesenovink85-git` als in Google Drive staat, is de hoofdmap leidend tenzij de gebruiker expliciet anders besluit.

## Bekende dubbele of conflicterende bronnen

| Nr. | Bestand / groep | Hoofdmap aanwezig | Drive aanwezig | Risico | Actie | Status |
|---:|---|---|---|---|---|---|
| 1 | `00-concept-proces-schermen.html` | Ja | Ja | Versies verschillen in grootte. | Alleen hoofdmap gebruiken, Drive als referentie markeren. | Open |
| 2 | `01-aanvraaganalyse-opdrachtgever.html` | Ja | Ja | Kan verwarring geven over actuele pagina 1. | Hoofdmap leidend maken. | Open |
| 3 | `01-aanvraaganalyse-demo.html` | Ja | Ja | Demo kan worden verward met actuele pagina. | Demo labelen als referentie. | Open |
| 4 | `02-projectopzet-werkzaamheden.html` | Ja | Ja | Drive-versie lijkt ouder/anders. | Hoofdmap leidend maken, verschil noteren. | Open |
| 5 | `02-projectopzet-demo.html` | Ja | Ja | Grootte verschilt tussen hoofdmap en Drive. | Vergelijken voordat inhoud wordt gebruikt. | Open |
| 6 | `index.html` | Ja | Ja | Publicatie/navigatie kan verschillen. | Hoofdmap leidend houden. | Open |
| 7 | `procesplan-op-papier.md` | Ja | Ja | Inhoud/grootte verschilt mogelijk. | Hoofdmap leidend; Drive alleen vergelijken. | Open |
| 8 | `Deeloplevering-Heerendonklaan*.html` | Nee/bron niet in hoofdmap als actueel | Ja | Kan te vroeg worden meegenomen. | Alleen bron voor latere opleveringsfase. | Open |
| 9 | `proces geheel uitwerken.zip` | Nee als uitgepakt projectbron | Ja | Kan oude of dubbele bestanden terugbrengen. | Niet uitpakken zonder besluit. | Open |
| 10 | Temp-bestanden | Nee als bron | Ja/Temp elders | Groot risico op werken in tijdelijke kopie. | Temp definitief uitsluiten. | Open |

## Actuele leidende bestanden

| Procesdeel | Leidende bron nu | Status |
|---|---|---|
| Hoofdopdracht | `00-HOOFDOPDRACHT.md` | Lokaal leidend |
| Checklist | `00-CHECKLIST-OPEN-PUNTEN.md` en HTML-versie op Drive | In gebruik |
| Subtaken | `00-SUBTAKENLIJST.md` en HTML-versie op Drive | In gebruik |
| Pagina 1 papier | `01-aanvraaganalyse-papierplan.md` | Concept leidend |
| Pagina 2 papier | `02-projectopzet-scope-papierplan.md` | Concept leidend |
| Pagina 3 papier | `03-opname-locatie-papierplan.md` | Concept leidend |
| Pagina 1 HTML | `01-aanvraaganalyse-opdrachtgever.html` | Werkend concept, nu niet aanpassen |
| Pagina 2 HTML | `02-projectopzet-werkzaamheden.html` | Werkend concept, nu niet aanpassen |

## Eerstvolgende acties

1. Hoofdmapbestanden labelen als actueel/concept/referentie.
2. Drive-bestanden labelen als bron/backup/referentie.
3. Temp definitief uitsluiten in alle werkafspraken.
4. Besluiten of `proces geheel uitwerken.zip` later gecontroleerd wordt.
5. Geen HTML aanpassen totdat papierplan akkoord is.
