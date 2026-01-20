## UTM Standardı

### Zorunlu alanlar
- `utm_source`: `google` | `meta` | `linkedin` | `newsletter` | `partner`
- `utm_medium`: `cpc` | `paid_social` | `email` | `referral`
- `utm_campaign`: kampanya adı (snake_case önerilir)

### Önerilen alanlar
- `utm_content`: kreatif / asset varyantı
- `utm_term`: keyword (Google Search) / audience (Meta)

### Örnekler
- Google Search Non‑Brand:
  - `utm_source=google&utm_medium=cpc&utm_campaign=logistics_nonbrand&utm_term={keyword}&utm_content={adgroup}`
- Meta Remarketing:
  - `utm_source=meta&utm_medium=paid_social&utm_campaign=logistics_rm&utm_content={placement}_{creative}`

