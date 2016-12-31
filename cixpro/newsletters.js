
var pExtend = require('./property_extends')()

module.exports = {
  "name": "newsletters",
  "fields": [
    {
      "name": "email",
      "faker": "faker.random.arrayElement(schema.users).email"
    },
    {
      "name": "status",
      "faker": "faker.random.arrayElement([true, false])"
    },
    {
      "name": "property_typeId",
      "faker": "faker.random.arrayElement(" + JSON.stringify(pExtend.types()) + ").id"
    }
  ]
}