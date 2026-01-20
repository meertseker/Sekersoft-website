## Ölçümleme (GTM/GA4/Meta) — Event Sözlüğü

### Consent
- **Event**: `consent_update`
- **Payload**:
  - `consent_analytics`: boolean
  - `consent_marketing`: boolean
  - `consent_updated_at`: ISO string

### Funnel (Sekersoft Lojistik Demo)
- **Event**: `cta_click_demo`
  - `source`: ör. `logistics_hero`

- **Event**: `demo_form_start`
  - `formName`: `demo`

- **Event**: `demo_submit_attempt`
  - `formName`: `demo`

- **Event**: `demo_submit_success` (Primary Conversion)
  - `formName`: `demo`
  - `vehicleCount`: `1` | `2-5` | `6-10` | `10+` | undefined
  - `company`: string | undefined

- **Event**: `demo_submit_error`
  - `formName`: `demo`

### Micro Conversions
- **Event**: `whatsapp_click`
  - `source`: ör. `logistics`
- **Event**: `phone_click`
  - `source`: ör. `logistics`
- **Event**: `scroll_depth_50`
- **Event**: `scroll_depth_75`

## GTM önerilen kurulum
- Trigger: Custom Event = `demo_submit_success`
- Tag: GA4 Event (Conversion olarak işaretle)
- Tag: Meta Pixel Custom Event (Lead / Custom) — consent sonrası

