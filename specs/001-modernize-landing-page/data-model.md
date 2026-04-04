# Data Model: Modernize Landing Page Layout

## Entities

### `ContactFormPayload`
Volatile data payload submitted by the user from the client side, required for executing `nodemailer` logic.

- **name** (`string`): The user's providing name. Required. Max 100 chars.
- **email** (`string`): Valid email format. Required. Max 255 chars.
- **subject** (`string`, optional): Subject of the inquiry.
- **message** (`string`): The core message body. Required. Max 2000 chars.

## Validation Rules
- `name` cannot be empty.
- `email` must match an RFC 5322 regex.
- `message` must be at least 10 characters long to filter explicit spam bots.

*(Note: Data is ephemeral and only exists in transit for the SMTP gateway, therefore it has no relational database definitions or persistent state transitions).*
