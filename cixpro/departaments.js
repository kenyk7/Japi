
module.exports = {
  "name": "departaments",
  "fields": [
    {
      "name": "name",
      "faker": "faker.address.state()"
    },
    {
      "name": "location",
      "faker": "helpers.genLocation()"
    }
  ]
}