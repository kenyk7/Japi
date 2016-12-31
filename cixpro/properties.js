
var pExtend = require('./property_extends')()

module.exports = {
  "name": "properties",
  "fields": [
    {
      "name": "title",
      "faker": "faker.lorem.sentence()"
    },
    {
      "name": "property_transactionId",
      "faker": "faker.random.arrayElement(" + JSON.stringify(pExtend.transactions()) + ").id"
    }
  ]
}