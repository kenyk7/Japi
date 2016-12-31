
module.exports = {
  "name": "districts",
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
      "name": "provinceId",
      "faker": "faker.random.arrayElement(schema.provinces).id"
    }
  ]
}