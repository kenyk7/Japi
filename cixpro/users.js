
module.exports = {
  "name": "users",
  "fields": [
    {
      "name": "name",
      "faker": "faker.name.findName()"
    },
    {
      "name": "email",
      "faker": "faker.internet.email()"
    },
    {
      "name": "username",
      "faker": "faker.internet.userName()"
    },
    {
      "name": "password",
      "faker": "faker.internet.password()"
    },
    {
      "name": "telephone",
      "faker": "faker.phone.phoneNumber()"
    },
    {
      "name": "bio",
      "faker": "faker.lorem.sentence()"
    },
    {
      "name": "ruc",
      "faker": "12345609876"
    },
    {
      "name": "photo_profile",
      "faker": "faker.internet.avatar()"
    },
    {
      "name": "token",
      "faker": "faker.random.uuid()"
    },
    {
      "name": "remenber_token",
      "faker": "faker.random.uuid()"
    },
    {
      "name": "verified",
      "faker": "faker.random.arrayElement([true, false])"
    },
    {
      "name": "user_type",
      "faker": "faker.random.arrayElement(['member','agent', 'builder', 'real_state'])"
    }
  ]
}