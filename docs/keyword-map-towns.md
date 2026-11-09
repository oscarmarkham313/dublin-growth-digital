# Keyword map: the town cohort

Generated from `config/towns.ts`. Regenerate with
`python scripts/town-keywords.py`.

---

## Why this cohort gets the volume

Town pages are the only thing on this site that has moved a commercial
term onto page one. "marketing agency naas" sat at **27.4** before the
page existed and reached **9.5** after it shipped.

Page-type positions, 28 days to 7 November 2026:

| page type | position |
|---|---|
| niche / industry pages | 8-28 |
| town pages | 9.5 (Naas, the only one with age on it) |
| county hubs | 60.2 |
| home page | 71.9 |
| anything Dublin | 73-96 |

---

## The families, and which ones earn a place

| family | evidence | verdict |
|---|---|---|
| `marketing agency <town>` | naas 9.5, kildare 16.8, westmeath 20.0 | **primary** |
| `digital marketing <town>` | naas 34.2, kildare 35.5 | **build** |
| `google ads <town>` | kildare 14.5, naas 34.1 | **build** |
| `marketing agency near me` | 53.4 nationally, served by whichever town is nearest | **incidental** |
| `web design <town>` | no direct data, same page type | **secondary** |
| `seo <town>` | seo services kildare 85.6, seo services naas 79.3, seo dublin 89.9 | **do not build** |
| `<town> seo` | same pages, same failure | **do not build** |

The `seo <place>` row matters more than the rest. Every SEO-service
term on the site sits between 79 and 96 regardless of geography, which
is measured failure rather than an untested guess. The county x service
SEO pages already exist; none should be built at town level.

---

## Targets by county

Each town carries four viable targets: `marketing agency <town>`,
`digital marketing <town>`, `google ads <town>` and `web design <town>`.

### Carlow (3 towns, 12 targets)

| town | primary target | page |
|---|---|---|
| Bagenalstown | `marketing agency bagenalstown` | `/towns/bagenalstown/` |
| Carlow Town | `marketing agency carlow town` | `/towns/carlow-town/` |
| Tullow | `marketing agency tullow` | `/towns/tullow/` |

### Dublin (10 towns, 40 targets)

| town | primary target | page |
|---|---|---|
| Balbriggan | `marketing agency balbriggan` | `/towns/balbriggan/` |
| Blanchardstown | `marketing agency blanchardstown` | `/towns/blanchardstown/` |
| Clondalkin | `marketing agency clondalkin` | `/towns/clondalkin/` |
| Dundrum | `marketing agency dundrum` | `/towns/dundrum/` |
| Dún Laoghaire | `marketing agency dún laoghaire` | `/towns/dun-laoghaire/` |
| Lucan | `marketing agency lucan` | `/towns/lucan/` |
| Malahide | `marketing agency malahide` | `/towns/malahide/` |
| Rathfarnham | `marketing agency rathfarnham` | `/towns/rathfarnham/` |
| Swords | `marketing agency swords` | `/towns/swords/` |
| Tallaght | `marketing agency tallaght` | `/towns/tallaght/` |

### Kildare (13 towns, 52 targets)

| town | primary target | page |
|---|---|---|
| Athy | `marketing agency athy` | `/towns/athy/` |
| Celbridge | `marketing agency celbridge` | `/towns/celbridge/` |
| Clane | `marketing agency clane` | `/towns/clane/` |
| Kilcock | `marketing agency kilcock` | `/towns/kilcock/` |
| Kildare Town | `marketing agency kildare town` | `/towns/kildare-town/` |
| Leixlip | `marketing agency leixlip` | `/towns/leixlip/` |
| Maynooth | `marketing agency maynooth` | `/towns/maynooth/` |
| Monasterevin | `marketing agency monasterevin` | `/towns/monasterevin/` |
| Naas | `marketing agency naas` | `/towns/naas/` |
| Newbridge | `marketing agency newbridge` | `/towns/newbridge/` |
| Prosperous | `marketing agency prosperous` | `/towns/prosperous/` |
| Rathangan | `marketing agency rathangan` | `/towns/rathangan/` |
| Sallins | `marketing agency sallins` | `/towns/sallins/` |

