
var pExtend = require('./property_extends')()

var numbers = ['1', '2', '3', '4', '5+'];

module.exports = {
  "name": "properties",
  "fields": [
    {
      "name": "uid",
      "faker": "faker.random.uuid()"
    },
    {
      "name": "title",
      "faker": "faker.lorem.sentence()"
    },
    {
      "name": "slug",
      "faker": "faker.random.uuid()"
    },
    {
      "name": "price",
      "faker": "faker.finance.amount()"
    },
    {
      "name": "bedrooms",
      "faker": "faker.random.arrayElement(" + JSON.stringify(numbers) + ").id"
    },
    {
      "name": "bathrooms",
      "faker": "faker.random.arrayElement(" + JSON.stringify(numbers) + ").id"
    },
    {
      "name": "garage",
      "faker": "faker.random.arrayElement([true, false]).id"
    },
    {
      "name": "pisos",
      "faker": "faker.random.arrayElement(" + JSON.stringify(numbers) + ").id"
    },
    {
      "name": "total_area",
      "faker": "faker.random.number()"
    },
    {
      "name": "build_area",
      "faker": "faker.random.number()"
    },
    {
      "name": "description",
      "faker": "faker.lorem.sentences()"
    },
    {
      "name": "phone_contact",
      "faker": "faker.phone.phoneNumber()"
    },
    {
      "name": "name_area",
      "faker": "faker.address.streetName()"
    },
    {
      "name": "address",
      "faker": "faker.address.streetAddress()"
    },
    {
      "name": "references",
      "faker": "faker.address.secondaryAddress()"
    },
    {
      "name": "video_url",
      "faker": "faker.internet.avatar()"
    },
    {
      "name": "file_url",
      "faker": "faker.internet.avatar()"
    },
    {
      "name": "date_expired",
      "faker": "Date.now()"
    },
    {
      "name": "location_lat",
      "faker": "faker.address.latitude()"
    },
    {
      "name": "location_lng",
      "faker": "faker.address.longitude()"
    },
    {
      "name": "userId",
      "faker": "faker.random.arrayElement(schema.users).id"
    },
    {
      "name": "districtId",
      "faker": "faker.random.arrayElement(schema.districts).id"
    },
    {
      "name": "property_transactionId",
      "faker": "faker.random.arrayElement(" + JSON.stringify(pExtend.transactions()) + ").id"
    },
    {
      "name": "property_typeId",
      "faker": "faker.random.arrayElement(" + JSON.stringify(pExtend.types()) + ").id"
    },
    {
      "name": "property_moneyId",
      "faker": "faker.random.arrayElement(" + JSON.stringify(pExtend.moneys()) + ").id"
    },
    {
      "name": "property_levelId",
      "faker": "faker.random.arrayElement(" + JSON.stringify(pExtend.levels()) + ").id"
    },
    {
      "name": "property_statusId",
      "faker": "faker.random.arrayElement(" + JSON.stringify(pExtend.statuses()) + ").id"
    }
  ]
}