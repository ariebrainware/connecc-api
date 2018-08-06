# connecc-api

API Section for Connecc application

| Endpoint           | HTTP   | Description             |
| ------------------ | ------ | ----------------------- |
| `/contacts`        | GET    | Show all contacts       |
| `/contacts`        | POST   | Add new contact         |
| `/contacts/:id`    | DELETE | Delete contact by id    |
| `/contacts/search` | GET    | Search contact by query |

Request body example:

```json
{
  "name": "Alpha",
  "phoneNumber": "+62-8-1993-101010",
  "email": "alpha@alphabet.com",
  "address": "Alphabet Inc, USA"
}
```
