
module.exports = {
  "name": "users",
  "fields": [
    {
      "name": "role",
      "faker": "faker.random.arrayElement(['admin', 'anonymus'])"
    },
    {
      "name": "name",
      "faker": "faker.name.firstName()"
    },
    {
      "name": "surname",
      "faker": "faker.name.firstName()"
    },
    {
      "name": "email",
      "faker": "faker.internet.email()"
    },
    {
      "name": "password",
      "faker": "faker.internet.password()"
    },
    {
      "name": "image",
      "faker": "faker.image.avatar()"
    },
    {
      "name": "create_at",
      "faker": "Date.now()"
    }
  ]
}