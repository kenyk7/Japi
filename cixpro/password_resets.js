
module.exports = {
  "name": "password_resets",
  "fields": [
    {
      "name": "email",
      "faker": "faker.random.arrayElement(schema.users).email"
    },
    {
      "name": "token",
      "faker": "faker.random.uuid()"
    }
  ]
}