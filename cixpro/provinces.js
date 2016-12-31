
module.exports = {
  "name": "provinces",
  "fields": [
    {
      "name": "name",
      "faker": "faker.address.city()"
    },
    {
      "name": "location",
      "faker": "helpers.genLocation()"
    },
    {
      "name": "departamentId",
      "faker": "faker.random.arrayElement(schema.departaments).id"
    }
  ]
}