### Kilkenny (2 towns, 8 targets)

| town | primary target | page |
|---|---|---|
| Kilkenny City | `marketing agency kilkenny city` | `/towns/kilkenny-city/` |
| Thomastown | `marketing agency thomastown` | `/towns/thomastown/` |

### Laois (3 towns, 12 targets)

| town | primary target | page |
|---|---|---|
| Abbeyleix | `marketing agency abbeyleix` | `/towns/abbeyleix/` |
| Mountmellick | `marketing agency mountmellick` | `/towns/mountmellick/` |
| Portlaoise | `marketing agency portlaoise` | `/towns/portlaoise/` |

### Louth (3 towns, 12 targets)

| town | primary target | page |
|---|---|---|
| Ardee | `marketing agency ardee` | `/towns/ardee/` |
| Drogheda | `marketing agency drogheda` | `/towns/drogheda/` |
| Dundalk | `marketing agency dundalk` | `/towns/dundalk/` |

### Meath (10 towns, 40 targets)

| town | primary target | page |
|---|---|---|
| Ashbourne | `marketing agency ashbourne` | `/towns/ashbourne/` |
| Athboy | `marketing agency athboy` | `/towns/athboy/` |
| Duleek | `marketing agency duleek` | `/towns/duleek/` |
| Dunboyne | `marketing agency dunboyne` | `/towns/dunboyne/` |
| Dunshaughlin | `marketing agency dunshaughlin` | `/towns/dunshaughlin/` |
| Enfield | `marketing agency enfield` | `/towns/enfield/` |
| Kells | `marketing agency kells` | `/towns/kells/` |
| Navan | `marketing agency navan` | `/towns/navan/` |
| Ratoath | `marketing agency ratoath` | `/towns/ratoath/` |
| Trim | `marketing agency trim` | `/towns/trim/` |

### Offaly (3 towns, 12 targets)

| town | primary target | page |
|---|---|---|
| Birr | `marketing agency birr` | `/towns/birr/` |
| Edenderry | `marketing agency edenderry` | `/towns/edenderry/` |
| Tullamore | `marketing agency tullamore` | `/towns/tullamore/` |

### Westmeath (5 towns, 20 targets)

| town | primary target | page |
|---|---|---|
| Athlone | `marketing agency athlone` | `/towns/athlone/` |
| Castlepollard | `marketing agency castlepollard` | `/towns/castlepollard/` |
| Kinnegad | `marketing agency kinnegad` | `/towns/kinnegad/` |
| Moate | `marketing agency moate` | `/towns/moate/` |
| Mullingar | `marketing agency mullingar` | `/towns/mullingar/` |

### Wexford (3 towns, 12 targets)

| town | primary target | page |
|---|---|---|
| Enniscorthy | `marketing agency enniscorthy` | `/towns/enniscorthy/` |
| Gorey | `marketing agency gorey` | `/towns/gorey/` |
| Wexford Town | `marketing agency wexford town` | `/towns/wexford-town/` |

### Wicklow (8 towns, 32 targets)

| town | primary target | page |
|---|---|---|
| Arklow | `marketing agency arklow` | `/towns/arklow/` |
| Baltinglass | `marketing agency baltinglass` | `/towns/baltinglass/` |
| Blessington | `marketing agency blessington` | `/towns/blessington/` |
| Bray | `marketing agency bray` | `/towns/bray/` |
| Greystones | `marketing agency greystones` | `/towns/greystones/` |
| Newtownmountkennedy | `marketing agency newtownmountkennedy` | `/towns/newtownmountkennedy/` |
| Rathdrum | `marketing agency rathdrum` | `/towns/rathdrum/` |
| Wicklow Town | `marketing agency wicklow town` | `/towns/wicklow-town/` |

---

## Totals

| | |
|---|---|
| towns | 63 |
| counties covered | 11 |
| viable keyword targets | **252** |
| deliberately excluded (`seo <town>`) | 126 |

Excluded on purpose: Dublin has ten town pages already and every
Dublin query on the site sits between 73 and 96. No more were added.
