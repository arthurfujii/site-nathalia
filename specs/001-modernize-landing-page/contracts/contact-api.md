# External Interfaces: Modernize Landing Page Layout

## 1. Contact Form Endpoint

**Endpoint:** `POST /api/contact`
**Content-Type:** `application/json`
**Purpose:** Submits contact form data to the server to be dispatched via Nodemailer SMTP.

### Request Body
```json
{
  "name": "string (Required)",
  "email": "string (Required, valid email format)",
  "subject": "string (Optional)",
  "message": "string (Required, length > 10)"
}
```

### Response Attributes
- **Status 200 OK**:
  ```json
  { "message": "Email sent successfully." }
  ```
- **Status 400 Bad Request**: (Validation Errors)
  ```json
  { "error": "Invalid email format or missing fields." }
  ```
- **Status 500 Internal Server Error**: (SMTP Failures)
  ```json
  { "error": "Internal server error. Could not dispatch email." }
  ```
