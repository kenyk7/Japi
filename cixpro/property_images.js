
module.exports = {
  "name": "property_images",
  "fields": [
    {
      "name": "name",
      "faker": "faker.system.commonFileName()"
    },
    {
      "name": "size",
      "faker": "faker.random.number()"
    },
    {
      "name": "folder",
      "faker": "faker.image.imageUrl()"
    },
    {
      "name": "propertyId",
      "faker": "faker.random.arrayElement(schema.properties).id"
    }
  ]
}