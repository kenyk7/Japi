
module.exports = {
  "name": "property_projects",
  "fields": [
    {
      "name": "propertyId",
      "faker": "faker.random.arrayElement(schema.properties).id"
    },
    {
      "name": "type",
      "faker": "faker.random.arrayElement(['office', 'apartement', 'comercial'])"
    },
    {
      "name": "status",
      "faker": "faker.random.arrayElement(['plane', 'construction', 'launching'])"
    }
  ]
}