
module.exports = {
  "name": "comments",
  "fields": [
    {
    	"name": "body",
    	"faker": "faker.lorem.sentence()"
    },
    {
    	"name": "create_at",
    	"faker": "Date.now()"
    },
    {
    	"name": "userId", 
    	"faker": "faker.random.arrayElement(schema.users).id"
    },
    {
    	"name": "videoId", 
    	"faker": "faker.random.arrayElement(schema.videos).id"
    }
  ]
}
