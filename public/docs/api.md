# API Documentation (Form Endpoints)

While Sekersoft primarily operates as a software provider with standalone applications, the website provides API-accessible endpoints for lead generation and inquiries via Formspree.

## Base URL
`https://formspree.io/f/xanrjoqw`

## Endpoints

### 1. Contact Inquiry
Used for general business inquiries and project proposals.

- **Method**: `POST`
- **Body (JSON)**:
  - `name`: String (Full Name)
  - `email`: String (Email Address)
  - `phone`: String (Phone Number)
  - `subject`: String (e.g., "Ürün Demo", "Teknik Destek")
  - `message`: String (Detailed inquiry)
  - `kvkk`: String ("on" or "off" for data protection consent)
  - `formName`: "contact"

### 2. Demo Request
Used specifically for requesting a 14-day trial of Sekersoft Lojistik.

- **Method**: `POST`
- **Body (JSON)**:
  - `name`: String (Full Name)
  - `email`: String (Email Address)
  - `phone`: String (Phone Number)
  - `company`: String (Company Name)
  - `vehicleCount`: String (e.g., "1", "2-5", "10+")
  - `message`: String (Optional message)
  - `formName`: "demo"

## Standard Response
- **Success (200 OK)**:
  ```json
  {
    "ok": true,
    "next": "..."
  }
  ```
- **Error**: Standard HTTP error codes with descriptive messages.
